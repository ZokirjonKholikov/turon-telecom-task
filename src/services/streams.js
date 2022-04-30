import { service } from '.';

export default {
  getAll: (query) =>
    service.get(`/cards/live-streams/list?moduleId=6&${query}`),
};
