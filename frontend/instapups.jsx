import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout, clearErrors } from './actions/session_actions';
import { fetchAllImages, fetchImagesForUser, createImage, fetchSingleImage, updateImage, deleteImage } from './util/user_profile_api_util';


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

  window.fetchAllImages = fetchAllImages;
  window.fetchImagesForUser = fetchImagesForUser;
  window.createImage = createImage;
  window.fetchSingleImage = fetchSingleImage;
  window.updateImage = updateImage;
  window.deleteImage = deleteImage;

  const store = configureStore(preloadedState);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
