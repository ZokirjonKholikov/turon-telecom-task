import { takeLatest, put, delay } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/movies';
import {
  setData,
  setError,
  setTotal,
  setMovie,
  setLoading,
  setSimilatMovie,
} from './actions';
import { dataSelector } from './selectors';

function* fetchData({ payload }) {
  try {
    yield put(setLoading(true));
    const res = yield service.getAll(payload.query);
    const { data, total } = dataSelector(res);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}
function* fetchMovie({ payload }) {
  try {
    yield put(setLoading(true));
    const movie = yield service.getOne(payload);
    yield put(setError(''));
    yield put(
      setMovie({
        id: movie.data.movieId,
        name: movie.data.movieTitle,
        image: movie.data.files?.posterUrl,
        bgImage: movie.data.movieSnapshots[0]?.files?.imageUrl,
        genres: movie.data.genres,
        qualities: movie.data.qualities,
        rates: movie.data.rates,
        desc: movie.data.movieDescription,
        year: movie.data.year,
        actors: movie.data.actors,
        duration: movie.data.movieDuration,
        countries: movie.data.countries,
        producers: movie.data.producers,
        movieSlogan: movie.data.movieSlogan,
      })
    );
    const res = yield service.getSimilarMovies(payload);
    const { data } = dataSelector(res);
    yield put(setSimilatMovie(data));
    yield delay(300);
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* onSearch({ payload }) {
  yield delay(500);
}

export default function* moviesSaga() {
  yield takeLatest(types.MOVIES_FETCH_DATA, fetchData);
  yield takeLatest(types.FETCH_MOVIE_DETAIL, fetchMovie);
  yield takeLatest(types.MOVIES_SAGA_ONSEARCH_ACTION, onSearch);
}
