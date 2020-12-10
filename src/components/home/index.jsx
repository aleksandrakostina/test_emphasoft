import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUsers, setSelected, openEditModal, openCreateModal, getUser, openDeleteModal } from '../../redux/actionCreators';
import { currentOrder } from '../../utils/orderSorting';
import { sortingUsers } from '../../utils/sorting';
import Header from './header';
import FilteredUsers from './filteredUsers';
import CreateFormContainer from './../createForm';
import EditFormContainer from './../editForm';
import ActionButtons from './actionButtons/ActionButtons';
import Spinner from '../common/spinner/Spinner';
import DeleteFormContainer from '../deleteForm';

const tableColumns = [
  {
    label: 'id',
    name: 'ID',
    order: 'default',
    classes: 'users__cell users__id users__cell_header',
    sort: true,
    filter: false
  },
  {
    label: 'username',
    name: 'Username',
    order: 'default',
    classes: 'users__cell users__name users__cell_header',
    sort: false,
    filter: true
  },
  {
    label: 'first_name',
    name: 'Firstname',
    order: 'default',
    classes: 'users__cell users__name users__cell_header',
    sort: false,
    filter: false
  },
  {
    label: 'last_name',
    name: 'Lastname',
    order: 'default',
    classes: 'users__cell users__name users__cell_header',
    sort: false,
    filter: false
  }
];

const Home = ({ openDeleteModal, isOpenDeleteModal, getUser, isLoading, getUsers, users, setSelected, selected, isOpenEditModal, isOpenCreateModal, openCreateModal }) => {
  const [list, setList] = useState([]);
  const [columns, setColumns] = useState(tableColumns);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    setList(users);
    columns.forEach(item => {
      if(item.order !== 'default') {
        setList(sortingUsers(users, item.label, item.order))
      }
    })
  }, [users, columns]);

  if(isLoading) {
    return <Spinner />
  }
  
  const handleClickToggle = (id) => {
    const order = columns[id].order;
    const currentSort = currentOrder(order);
    const changeColumns = columns.map((element, index) =>  (
      { ...element, 
        order: index === id ? currentSort : element.order 
      }
    ));
    setColumns(changeColumns);
    if(currentSort === 'default') {
      setList(sortingUsers(users, columns[id].label, currentSort));
    } else {
      setList(sortingUsers(list, columns[id].label, currentSort));
    }
  }

  return (
    <>
      <Header />
      <ActionButtons openCreateModal={openCreateModal} getUser={getUser} selected={selected} openDeleteModal={openDeleteModal} />
      <FilteredUsers users={list} setSelected={setSelected} selected={selected} handleClickToggle={handleClickToggle} columns={columns} />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);