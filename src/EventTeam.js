import React, { Component } from 'react';
import EventMember from './EventMember';
import axios from 'axios';

class EventTeam extends Component {
  state = {
    loaded: false,
    data: []
  };

  componentDidMount() {
    let self = this;
    axios
      .get('/api/users')
      .then(response => {
        self.setState({
          loaded: true,
          data: [...response.data]
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.loaded) {
      return (
        <div className="eventTeam">
          {this.state.data.map(person => <EventMember key={person.id} member={person} />)}
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
