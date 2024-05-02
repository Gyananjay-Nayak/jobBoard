import { takeEvery, fork, all, call, put } from "redux-saga/effects";
import JOB_CONST from "./jobConst";
import { jobListSuccess, jobListError } from "./jobActions";
import axios from "axios";

function* jobList(action) {
  let url = "https://api.weekday.technology/adhoc/getSampleJdJSON";

  try {
    const response = yield call(axios.post, url, action.payload);
    if (response && response.status === 200) {
      const responseData = {
        statusCode: 200,
        data: response.data,
      };
      yield put(jobListSuccess(responseData));
    } else {
      const responseData = {
        data: response.data.error,
      };
      yield put(jobListError(responseData));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchJobList() {
  yield takeEvery(JOB_CONST.JOB_LIST_REQUEST, jobList);
}

function* JobSaga() {
  yield all([fork(watchJobList)]);
}

export default JobSaga;
