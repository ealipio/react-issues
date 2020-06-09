import { call, put } from 'redux-saga/effects';
import _get from 'lodash/get';

import { actionTypes as issuesActions } from '../../features/issues';

export default function* tryUsersList({ query }) {
  try {
    const URL = `https://api.github.com/search/issues?q=${query}+repo:facebook/react`;
    const response = yield call(fetch, URL);
    const data = yield call([response, 'json']);

    yield put({
      type: issuesActions.SEARCH_SUCCESS,
      data: _get(data, 'items', []),
    });
  } catch (e) {
    yield put({ type: issuesActions.SEARCH_FAILED });
  }
}
