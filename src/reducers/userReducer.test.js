import { setUsers } from '../actions/userActions';
import reducer from './userReducer';

describe('user reducer', () => {
  it('handles the SET_USERS action', () => {
    const state = {
      users: [],
      error: null
    };

    const action = setUsers([
      { login: 'annalise-m' },
    ]);

    const newState = reducer(state, action);
  });

});
