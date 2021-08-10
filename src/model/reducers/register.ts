import { REGISTER_FAILURE, REGISTER_RESET, REGISTER_SUCCSESS } from './types';

const initialState = {
  registerForm: {
    fields: {
      username: null,
      email: null,
      password: null,
    },
    message: null,
  },
  status: undefined,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  if (type === REGISTER_SUCCSESS) {
    return {
      ...state,
      status: true,
    };
  }
  if (type === REGISTER_RESET) {
    return {
      ...state,
      status: undefined,
    };
  }

  if (type === REGISTER_FAILURE) {
    if (payload.detail) {
      return {
        authForm: {
          message: payload.detail,
        },
      };
    }
    if (payload.email || payload.username) {
      return {
        authForm: {
          fields: {
            email: payload.email,
            username: payload.username,
          },
        },
      };
    }
  }
  return state;
}
