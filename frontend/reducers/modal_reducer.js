import React from 'react';
import { OPEN_UPLOAD_PHOTO, CLOSE_MODAL } from '../actions/modal_actions';
import { merge } from 'lodash';

const initialState = {
  currentModal: null
};

const ModalReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_UPLOAD_PHOTO: {
      return merge({}, state, { currentModal: action.currentModal });
    }
    case CLOSE_MODAL: {
      return merge({}, state, { currentModal: null })
    }
    default:
      return state;
  }
};

export default ModalReducer;
