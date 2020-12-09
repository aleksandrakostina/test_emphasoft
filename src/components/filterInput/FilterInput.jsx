import React from 'react';

const FilterInput = ({ handleChange, value, filter, name }) => {

  return (
    <input className="input" onChange={handleChange} value={value} placeholder={`Seach ${filter}...`} name={name} />
  )
}

export default FilterInput;