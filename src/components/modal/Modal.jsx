import React from 'react';
import './Modal.css';
import { ReactComponent as IconCancel} from './../../assets/images/cancel.svg';

const Modal = ({ title, closeModal, actionText, children, onSubmit }) => {

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__container">
        <div className="modal__header">
          <span className="modal__title">{title}</span>
          <IconCancel className="icon-cancel" onClick={closeModal} />
        </div>
        <form className="form-modal" onSubmit={onSubmit}>
          {children}
          <div className="form-modal__buttons">
            <button className="button form-modal__button button_action" type="submit">{actionText}</button>
            <button className="button form-modal__button" type="button" onClick={closeModal}>Cancel</button>
          </div>
        </form>   
      </div>
    </div>
  )
}

export default Modal;