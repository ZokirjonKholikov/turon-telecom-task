import { service } from '.';

export default {
  getAll: (query) => service.get(`/cards/movies/list?moduleId=2&${query}`),
  getOne: (id) => service.get(`/cards/movies/show?movieId=${id}`),
  getSimilarMovies: (id) =>
    service.get(`/cards/movies/similar-cards?movieId=${id}`),
};
