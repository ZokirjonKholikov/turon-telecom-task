import types from '../../../constants/action-types';

const defaultState = {
  data: [],
  post: {},
  comments: [],
  total: 105,
  error: '',
  loading: false,
};

const map = {
  [types.POSTS_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
  [types.POSTS_SET_POST]: (state, { payload }) => ({
    ...state,
    post: payload,
  }),
  [types.POSTS_SET_POST_COMMENTS]: (state, { payload }) => ({
    ...state,
    comments: payload,
  }),
  [types.POSTS_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload,
  }),

  [types.POSTS_SET_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload,
  }),
  [types.POSTS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
};

// eslint-disable-next-line max-len
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
