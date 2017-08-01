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
    showMemberId: store.selectedMember.showMemberId,
    searchName: store.searchName.searchName
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
      let memberList = [];
      if (this.props.searchName) {
        memberList = this.props.data.filter(person => {
          return person.name.toLowerCase().includes(this.props.searchName.toLowerCase());
        });
      } else {
        memberList = this.props.data;
      }
      return (
        <div className="eventTeam">
          {memberList.map(person => {
            let address;
            let selected;
            if (person.id === this.props.showMemberId && this.props.showAddress) {
              selected = true;
              let addressString = `
                  ${person.address.street},
                  ${person.address.suite},
                  ${person.address.city},
                  ${person.address.zipcode}`;
              address = (
                <div className="memberAddress">
                  <div className="address">
                    <strong>Address: </strong>
                  </div>
                  {addressString}
                </div>
              );
            } else {
              selected = false;
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
              arrow={selected}
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
