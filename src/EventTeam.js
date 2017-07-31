import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAPIDetails from './asyncActions';
import EventMember from './EventMember';
import { setSelectedMember } from './actionCreators';

@connect((store) => {
  return {
    loaded: store.apiData.loaded,
    data: store.apiData.data,
    showAddress: store.selectedMember.showAddress,
    showMemberId: store.selectedMember.showMemberId
  }
})

class EventTeam extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.dispatch(getAPIDetails());
    }
  }

  handleAddress(id, show) {
    if (id === this.props.showMemberId && show) {
      this.props.dispatch(setSelectedMember({ id: null, show: false }))
    } else if (id === this.props.showMemberId && !show) {
      this.props.dispatch(setSelectedMember({ id, show: true }))
    } else {
      this.props.dispatch(setSelectedMember({ id, show: true }))
    }
  }

  render() {
    if (this.props.loaded) {
      return (
        <div className="eventTeam">
          {this.props.data.map(person => {
            let address;
            if (person.id === this.props.showMemberId && this.props.showAddress) {
              address = (
                <div className="memberAddress">
                  {person.address.street}
                </div>
              );
            } else {
              address = null;
            }
            return (
              <div
              key={person.id}
              onClick={() => this.handleAddress(person.id, this.props.showAddress)}
              >
              <EventMember
              member={person}
              selected={this.props.showMemberId}
              showAddress={this.props.showAddress}
              />
              <div>{address}</div>
              </div>
              )})}
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
