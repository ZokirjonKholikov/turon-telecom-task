import movies from './actions/movies';
import streams from './actions/streams';
import modals from './actions/modals';
import application from './actions/application';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...movies,
  ...streams,
  ...modals,
  ...application,
};
