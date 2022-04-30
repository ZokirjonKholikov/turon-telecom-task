import types from '../../../constants/action-types';

export const setData = (payload) => ({
  type: types.MOVIES_SET_DATA,
  payload,
});

export const setTotal = (payload) => ({
  type: types.MOVIES_SET_TOTAL,
  payload,
});
export const setLoading = (payload) => ({
  type: types.MOVIES_SET_LOADING,
  payload,
});
export const setMovie = (payload) => ({
  type: types.SET_MOVIE,
  payload,
});
export const setSimilatMovie = (payload) => ({
  type: types.SET_SIMILAR_MOVIE,
  payload,
});
export const setError = (payload) => ({
  type: types.MOVIES_ERROR,
  payload,
});
export const fetchData = (payload) => ({
  type: types.MOVIES_FETCH_DATA,
  payload,
});
export const fetchMovie = (payload) => ({
  type: types.FETCH_MOVIE_DETAIL,
  payload,
});

export const onSearch = (payload) => ({
  type: types.MOVIES_SAGA_ONSEARCH_ACTION,
  payload,
});
