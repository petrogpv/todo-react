import React from 'react';
import PropTypes from 'prop-types';

const handleChange = (e, searchFilter) => searchFilter(e.target.value);

const FilterSearch = ({searchFilter}) => (
    <div className="form-input p-3">
        <input type="text" className="form-control" placeholder="Find task"
               onChange={(e) => handleChange(e, searchFilter)}/>
    </div>
);

FilterSearch.propTypes = {
    searchFilter: PropTypes.func.isRequired
};

export default FilterSearch;