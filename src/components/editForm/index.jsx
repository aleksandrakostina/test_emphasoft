import React from 'react';
import { connect } from 'react-redux';
import { closeEditModal, editUser } from '../../redux/actionCreators';
import { createForm } from '../modal/ModalEditCreate';

const EditForm = createForm('editForm', true)

const EditFormContainer = ({ editUser, user, selected, closeEditModal }) => {

  const handleSubmit = (values) => {
    editUser(selected, values);
  }
 
  return user && <EditForm title='Edit username' user={user} onSubmit={handleSubmit} closeModal={closeEditModal} />;
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (id, user) => {
      dispatch(editUser(id, user));
    },
    closeEditModal: () => {
      dispatch(closeEditModal());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    selected: state.users.selected
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFormContainer);