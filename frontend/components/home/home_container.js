import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
