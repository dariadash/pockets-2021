import { LOGIN_FAILURE } from './types';

/* Схема стора для авторизации */
const initialState = {
  authForm: {
    fields: {
      email: null,
      password: null,
    },
    message: null,
  },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  if (type === LOGIN_FAILURE) {
    if (payload.detail) {
      return {
        authForm: {
          message: payload.detail,
        },
      };
    }
    if (payload.email || payload.password) {
      return {
        authForm: {
          fields: {
            email: payload.email,
            password: payload.password,
          },
        },
      };
    }
  }
  return state;
}
