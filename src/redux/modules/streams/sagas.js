import { takeLatest, put, delay } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/streams';
import { setData, setError, setTotal, setLoading } from './actions';
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

function* onSearch({ payload }) {
  yield delay(500);
}

export default function* moviesSaga() {
  yield takeLatest(types.STREAMS_FETCH_DATA, fetchData);
  yield takeLatest(types.STREAMS_SAGA_ONSEARCH_ACTION, onSearch);
}
