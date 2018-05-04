import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../state';
import {
  ResultsContainer,
  Props,
  DispatchProps,
} from '../components/ResultsContainer';
import { resultsList, defaultList } from '../results/resultsList';
import { Dispatch } from 'redux';
import { updateSearchTerm, updateLastHit } from '../actions';
import { History, UnregisterCallback, LocationListener } from 'history';
import DefaultResult from '../results/DefaultResult';
import 'string_score';

interface OwnProps {
  history: History;
}

type AllProps = Props & DispatchProps & OwnProps;

const RESULTS_LENGTH = 9;
const MIN_PRECISION = 0.4;

class SearchResults extends React.Component<AllProps> {
  unsubscribeFromHistory?: UnregisterCallback;

  componentWillMount() {
    const { history } = this.props;
    this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
    this.updateInputFromLocation(history.location, history.action);
  }

  componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
  }

  componentWillReceiveProps(nextProps: AllProps) {
    const hit = nextProps.displayedResults.find(
      r => r.name === nextProps.searchTerm,
    );
    if (hit) {
      this.props.updateLastHit(hit.name);
      if (
        this.toTerm(nextProps.history.location.pathname) !== hit.name &&
        this.props.searchTerm !== hit.name
      ) {
        nextProps.history.push(this.toPath(nextProps.searchTerm));
      }
    }

    // Scroll to top if displayedResults changes
    if (nextProps.lastHit !== this.props.lastHit) {
      window.scrollTo(0, 0);
    }
  }

  handleLocationChange: LocationListener = (location, action) => {
    if (
      action === 'POP' &&
      this.props.lastHit !== this.props.searchTerm &&
      this.props.lastHit !== this.toTerm(location.pathname)
    ) {
      this.props.history.push(this.toPath(this.props.lastHit));
    } else {
      this.updateInputFromLocation(location, action);
    }
  };

  updateInputFromLocation: LocationListener = location => {
    this.props.updateSearchTerm(this.toTerm(location.pathname));
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
    return [
      {
        name: '',
        component: DefaultResult.component,
      },
    ];
  }
  return resultsList
    .map(r => ({
      ...r.names
        .map(n => ({
          name: n,
          score: n.score(searchTerm),
        }))
        .reduce((prev, curr) => (prev.score > curr.score ? prev : curr)),
      component: r.component,
    }))
    .filter(r => r.score > MIN_PRECISION)
    .sort((a, b) => b.score - a.score)
    .slice(0, RESULTS_LENGTH);
}

const mapStateToProps = (state: State): Props => {
  return {
    displayedResults: getResults(state.searchTerm),
    searchTerm: state.searchTerm,
    lastHit: state.lastHit,
    inputAnimation: state.inputAnimation,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<State>): DispatchProps => {
  return {
    updateSearchTerm: value => dispatch(updateSearchTerm(value)),
    updateLastHit: value => dispatch(updateLastHit(value)),
  };
};

const ConnectedSearchResults = connect<Props, DispatchProps, OwnProps, State>(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults);

export default ConnectedSearchResults;
