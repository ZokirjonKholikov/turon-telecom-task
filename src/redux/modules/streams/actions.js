import types from '../../../constants/action-types';

export const setData = (payload) => ({
  type: types.STREAMS_SET_DATA,
  payload,
});

export const setTotal = (payload) => ({
  type: types.STREAMS_SET_TOTAL,
  payload,
});
export const setLoading = (payload) => ({
  type: types.STREAMS_SET_LOADING,
  payload,
});
export const setError = (payload) => ({
  type: types.STREAMS_ERROR,
  payload,
});
export const fetchData = (payload) => ({
  type: types.STREAMS_FETCH_DATA,
  payload,
});

export const onSearch = (payload) => ({
  type: types.STREAMS_SAGA_ONSEARCH_ACTION,
  payload,
});
