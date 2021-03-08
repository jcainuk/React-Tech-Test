import React, { useState } from 'react';
import '../styles/Search.css';
import getImages from '../requests/getImages';

const Search = () => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          data-testid="search-input"
        />
        <button className="search-btn" type="submit" data-testid="search-btn">
          Go!
        </button>
      </form>
    </>
  );
};

export default Search;
