import * as UserApiUtil from '../util/user_api_util';
import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REMOVE_USERS = 'REMOVE_USERS';
export const REMOVE_USER = 'REMOVE_USER';

export const receiveUser = (user) => {
  return({
    type: RECEIVE_USER,
    user
  });
};

export const receiveUsers = (users) => {
  return({
    type: RECEIVE_USERS,
    users
  });
};

export const removeUsers = () => {
  return ({
    type: REMOVE_USERS
  });
};

export const removeUser = () => {
  return ({
    type: REMOVE_USER
  });
};

export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id).then((user) => dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
  UserApiUtil.updateUser(user)
             .then((newUser) => dispatch(receiveUser(newUser)))
);

export const updateUserWithForm = (formData, id) => dispatch => (
  UserApiUtil.updateUserWithForm(formData, id)
             .then((user) => dispatch(receiveUser(user)))
);

// creates follow on user profile end
export const createFollow = (follow) => dispatch => (
  FollowApiUtil.createFollow(follow)
               .then((user) => dispatch(receiveUser(user)))
);
// delete follow on user profile end
export const deleteFollow = (id) => dispatch => {
  return(FollowApiUtil.deleteFollow(id)
                  .then((user) => dispatch(receiveUser(user)))
);};


export const fetchUsers = (string) => dispatch => (
  UserApiUtil.fetchUsers(string)
             .then((users) => dispatch(receiveUsers(users)))
);
