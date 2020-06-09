import { takeLatest } from 'redux-saga/effects';
import { actionTypes as issuesActions } from '../features/issues';

import tryIssuesList from './issues/list';

export default function* rootSaga() {
  yield takeLatest(issuesActions.SEARCH_TRY, tryIssuesList);
}
