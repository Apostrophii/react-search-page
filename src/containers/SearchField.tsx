import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Dispatch } from 'redux';
import { History, UnregisterCallback, LocationListener } from 'history';
import { State } from '../state';
import { updateSearchTerm, updateInputAnimation } from '../actions';
import { Input, Props, DispatchProps } from '../components/Input';

interface OwnProps {
  history: History;
}

type AllProps = Props & DispatchProps & OwnProps;

class SearchField extends React.Component<AllProps> {
  componentWillReceiveProps(nextProps: AllProps) {
    // console.log(
    //   `lastInput: ${this.props.inputValue}, lastHit: ${
    //     this.props.lastHit
    //   }, nextInput: ${nextProps.inputValue}, nextHit: ${nextProps.lastHit}`,
    // );
    if (
      this.props.inputValue !== this.props.lastHit &&
      nextProps.inputValue === nextProps.lastHit
    ) {
      this.props.updateInputAnimation(false);
      setTimeout(() => this.props.updateInputAnimation(true), 50);
    }
  }

  render() {
    return <Input {...this.props} />;
  }
}

const mapStateToProps = (state: State): Props => {
  return {
    inputValue: state.searchTerm,
    lastHit: state.lastHit,
    inputAnimation: state.inputAnimation,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<State>): DispatchProps => {
  return {
    updateSearchTerm: value => dispatch(updateSearchTerm(value)),
    updateInputAnimation: value => dispatch(updateInputAnimation(value)),
  };
};

const ConnectedSearchField = connect<Props, DispatchProps, OwnProps, State>(
  mapStateToProps,
  mapDispatchToProps,
)(SearchField);

export default ConnectedSearchField;
