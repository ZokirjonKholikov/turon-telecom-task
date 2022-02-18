import { takeLatest, put, delay } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/posts';
import { setData, setError, setTotal } from './actions';
import { dataSelector } from './selectors';

function* fetchData({ payload }) {
  try {
    // if (payload.isSearch) yield delay(500);
    // yield put(setLoading(true));
    const res = yield service.getAll();
    const { data, total } = dataSelector(res);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    // yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* onSearch({ payload }) {
  yield delay(500);
  console.log(payload);
}

export default function* POSTSSaga() {
  yield takeLatest(types.POSTS_FETCH_DATA, fetchData);
  yield takeLatest(types.POSTS_SAGA_ONSEARCH_ACTION, onSearch);
}
