import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setValues, setStates } from './redux';

function withContainer(WrappedComponent) {
  class BingoBoardContainer extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = state => ({
    values: state.bingo.values,
    states: state.bingo.states
  });

  const mapDispatchToProps = dispatch => ({
    setValues: values => dispatch(setValues(values)),
    setStates: states => dispatch(setStates(states))
  });

  return connect(mapStateToProps, mapDispatchToProps)(BingoBoardContainer);
}

export default withContainer;