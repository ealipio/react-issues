import { createStructuredSelector } from 'reselect';

export const NAME = 'issues';

// Action Types
const SEARCH_TRY = '[issues]/SEARCH_TRY';
const SEARCH_SUCCESS = '[issues]/SEARCH_SUCCESS';
const SEARCH_FAILED = '[issues]/SEARCH_FAILED';

const UPDATE_QUERY = '[issues]/UPDATE_QUERY';
const SET_ISSUE = '[issues]/SET_ISSUE';
// Initial State:
const initialState = {
  query: '',
  list: [],
  isLoading: false,
  currentIssue: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.SEARCH_TRY:
      return { ...state, isLoading: true };
    case actionTypes.SEARCH_SUCCESS:
      return { ...state, isLoading: false, list: action.data };
    case actionTypes.SEARCH_FAILED:
      return { ...state, isLoading: false };
    case actionTypes.UPDATE_QUERY:
      return { ...state, query: action.query };
    case actionTypes.SET_ISSUE:
      return { ...state, currentIssue: action.issue };
    default:
      return state;
  }
}

function search({ query }) {
  return { type: SEARCH_TRY, query };
}

function updateQuery({ query }) {
  return { type: UPDATE_QUERY, query };
}

function setCurrentIssue({ issue }) {
  return { type: SET_ISSUE, issue };
}

const issues = (state) => state[NAME];

export const selector = createStructuredSelector({
  issues,
});

export const actionCreators = {
  search,
  updateQuery,
  setCurrentIssue,
};

export const actionTypes = {
  SEARCH_TRY,
  SEARCH_SUCCESS,
  SEARCH_FAILED,
  UPDATE_QUERY,
  SET_ISSUE,
};
