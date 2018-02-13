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
import { updateSearchTerm } from '../actions';

type AllProps = Props & DispatchProps;

const RESULTS_LENGTH = 3;
const MIN_PRECISION = 0.4;

const SearchResults: React.SFC<AllProps> = ({ ...props }) => {
  return <ResultsContainer {...props} />;
};

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
  return s1.indexOf(s2) !== -1 ? s2.length / 10 : 0;
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
  };
};

const ConnectedSearchResults = connect<Props, DispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults);

export default ConnectedSearchResults;
