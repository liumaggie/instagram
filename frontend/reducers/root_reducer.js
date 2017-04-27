import React from 'react';
import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ImagesReducer from './images_reducer';
import UserReducer from './user_reducer';
import UsersReducer from './users_reducer';
import ModalReducer from './modal_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  images: ImagesReducer,
  user: UserReducer,
  modal: ModalReducer,
  users: UsersReducer
});

export default rootReducer;
