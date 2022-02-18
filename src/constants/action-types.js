import posts from './actions/posts';
import modals from './actions/modals';
import application from './actions/application';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...posts,
  ...modals,
  ...application,
};
