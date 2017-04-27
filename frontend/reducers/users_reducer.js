import { RECEIVE_USERS, REMOVE_USERS } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users;
    case REMOVE_USERS:
      return [];
    default:
      return state;
  }
};

export default UsersReducer;
