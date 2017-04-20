import React from 'react';
import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ImagesReducer from './images_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  images: ImagesReducer
});

export default rootReducer;
