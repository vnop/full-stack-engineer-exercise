import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchName } from './actionCreators';

@connect((store) => {
  return {
    searchName: store.searchName.searchName,
    data: store.apiData.data
  }
})

class Search extends Component {

  handleSearch(e) {
    this.props.dispatch(setSearchName(e.target.value));
  }

  render() {
    let data = this.props.data.filter(person => {
          return person.name.toLowerCase().includes(this.props.searchName.toLowerCase());
        });
    let number = data.length;
    return (
      <div className="searchRow">
        <div className="search">
          <input
          type="text"
          className="fontSearch"
          placeholder="&#xF002; Find by name"
          value={this.props.searchName}
          onChange={(e) => this.handleSearch(e)}
          />
        </div>
        <div className="peopleCount">{number} People</div>
      </div>
    )
  }
}

export default Search;
