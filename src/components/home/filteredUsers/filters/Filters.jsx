import React from 'react';
import FilterInput from '../../../filterInput/FilterInput';
import './filters.css';

const Filters = ({ handleChangeFilter, filterInput, handleResetFilters }) => {

  const renderFilter = () => {
    const filters = [];
    for(let key in filterInput) {
      filters.push(<FilterInput key={key} 
                                value={filterInput[key]} 
                                handleChange={handleChangeFilter} 
                                filter={key} 
                                name={key} />)
    }
    return filters;
  }
  
  return (
    <div className="filters">
      <div className="wrapper filters__wrapper">
        <div className="filters__input">
          {renderFilter()}
        </div>
        <button className="button filters__button" onClick={handleResetFilters}>Reset filters</button>
      </div>
    </div>
  )
}

export default Filters;