import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUsers, setSelected, openEditModal, openCreateModal, getUser, openDeleteModal, logout } from '../../redux/actionCreators';
import { currentOrder } from '../../utils/orderSorting';
import { sortingUsers } from '../../utils/sorting';
import Header from './header';
import FilteredUsers from './filteredUsers';
import CreateFormContainer from './../createForm';
import EditFormContainer from './../editForm';
import ActionButtons from './actionButtons/ActionButtons';
import Spinner from '../common/spinner/Spinner';
import DeleteFormContainer from '../deleteForm';

const sortDefault = 'default';

const tableColumns = [
  {
    label: 'id',
    name: 'ID',
    sort: sortDefault,
    order: null,
    classes: 'users__cell users__id users__cell_header',
    isSort: true,
    filter: false
  },
  {
    label: 'username',
    name: 'Username',
    sort: sortDefault,
    order: null,
    classes: 'users__cell users__name users__cell_header',
    isSort: true,
    filter: true
  },
  {
    label: 'first_name',
    name: 'Firstname',
    sort: sortDefault,
    order: null,
    classes: 'users__cell users__name users__cell_header',
    isSort: false,
    filter: false
  },
  {
    label: 'last_name',
    name: 'Lastname',
    sort: sortDefault,
    order: null,
    classes: 'users__cell users__name users__cell_header',
    isSort: false,
    filter: false
  }
];

const Home = ({ currentUser, logout, openDeleteModal, isOpenDeleteModal, getUser, 
  isLoading, getUsers, users, setSelected, selected, isOpenEditModal, 
  isOpenCreateModal, openCreateModal }) => {
  
  const [list, setList] = useState([]);
  const [columns, setColumns] = useState(tableColumns);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    setList(users);
  }, [users]);

  useEffect(() => {
    let listUsers = users;
    const sortedUsersWithOrder = columns.filter(item => item.order).sort((a, b) => {
      return a.order - b.order;
    });
    sortedUsersWithOrder.forEach(item => {
      if(item.isSort && item.sort !== sortDefault) {
        listUsers = sortingUsers(listUsers, item.label, item.sort);
      }
    });
    setList(listUsers);
  }, [/*columns,*/ users])

  if(isLoading) {
    return <Spinner />
  }
  
  const handleClickToggle = (id) => {
    const sort = columns[id].sort;
    const currentSort = currentOrder(sort);
    let changeColumns;
    if (currentSort === sortDefault) {
      changeColumns = columns.map((element, index) => (
        { ...element,
          sort: index === id ? currentSort : element.sort,
          order: index === id ? null : element.order
        }
      ))
    } else {
    let ord = columns.filter(item => item.order).map(i => i.order);
    let maxOrder = ord.length > 0 ? Math.max(...ord) : 0;
    
    changeColumns = columns.map((element, index) =>  (
      { ...element, 
        sort: index === id ? currentSort : element.sort,
        order: index === id ? maxOrder + 1 : element.order
      }
    ));
    }
    setColumns(changeColumns);
    if(currentSort === sortDefault) {
      setList(sortingUsers(users, columns[id].label, currentSort));
    } else {
      setList(sortingUsers(list, columns[id].label, currentSort));
    }
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