import commonSaga from "./sagafile/CommonSaga";
import { all, fork, take } from "redux-saga/effects";
// import { REHYDRATE } from "redux-persist";

export default function* rootSaga() {
  // yield take(REHYDRATE);
  yield all([fork(commonSaga)]);
}

