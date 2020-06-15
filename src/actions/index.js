export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = (data) => {
  return {
    type: REGISTER_USER,
    payload: data,
  };
};
