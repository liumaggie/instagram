import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then((newUser) => dispatch(receiveCurrentUser(newUser)),
                                  (errs) => dispatch(receiveErrors(errs.responseJSON)))
);

export const login = user => dispatch => (
  SessionApiUtil.login(user).then((newUser) => dispatch(receiveCurrentUser(newUser)),
                                  (errs) => dispatch(receiveErrors(errs.responseJSON)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(() => dispatch(receiveCurrentUser(null)),
                              (errs) => dispatch(receiveErrors(errs.responseJSON)))
);
