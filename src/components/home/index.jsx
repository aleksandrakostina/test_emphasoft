import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUsers, setSelected, openEditModal, openCreateModal, getUser, openDeleteModal, logout } from '../../redux/actionCreators';
import { changeCurrentOrder } from '../../utils/orderSorting';
import { sortingUsers } from '../../utils/sorting';
import Header from './header';
import FilteredUsers from './filteredUsers';
import CreateFormContainer from './../createForm';
import EditFormContainer from './../editForm';
import ActionButtons from './actionButtons/ActionButtons';
import Spinner from '../common/spinner/Spinner';
import DeleteFormContainer from '../deleteForm';
import { tableColumns, sortDefault, changeTableColumns } from '../../utils/tableColumns';

const Home = ({ currentUser, logout, openDeleteModal, isOpenDeleteModal, getUser, 
  isLoading, getUsers, users, setSelected, selected, isOpenEditModal, 
  isOpenCreateModal, openCreateModal }) => {
  
  const [list, setList] = useState([]);
  const [columns, setColumns] = useState(tableColumns);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    let listUsers = users;
    if(listUsers.length !== 0) {
      const sortedUsersWithOrder = columns.filter(item => item.order).sort((a, b) => {
        return a.order - b.order;
      });
      sortedUsersWithOrder.forEach(item => {
        if(item.isSort && item.sort !== sortDefault) {
          listUsers = sortingUsers(listUsers, item.label, item.sort);
        }
      });
    }
    setList(listUsers);
  }, [users, columns]);

  if(isLoading) {
    return <Spinner />
  }
  
  const handleClickToggle = (id) => {
    const currentSort = changeCurrentOrder(columns[id].sort);
    const changeColumns = changeTableColumns(currentSort, columns, id);
    setColumns(changeColumns);
  }

  return (
    <>
      <Header currentUser={currentUser} 
              logout={logout} />     
      <ActionButtons openCreateModal={openCreateModal} 
                      getUser={getUser} 
                      selected={selected} 
                      openDeleteModal={openDeleteModal} />
      <FilteredUsers users={list} 
                      setSelected={setSelected} 
                      selected={selected} 
                      handleClickToggle={handleClickToggle} 
                      columns={columns} />
      {isOpenEditModal && <EditFormContainer />}
      {isOpenCreateModal && <CreateFormContainer />}
      {isOpenDeleteModal && <DeleteFormContainer />}   
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    selected: state.users.selected,
    isOpenEditModal: state.users.isOpenEditModal,
    isOpenCreateModal: state.users.isOpenCreateModal,
    isLoading: state.users.isLoading,
    isOpenDeleteModal: state.users.isOpenDeleteModal,
    currentUser: state.users.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    setSelected: (id) => {
      dispatch(setSelected(id));
    },
    openEditModal: () => {
      dispatch(openEditModal());
    },
    openCreateModal: () => {
      dispatch(openCreateModal());
    },
    getUser: (id) => {
      dispatch(getUser(id));
    },
    openDeleteModal: (id) => {
      dispatch(openDeleteModal(id));
    },
    logout: () => {
      dispatch(logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);