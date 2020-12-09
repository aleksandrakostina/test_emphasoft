import React from 'react';
import { connect } from 'react-redux';
import { closeCreateModal, createUser } from '../../redux/actionCreators';
import { createForm } from '../modal/ModalEditCreate';

const CreateForm = createForm('createForm');

const CreateFormContainer = ({ createUser, closeCreateModal }) => {

  const handleSubmit = (values) => {
    createUser(values);
  }
 
  return (
    <CreateForm title="Create user" onSubmit={handleSubmit} closeModal={closeCreateModal} />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => {
      dispatch(createUser(user))
    },
    closeCreateModal: () => {
      dispatch(closeCreateModal());
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateFormContainer);