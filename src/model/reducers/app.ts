import { APP_LOADED } from './types';

const initialState = {
  appLoaded: false,
};

export default function (state = initialState, action) {
  const { type } = action;
  if (type === APP_LOADED) {
    return {
      appLoaded: true,
    };
  }
  return state;
}
