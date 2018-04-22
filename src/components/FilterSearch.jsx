
import React from 'react';
import PropTypes from 'prop-types';


const handleChange = (e, searchFilter) => searchFilter(e.target.value);

const FilterSearch = ({ searchFilter }) => (
  <div className="form-group row">
    <input type="text" onChange={(e) => handleChange(e, searchFilter)}/>
  </div>
);

FilterSearch.propTypes = {
  searchFilter: PropTypes.func.isRequired
};

export default FilterSearch;