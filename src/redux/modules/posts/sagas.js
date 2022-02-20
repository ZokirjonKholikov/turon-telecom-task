import { takeLatest, put, delay } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/posts';
import {
  setData,
  setError,
  setTotal,
  setPost,
  setPostComments,
  setLoading,
} from './actions';
import { dataSelector } from './selectors';

function* fetchData({ payload }) {
  try {
    yield put(setLoading(true));
    const res = yield service.getAll(payload.query);
    const { data } = dataSelector(res);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(100));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}
function* fetchPost({ payload }) {
  try {
    yield put(setLoading(true));
    const post = yield service.getOne(payload);
    const comments = yield service.getPostComments(payload);
    yield put(setError(''));
    yield put(
      setPost({
        ...post,
        imageSrc:
          'https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png',
      })
    );
    yield put(setPostComments(comments));
    yield put(setLoading(true));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* onSearch({ payload }) {
  yield delay(500);
}

export default function* POSTSSaga() {
  yield takeLatest(types.POSTS_FETCH_DATA, fetchData);
  yield takeLatest(types.POSTS_FETCH_POST, fetchPost);
  yield takeLatest(types.POSTS_SAGA_ONSEARCH_ACTION, onSearch);
}
