import { SET_USERS } from '../actions/userActions';

const initialState = {
  profiles: {},
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USERS:
      return { ...state, profiles: action.payload };
    default:
      return state;
  }
}
