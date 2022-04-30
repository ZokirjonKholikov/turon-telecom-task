import types from '../../../constants/action-types';

const defaultState = {
  data: [],
  total: 0,
  error: '',
  loading: true,
};

const map = {
  [types.STREAMS_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
  [types.STREAMS_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload,
  }),

  [types.STREAMS_SET_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload,
  }),
  [types.STREAMS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
};

// eslint-disable-next-line max-len
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
