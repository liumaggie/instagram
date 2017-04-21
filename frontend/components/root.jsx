import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthFormContainer from './session/auth_form_container';
import UserProfileContainer from './user_profile/user_profile_container'
import ImageIndexContainer from './photo_feed/image_index_container';
import EditProfileContainer from './user_profile/edit_profile_container';

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
          <IndexRoute component={ ImageIndexContainer } onEnter={ _ensureLoggedIn }/>
          <Route path='/log-in' component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path='/sign-up' component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path='/users/:id' component={ UserProfileContainer } onEnter={ _ensureLoggedIn } />
          <Route path='/users/:id/edit' component={ EditProfileContainer } onEnter={ _ensureLoggedIn } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
