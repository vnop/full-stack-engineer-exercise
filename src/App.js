import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import EventTeam from './EventTeam';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <EventTeam />
      </div>
    );
  }
}
