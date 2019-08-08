import { takeEvery, call, put } from "redux-saga/effects";
import { DATA_LOADED } from "../constants/action-types";
import { DATA_REQUESTED } from "../constants/action-types";
import { API_ERRORED } from "../constants/action-types";

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
}

// Pro tip - put same as dispatch in redux saga
function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e });
  }
}

function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response =>
            response.json()
        );
}