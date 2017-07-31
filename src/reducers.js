import { combineReducers } from 'redux';
import { SET_SEARCH_NAME, ADD_API_DATA, SET_SELECTED_MEMBER } from './actions';

const DEFAULT_STATE = {
  searchName: '',
  loaded: false,
  data: [],
  showAddress: false,
  showMemberId: null
};

const searchName = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_NAME:
      return action.payload;
    default:
      return state;
  }
};

const apiData = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_API_DATA:
      return { ...state, loaded: true, data: action.payload };
    default:
      return state;
  }
};

const selectedMember = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SELECTED_MEMBER:
      return {
        ...state,
        showAddress: action.payload.show,
        showMemberId: action.payload.id
      };
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
