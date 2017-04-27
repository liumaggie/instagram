import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, removeUsers } from '../../actions/user_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = (state) => {
  return {
    users: asArray(state.users)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (string) => dispatch(fetchUsers(string)),
    removeUsers: () => dispatch(removeUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
