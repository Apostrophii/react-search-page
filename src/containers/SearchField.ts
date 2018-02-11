import { connect, DispatchProp } from 'react-redux';
import { State } from '../state';
import { Dispatch } from 'redux';
import { updateSearchTerm } from '../actions';
import { Input, Props, DispatchProps } from '../components/Input';

const mapStateToProps = (state: State): Props => {
  return { inputValue: state.searchTerm };
};

const mapDispatchToProps = (dispatch: Dispatch<State>): DispatchProps => {
  return {
    onInputChange: value => dispatch(updateSearchTerm(value)),
  };
};

const SearchField = connect<Props, DispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps,
)(Input);

export default SearchField;
