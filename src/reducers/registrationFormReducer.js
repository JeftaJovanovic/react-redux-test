import { REGISTER_USER } from '../actions';

const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  prefix: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
