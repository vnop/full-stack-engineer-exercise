import React from 'react';

const Search = () =>
  <div className="searchRow">
    <div className="search">
      <span className="input-group">
        <i className="fa fa-search fa-fw" />
      </span>
      <input type="text" placeholder="Find by name" />
    </div>
    <div className="peopleCount">Number People</div>
  </div>;

export default Search;
