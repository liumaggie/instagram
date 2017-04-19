import React from 'react';
import { login, signup, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import AuthForm from './auth_form';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.currentUser ? true : false,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = ownProps.location.pathname === '/log-in' ? login : signup;
  let formType = processForm === login ? 'login' : 'signup';
  return {
    processForm: (user) => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);