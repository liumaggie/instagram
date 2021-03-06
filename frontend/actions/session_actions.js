import * as SessionApiUtil from '../util/session_api_util';
import * as UserApiUtil from '../util/user_api_util';
import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const signup = user => dispatch => (
  SessionApiUtil.signup(user)
                .then((newUser) => dispatch(receiveCurrentUser(newUser)),
                      (errs) => dispatch(receiveErrors(errs.responseJSON)))
);

export const login = user => dispatch => (
  SessionApiUtil.login(user)
                .then((newUser) => dispatch(receiveCurrentUser(newUser)),
                      (errs) => dispatch(receiveErrors(errs.responseJSON)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
                .then(() => dispatch(receiveCurrentUser(null)))
);

export const updateCurrentUser = (user) => dispatch => (
  UserApiUtil.updateUser(user)
             .then((newUser) => dispatch(receiveCurrentUser(newUser)))
);

// creates follow from clicking on list of follows
export const createFollowForCurrentUser = (follow, currentUser) =>
  dispatch => (FollowApiUtil.createFollow(follow, currentUser)
               .then((user) => dispatch(receiveCurrentUser(user)))
);

export const deleteFollowForCurrentUser = (id, currentUser) =>
  dispatch => (FollowApiUtil.deleteFollow(id, currentUser)
               .then((user) => dispatch(receiveCurrentUser(user)))
);

export const fetchCurrentUser = (id) => dispatch => (
  UserApiUtil.fetchUser(id)
             .then((user) => dispatch(receiveCurrentUser(user)))
);
