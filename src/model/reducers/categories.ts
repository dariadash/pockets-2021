import { CategoryActionTypes } from './types';

type Store = {
  // ToDo: Типизировать категори
  categories: unknown[],
  addModalVisible: boolean
}

const initialState = {
  categories: [],
  addModalVisible: false,
};

// ToDo: Типизировать payload или забить 
export const categoryReducer = (
  state: Store = initialState, 
  action: { payload: any, type: CategoryActionTypes}
): Store => {
  const { type, payload } = action;

  if (type === CategoryActionTypes.CATEGORY_GET) {
    return {
      ...state,
      categories: payload.categories,
    };
  }
  if (type === CategoryActionTypes.SHOW_ADD_MODAL) {
    return {
      ...state,
      addModalVisible: true
    }
  }
  if (type === CategoryActionTypes.HIDE_ADD_MODAL) {
    return {
      ...state,
      addModalVisible: false
    }
  }
  return state;
}
