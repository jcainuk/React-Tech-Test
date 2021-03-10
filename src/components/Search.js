import React, { useState } from 'react';
import '../styles/Search.css';
import PropTypes from 'prop-types';
import getImages from '../requests/getImages';

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          data-testid="search-input"
          placeholder="Search for images"
        />
        <button className="search-btn" type="submit" data-testid="search-btn">
          Go!
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;
