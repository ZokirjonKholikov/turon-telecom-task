import types from '../../../constants/action-types';

export const setData = (payload) => ({
  type: types.POSTS_SET_DATA,
  payload
});

export const setTotal = (payload) => ({
  type: types.POSTS_SET_TOTAL,
  payload
});
export const setError = (payload) => ({
  type: types.POSTS_ERROR,
  payload
});
export const fetchData = (payload) => ({
  type: types.POSTS_FETCH_DATA,
  payload
});

export const onSearch = (payload) => ({
  type: types.POSTS_SAGA_ONSEARCH_ACTION,
  payload
});
