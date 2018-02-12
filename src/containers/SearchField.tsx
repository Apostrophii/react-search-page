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

class SearchField extends React.Component<AllProps> {
  unsubscribeFromHistory?: UnregisterCallback;

  componentWillMount() {
    const { history } = this.props;
    this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
    this.handleLocationChange(history.location, history.action);
  }

  componentWillUpdate(prevProps: AllProps, prevState: State) {
    if (
      prevProps.history.location.pathname.substr(1) !== prevProps.inputValue
    ) {
      prevProps.history.push(prevProps.inputValue);
    }
  }

  componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
  }

  handleLocationChange: LocationListener = location => {
    this.props.onInputChange(location.pathname.substr(1));
  };

  render() {
    return <Input {...this.props} />;
  }
}

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
