import React from 'react';
import { login, signup, clearErrors, createFollowForCurrentUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import AuthForm from './auth_form';

const mapStateToProps = (state) => {
  return {
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm =
    ownProps.location.pathname === '/log-in' ? login : signup;
  let formType = processForm === login ? 'login' : 'signup';
  return {
    processForm: (user) => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    login: (user) => dispatch(login(user)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
