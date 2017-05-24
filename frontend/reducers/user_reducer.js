import { RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
    case REMOVE_USER:
      return;
    default:
      return state;
  }
};

export default UserReducer;
