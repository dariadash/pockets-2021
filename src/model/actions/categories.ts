import * as dalCategory from '../../dal/category';

import { CategoryActionTypes } from '../reducers/types';

export const addCategory = (name: string, category_type: string) => (dispatch) => {
  try {
    return dalCategory.addCategory(name, category_type);
  } catch (error) {
    dispatch({
      type: CategoryActionTypes.CATEGORY_ADD,
      payload: error.response.data,
    });
    throw error;
  }
};

// ToDo: implement
export const getCategoryData = () => async (dispatch) => {
  // const { data } = await dalCategory.getCategoryData();
  // dispatch({
  //   type: CATEGORY_GET,
  //   payload: {
  //     categories: data,
  //   },
  // });
};

export const showModal = () => (dispatch) => {
  dispatch({
    type: CategoryActionTypes.SHOW_ADD_MODAL
  })
}
export const hideModal = () => (dispatch) => {
  dispatch({
    type: CategoryActionTypes.HIDE_ADD_MODAL
  })
}
