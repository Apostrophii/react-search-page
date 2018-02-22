import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Dispatch } from 'redux';
import { History, UnregisterCallback, LocationListener } from 'history';
import { State } from '../state';
import { updateSearchTerm } from '../actions';
import { Input, Props, DispatchProps } from '../components/Input';

interface OwnProps {
  history: History;
}

type AllProps = Props & DispatchProps & OwnProps;

const SearchField: React.SFC<AllProps> = ({ ...props }) => {
  return <Input {...props} />;
};

const mapStateToProps = (state: State): Props => {
  return { inputValue: state.searchTerm };
};

const mapDispatchToProps = (dispatch: Dispatch<State>): DispatchProps => {
  return {
    onInputChange: value => dispatch(updateSearchTerm(value)),
  };
};

const ConnectedSearchField = connect<Props, DispatchProps, OwnProps, State>(
  mapStateToProps,
  mapDispatchToProps,
)(SearchField);

export default ConnectedSearchField;
