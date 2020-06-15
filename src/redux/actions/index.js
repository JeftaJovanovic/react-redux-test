export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT = 'LOGOUT';

export const handleRegisterUser = (data) => (dispatch) => {
  dispatch({
    type: REGISTER_USER,
    payload: data,
  });
};

export const handleLogout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
