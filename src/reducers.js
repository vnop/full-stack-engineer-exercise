import { combineReducers } from 'redux';
import { SET_SEARCH_NAME, ADD_API_DATA, SET_SELECTED_MEMBER } from './actions';

const searchName = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_NAME:
      return action.payload;
    default:
      return state;
  }
};

const apiData = (state = { loaded: false, data: [] }, action) => {
  switch (action.type) {
    case ADD_API_DATA:
      return { ...state, loaded: true, data: action.payload };
      break;
    default:
      return state;
  }
};

const selectedMember = (state = { showMember: null }, action) => {
  switch (action.type) {
    case SET_SELECTED_MEMBER:
      return { ...state, showMember: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchName,
  apiData,
  selectedMember
});

export default rootReducer;
