import types from '../../../constants/action-types';

const defaultState = {
  data: [],
  total: 0,
  error: ''
};

const map = {
  [types.POSTS_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload
  }),

  [types.POSTS_SET_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload
  }),
  [types.POSTS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action))
  || state
  || defaultState;
