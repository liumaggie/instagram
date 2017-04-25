import * as UserApiUtil from '../util/user_api_util';
import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => {
  return({
    type: RECEIVE_USER,
    user
  });
};

export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id).then((user) => dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
  UserApiUtil.updateUser(user).then((user) => dispatch(receiveUser(user)))
);

export const updateUserWithForm = (formData, id) => dispatch => (
  UserApiUtil.updateUserWithForm(formData, id).then((user) => dispatch(receiveUser(user)))
);

export const createFollow = (follow) => dispatch => (
  FollowApiUtil.createFollow(follow).then((user) => dispatch(receiveUser(user)))
);

export const deleteFollow = (id) => dispatch => (
  FollowApiUtil.deleteFollow(id).then((user) => dispatch(receiveUser(user)))
);

export const fetchFollowsForUser = (userId) => dispatch => (
  FollowApiUtil.fetchFollowsForUser(userId).then((user) => dispatch(receiveUser(user)))
);
