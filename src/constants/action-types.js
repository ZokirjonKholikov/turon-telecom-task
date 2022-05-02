import movies from './actions/movies';
import streams from './actions/streams';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...movies,
  ...streams,
};
