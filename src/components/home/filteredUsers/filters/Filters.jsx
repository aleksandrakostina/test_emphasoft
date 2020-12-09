import React from 'react';
import FilterInput from '../../../filterInput/FilterInput';
import './filters.css';

const Filters = ({ handleChangeFilter, filterInput, handleResetFilters }) => {

  return (
    <div className="filters">
      <div className="wrapper filters__wrapper">
        <div className="filters__input">
          <FilterInput value={filterInput.filterUsername} handleChange={handleChangeFilter} filter={'username'} name={'filterUsername'} />
        </div>
        <button className="button filters__button" onClick={handleResetFilters}>Reset filters</button>
      </div>
    </div>
  )
}

export default Filters;