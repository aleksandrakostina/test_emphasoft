import React, { useState } from 'react';
import { filterUsersAll } from '../../../utils/filter';
import Users from './users';
import Filters from './filters/Filters';

const FilteredUsers = ({ users, setSelected, selected, handleClickToggle, columns }) => {

  const initialStateFilters = {
    filterFirstname: '',
    filterUsername: ''
  }

  const [filterInput, setFilterInput] = useState(initialStateFilters);

  let list = users;

  const handleChangeFilter = (e) => {
    setFilterInput({
      ...filterInput,
      [e.target.name]: e.target.value
    });
  }

  if(filterInput.filterUsername) {
    list = filterUsersAll(list, filterInput.filterUsername, 'username');
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