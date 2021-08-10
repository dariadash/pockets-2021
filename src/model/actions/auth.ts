import * as dalAuth from '../../dal/auth';

import { APP_LOADED, LOGIN_FAILURE, UserActionTypes } from '../reducers/types';

export const login = (email: string, password: string) => async (dispatch: any) => {
  try {
    const { data: tokens } = await dalAuth.login(email, password);
    localStorage.setItem('authToken', tokens.access);
    dispatch(getProfileData());
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data,
    });
    throw error;
  }
};

export const getProfileData = () => async (dispatch: any) => {
  try {
    const { data: userData } = await dalAuth.getProfileData();
    dispatch({
      type: UserActionTypes.USER_AUTHORIZE,
      payload: userData,
    });
  } catch (error) {
    throw error;
  } finally {
    dispatch({
      type: APP_LOADED,
    });
  }
};

export const logout = () => (dispatch: any) => {
  localStorage.removeItem('authToken');
  dispatch({
    type: USER_LOGOUT,
  });
};
