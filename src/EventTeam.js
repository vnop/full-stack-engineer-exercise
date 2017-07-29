import React, { Component } from 'react';
import { connect } from 'react-redux';
// import getAPIDetails from './asyncActions';
import EventMember from './EventMember';
import axios from 'axios';
import { addAPIData } from './actionCreators';

@connect((store) => {
  return {
    loaded: store.apiData.loaded,
    data: store.apiData.data
  }
})

class EventTeam extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      axios
      .get('/api/users')
      .then(response => {
        console.log('async dispatch running');
        this.props.dispatch(addAPIData(response.data));
      })
      .catch(err => console.error('axios error', err));
    }
  }

  render() {
    console.log(this.props);
    if (this.props.loaded) {
      return (
        <div className="eventTeam">
          {this.props.data.map(person => <EventMember key={person.id} member={person} />)}
        </div>
      );
    }
    return (
      <div className="spinner">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
        <span>Fetching team...</span>
      </div>
    );
  }
}

export default EventTeam;
