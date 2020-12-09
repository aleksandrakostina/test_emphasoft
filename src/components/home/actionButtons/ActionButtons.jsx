import React from 'react';
import { ReactComponent as Remove } from './../../../assets/images/remove.svg';
import { ReactComponent as Create } from './../../../assets/images/plus.svg';
import { ReactComponent as Edit } from './../../../assets/images/edit.svg';
import './actionButtons.css';

const ActionButtons = ({ openCreateModal, getUser, selected, openDeleteModal }) => {

  const handleDeleteUser = () => {
    openDeleteModal(selected);
  }

  const handleEditUser = () => {
    getUser(selected);
  }

  return (
    <div className="action-buttons">
      <div className="wrapper">
        <button className="button action-buttons__button" onClick={openCreateModal}>
          <Create className="icon-action" />
          <span className="button__text">Add</span>
        </button>
        <button disabled={!selected} className="button action-buttons__button" onClick={handleDeleteUser}>
          <Remove className="icon-action" />
          <span className="button__text">Delete</span>
        </button>
        <button disabled={!selected} className="button action-buttons__button" onClick={handleEditUser}>
          <Edit className="icon-action" />
          <span className="button__text">Edit</span>
        </button>
      </div>
    </div>
  )
}

export default ActionButtons;