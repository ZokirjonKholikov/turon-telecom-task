import types from '../../../constants/action-types';

export const show = (payload) => ({
  type: types.APPLICATION_SHOW_MODAL,
  payload,
});
export const setID = (payload) => ({
  type: types.APPLICATION_SET_ID,
  payload,
});
export const hide = () => ({ type: types.APPLICATION_HIDE_MODAL });
