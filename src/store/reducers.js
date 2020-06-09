import { combineReducers } from 'redux';

import issuesReducer, { NAME as issuesName } from '../features/issues';

export default () =>
  combineReducers({
    [issuesName]: issuesReducer,
  });
