import React from 'react';
import './ModalDelete.css';
import Modal from '../Modal';

const ModalDelete = ({ handleSubmit, closeDeleteModal, removeUser }) => {

  return (
    <Modal title="Delete User" 
            closeModal={closeDeleteModal}       
            actionText="Delete"
            onSubmit={handleSubmit}>
      <span className="modal__text">Are you sure you want to delete user with username "{removeUser.username}"?</span>
    </Modal>
  )
}

export default ModalDelete;