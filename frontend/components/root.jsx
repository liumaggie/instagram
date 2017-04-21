import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthFormContainer from './session/auth_form_container';
import HomeContainer from './home/home_container';
import UserImagesContainer from './user_profile/user_images_container';
import UserProfileContainer from './user_profile/user_profile_container'


const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
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
        <Route path='/' component={ App }>
          <IndexRoute component={ HomeContainer } onEnter={ _ensureLoggedIn }/>
          <Route path='/log-in' component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path='/sign-up' component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path='/users/:id' component={ UserProfileContainer } onEnter={ _ensureLoggedIn }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
