import { UserActionTypes } from './types';

/* Схема стора для авторизованного юзера */
type UserStore = {
  user: {
    name: string
  } | null
}

const initialState = {
  user: null,
};

export const userReducer = (state: UserStore = initialState, action: { payload: any, type: UserActionTypes}) => {
  const { type, payload } = action;
  switch (type) {
    case UserActionTypes.USER_AUTHORIZE:
      return {
        ...state,
        user: payload,
      };
    case UserActionTypes.USER_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
