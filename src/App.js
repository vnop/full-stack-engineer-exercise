import React, { Component } from 'react';
import Header from './Header';
import EventTeam from './EventTeam';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <EventTeam />
      </div>
    );
  }
}
