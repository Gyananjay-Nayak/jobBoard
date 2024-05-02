import { all } from 'redux-saga/effects';
import JobSaga from './jobs/jobSaga';

export default function* rootSaga() {
  yield all([JobSaga()]);
}
