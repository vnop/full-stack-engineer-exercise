import { SET_SEARCH_NAME, ADD_API_DATA, SET_SELECTED_MEMBER } from './actions';

export function setSearchName(searchName) {
  return { type: SET_SEARCH_NAME, payload: searchName };
}

export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function setSelectedMember(selectedMember) {
  return { type: SET_SELECTED_MEMBER, payload: selectedMember };
}
