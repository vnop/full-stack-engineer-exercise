import axios from 'axios';
import { addAPIData } from './actionCreators';

export default function getAPIDetails() {
  return dispatch => {
    axios
      .get('/api/users')
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(err => console.error('axios error', err));
  };
}
