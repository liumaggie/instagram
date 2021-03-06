import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout, clearErrors } from './actions/session_actions';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser,
        errors: []
      }
    };
  } else {
    preloadedState = {};
  }
  const store = configureStore(preloadedState);
  const root = document.getElementById('root');
  Modal.setAppElement('#root');
  ReactDOM.render(<Root store={store}/>, root);
});
