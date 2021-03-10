import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchResults.css';

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  }
  return (
    <>
      {results.map((image) => (
        <img className="card-image" src={image} alt="spaceImage" />
      ))}
    </>
  );
};

SearchResults.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array.isRequired,
};

export default SearchResults;
