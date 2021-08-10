import * as dalReg from '../../dal/auth';

import { REGISTER_FAILURE, REGISTER_SUCCSESS, REGISTER_RESET } from '../reducers/types';

export const register = (username: string, email: string, password: string) => async (dispatch: any) => {
  try {
    await dalReg.register(username, password, email);
    dispatch(setRegisterStatus(true));
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response.data,
    });
    throw error;
  }
};

export const setRegisterStatus = (flag: any) => (dispatch: any) => {
  if (flag) {
    dispatch({
      type: REGISTER_SUCCSESS,
    });
  } else {
    dispatch({
      type: REGISTER_RESET,
    });
  }
};
