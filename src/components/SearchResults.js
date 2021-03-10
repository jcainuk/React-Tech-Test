import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchResults.css';

const SearchResults = ({ results }) => {
  if (!results) {
    return null;
  }
  if (results.length === 0) {
    return <p>No results</p>;
  }
  return (
    <>
      {results.map((image) => (
        <div className="image-container">
          <img className="image" src={image} alt="spaceImage" />
        </div>
      ))}
    </>
  );
};

SearchResults.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array.isRequired,
};

export default SearchResults;
