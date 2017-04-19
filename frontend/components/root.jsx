import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthFormContainer from './session/auth_form_container';
import HomeContainer from './home/home_container';


const Root = ({ store }) => {

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/sign-up');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={ App } onEnter={ _redirectIfNotLoggedIn }/>
          <Route path='/log-in' component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path='/sign-up' component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn }/>
      </Router>
    </Provider>
  );
};

export default Root;
