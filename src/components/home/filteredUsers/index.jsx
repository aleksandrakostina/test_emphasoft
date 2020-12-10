import React, { useState } from 'react';
import { filterUsersAll } from '../../../utils/filter';
import Users from './users';
import Filters from './filters/Filters';

const FilteredUsers = ({ users, setSelected, selected, handleClickToggle, columns }) => {

  const initialStateFilters = {};
  columns.filter(col => col.filter).forEach(element => initialStateFilters[element.name.toLowerCase()] = '');

  const [filterInput, setFilterInput] = useState(initialStateFilters);

  let list = users;

  const handleChangeFilter = (e) => {
    setFilterInput({
      ...filterInput,
      [e.target.name]: e.target.value
    });
  }

  for (let key in filterInput) {
    if(filterInput[key]) {
      list = filterUsersAll(list, filterInput[key], key);
    }
  }

  const handleResetFilters = () => {
    setFilterInput({
      ...initialStateFilters
    })
  }

  return (
    <>
      <Filters filterInput={filterInput} handleChangeFilter={handleChangeFilter} handleResetFilters={handleResetFilters} />
      <Users users={list} setSelected={setSelected} selected={selected} handleClickToggle={handleClickToggle} columns={columns} />
    </>
  )
}

export default FilteredUsers;