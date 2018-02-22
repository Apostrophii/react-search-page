import * as React from 'react';
import { connect } from 'react-redux';
import { get as levenshtein } from 'fast-levenshtein';
import { State } from '../state';
import {
  ResultsContainer,
  Props,
  DispatchProps,
} from '../components/ResultsContainer';
import { resultsList, defaultList } from '../results/resultsList';
import { Dispatch } from 'redux';
import { updateSearchTerm, UpdateSearchTermAction } from '../actions';
import { History, UnregisterCallback, LocationListener } from 'history';

interface OwnProps {
  history: History;
}

type AllProps = Props & DispatchProps & OwnProps;

const RESULTS_LENGTH = 3;
const MIN_PRECISION = 0.4;

class SearchResults extends React.Component<AllProps> {
  lastHit = '';
  unsubscribeFromHistory?: UnregisterCallback;

  componentWillMount() {
    const { history } = this.props;
    this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
    this.updateInputFromLocation(history.location, history.action);
  }

  componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
  }

  componentWillUpdate(nextProps: AllProps, nextState: State) {
    const hit = nextProps.displayedResults.find(
      r => r.name === nextProps.searchTerm,
    );
    if (!hit) {
      return;
    }

    this.lastHit = hit.name;

    if (
      this.toTerm(nextProps.history.location.pathname) !== hit.name &&
      this.props.searchTerm !== hit.name
    ) {
      nextProps.history.push(this.toPath(nextProps.searchTerm));
    }
  }

  handleLocationChange: LocationListener = (location, action) => {
    if (
      action === 'POP' &&
      this.lastHit !== this.props.searchTerm &&
      this.lastHit !== this.toTerm(location.pathname)
    ) {
      this.props.history.push(this.toPath(this.lastHit));
    } else {
      this.updateInputFromLocation(location, action);
    }
  };

  updateInputFromLocation: LocationListener = location => {
    this.props.onInputChange(this.toTerm(location.pathname));
  };

  toTerm(path: string): string {
    return path.substr(1).replace(new RegExp('_', 'g'), ' ');
  }

  toPath(term: string): string {
    return term.replace(new RegExp(' ', 'g'), '_');
  }

  render() {
    return <ResultsContainer {...this.props} />;
  }
}

function getResults(searchTerm: string) {
  if (searchTerm === '') {
    return defaultList.map(r => ({
      name: r.names[0],
      component: r.component,
    }));
  }
  return resultsList
    .map(r => ({
      ...r.names
        .map(n => ({
          name: n,
          score: levPercentage(n, searchTerm) + subStringWeight(n, searchTerm),
        }))
        .reduce((prev, curr) => (prev.score > curr.score ? prev : curr)),
      component: r.component,
    }))
    .filter(r => r.score > MIN_PRECISION)
    .slice(0, RESULTS_LENGTH);
}

function levPercentage(s1: string, s2: string) {
  const distance = levenshtein(s1, s2);
  const bigger = Math.max(s1.length, s2.length);
  return (bigger - distance) / bigger;
}

function subStringWeight(s1: string, s2: string) {
  return s1.indexOf(s2) !== -1 ? s2.length / 6 : 0;
}

const mapStateToProps = (state: State): Props => {
  return {
    displayedResults: getResults(state.searchTerm),
    searchTerm: state.searchTerm,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<State>): DispatchProps => {
  return {
    updateSearchTerm: value => dispatch(updateSearchTerm(value)),
    onInputChange: value => dispatch(updateSearchTerm(value)),
  };
};

const ConnectedSearchResults = connect<Props, DispatchProps, OwnProps, State>(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults);

export default ConnectedSearchResults;
