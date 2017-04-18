import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthFormContainer from './session/auth_form_container';

const Root = ({ store }) => {
  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={ App } />
          <Route path='/log-in' component={ AuthFormContainer } />
          <Route path='/sign-up' component={ AuthFormContainer } />
      </Router>
    </Provider>
  )
};

export default Root;
