import React from 'react';
import { connect } from 'react-redux';
import { closeDeleteModal, deleteUser } from '../../redux/actionCreators';
import ModalDelete from '../modal/ModalDelete/ModalDelete';

const DeleteFormContainer = ({ deleteUser, selected, closeDeleteModal, removeUser }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteUser(selected);
  }
 
  return <ModalDelete  closeDeleteModal={closeDeleteModal} handleSubmit={handleSubmit} removeUser={removeUser} />
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (selected) => {
      dispatch(deleteUser(selected));
    },
    closeDeleteModal: () => {
      dispatch(closeDeleteModal());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.users.selected,
    removeUser: state.users.removeUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFormContainer);