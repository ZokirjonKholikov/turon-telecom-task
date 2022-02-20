import { service } from '.';

export default {
  getAll: (query) => service.get(`/posts?${query}`),
  getOne: (id) => service.get(`/posts/${id}`),
  getPostComments: (id) => service.get(`/posts/${id}/comments`),
};
