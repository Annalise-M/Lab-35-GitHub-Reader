import { SET_USERS } from '../actions/userActions';

const initialState = {
  profile: {},
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USERS:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
}
