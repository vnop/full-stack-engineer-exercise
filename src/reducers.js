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

const apiData = (state = [], action) => {
  switch (action.type) {
    case ADD_API_DATA:
      return action.payload;
    default:
      return state;
  }
}

const selectedMember = (state = {}, action) => {
  switch (action.type) {
    case SET_SELECTED_MEMBER:
      return { ...state, action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  SET_SEARCH_NAME,
  ADD_API_DATA,
  SET_SELECTED_MEMBER
});

export default rootReducer;