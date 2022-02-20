import { service } from '.';

export default {
  getAll: () => service.get('https://jsonplaceholder.typicode.com/users'),
};
