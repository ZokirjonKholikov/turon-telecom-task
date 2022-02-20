import types from '../../../constants/action-types';

export const setData = (payload) => ({
  type: types.POSTS_SET_DATA,
  payload,
});

export const setTotal = (payload) => ({
  type: types.POSTS_SET_TOTAL,
  payload,
});
export const setLoading = (payload) => ({
  type: types.POSTS_SET_LOADING,
  payload,
});
export const setPost = (payload) => ({
  type: types.POSTS_SET_POST,
  payload,
});
export const setPostComments = (payload) => ({
  type: types.POSTS_SET_POST_COMMENTS,
  payload,
});
export const setError = (payload) => ({
  type: types.POSTS_ERROR,
  payload,
});
export const fetchData = (payload) => ({
  type: types.POSTS_FETCH_DATA,
  payload,
});
export const fetchPost = (payload) => ({
  type: types.POSTS_FETCH_POST,
  payload,
});

export const onSearch = (payload) => ({
  type: types.POSTS_SAGA_ONSEARCH_ACTION,
  payload,
});
