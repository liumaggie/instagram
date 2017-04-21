import React from 'react';
import { OPEN_UPLOAD_PHOTO, CLOSE_MODAL } from '../actions/modal_actions';

const initialState = {
  currentModal: null
};

const ModalReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_UPLOAD_PHOTO: {
      return merge({}, state, { currentModal: action.currentModal });
    }
    default:
      return state;
  }
};

export default ModalReducer;
