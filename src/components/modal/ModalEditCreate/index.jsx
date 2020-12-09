import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../../../utils/validate';
import InputField from '../../common/inputField';
import './Form.css';
import Modal from '../Modal';

const Form = ({ title, closeModal, handleSubmit }) => {

  return (
    <Modal title={title}
            closeModal={closeModal}
            actionText={"Save"}
            onSubmit={handleSubmit}>
      <label htmlFor="username">Username *</label>
      <Field className="input" component={InputField} type="text" name="username" />
      <label htmlFor="first_name">Firstname</label>
      <Field className="input" component={InputField} type="text" name="first_name" />
      <label htmlFor="last_name">Lastname</label>
      <Field className="input" component={InputField} type="text" name="last_name" />
      <label htmlFor="password">New password *</label>
      <Field className="input" component={InputField} type="password" name="password" />
      <span className="checkbox">
        <label htmlFor="is_active">Is active</label>
        <Field className="input" component="input" type="checkbox" name="is_active" />
      </span>
    </Modal> 
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: {
      username: ownProps.user?.username || '',
      first_name: ownProps.user?.first_name || '',
      last_name: ownProps.user?.last_name || '',
      is_active: ownProps.user?.is_active !== undefined ? ownProps.user.is_active : true,
      password: ''
    }
  }
}

export const createForm = (formName, enableReinitialize = false) => {
  return connect(mapStateToProps)(reduxForm({
    form: formName,
    enableReinitialize,
    validate
  })(Form));
}