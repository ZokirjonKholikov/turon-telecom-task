import types from '../../../constants/action-types';

const defaultState = {
  id: undefined,
  blured: {
    show: false,
  },
};

const map = {
  [types.APPLICATION_SHOW_MODAL]: (state, { payload }) => ({
    ...state,
    blured: { show: true, ...payload },
  }),
  [types.APPLICATION_SET_ID]: (state, { payload }) => ({
    ...state,
    id: payload,
  }),
  [types.APPLICATION_HIDE_MODAL]: (state) => ({
    ...state,
    blured: { show: false },
  }),
};

// eslint-disable-next-line max-len
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
