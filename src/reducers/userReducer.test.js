import { setUsers } from '../actions/userActions';
import reducer from './userReducer';

describe('user reducer', () => {
  it('handles the SET_USERS action', () => {
    const state = {
      profile: [
        { login: 'annalise-m' },
        { html_url: 'https://github.com/Annalise-M' },
        { followers: '9' },
        { following: '16' }
      ],
      error: null
    };

    const action = setUsers([
      { login: 'annalise-m' },
      { html_url: 'https://github.com/Annalise-M' },
      { followers: '9' },
      { following: '16' }
    ]);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      profile: [
        { login: 'annalise-m' },
        { html_url: 'https://github.com/Annalise-M' },
        { followers: '9' },
        { following: '16' }
      ],
      error: null
    });
  });

});
