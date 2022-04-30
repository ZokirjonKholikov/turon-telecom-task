import types from '../../../constants/action-types';

const defaultState = {
  data: [],
  movie: {
    id: 0,
    name: '',
    image: '',
    bgImage: '',
    genres: [],
    qualities: [],
    rates: {},
    desc: '',
    year: '',
    actors: [],
    duration: '',
    countries: [],
    producers: [],
    movieSlogan: '',
  },
  similarMovies: [],
  comments: [],
  total: 0,
  error: '',
  loading: true,
};

const map = {
  [types.MOVIES_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
  [types.SET_MOVIE]: (state, { payload }) => ({
    ...state,
    movie: payload,
  }),
  [types.SET_SIMILAR_MOVIE]: (state, { payload }) => ({
    ...state,
    similarMovies: payload,
  }),
  [types.MOVIES_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload,
  }),

  [types.MOVIES_SET_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload,
  }),
  [types.MOVIES_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
};

// eslint-disable-next-line max-len
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
