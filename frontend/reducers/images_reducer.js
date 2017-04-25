import { RECEIVE_IMAGES, RECEIVE_IMAGE, REMOVE_IMAGE, REMOVE_ALL_IMAGES } from '../actions/image_actions';
import { merge } from 'lodash';

const ImagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_IMAGES:
      return action.images;
    case RECEIVE_IMAGE: {
      const newState = merge({}, state);
      newState[action.image.id] = action.image;
      return newState;
    }
    case REMOVE_IMAGE: {
      const newState = merge({}, state);
      delete newState[action.image.id];
      return newState;
    }
    case REMOVE_ALL_IMAGES: {
      return [];
    }
    default:
      return state;
  }
};

export default ImagesReducer;
