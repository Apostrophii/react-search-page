import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../state';
import { Dispatch } from 'redux';
import { updateSearchTerm } from '../actions';
import { QuickLinks, DispatchProps } from '../components/QuickLinks';

class Footer extends React.Component<DispatchProps> {
  render() {
    return <QuickLinks {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<State>): DispatchProps => {
  return {
    updateSearchTerm: value => dispatch(updateSearchTerm(value)),
  };
};

const ConnectedFooter = connect<{}, DispatchProps, {}>(
  undefined,
  mapDispatchToProps,
)(Footer);

export default ConnectedFooter;
