import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../../utils/validate';
import InputField from '../InputFields';
import './Form.css';

function Form(props) {
 
  return (
    <div className="edit">
      <div className="wrapper">
        <h2>{props.title}</h2>
        <form className="edit-form" onSubmit={props.handleSubmit}>
          <label htmlFor="username">Username</label>
          <Field className="edit__input" component={InputField} type="text" name="username" />
          <label htmlFor="first_name">Firstname</label>
          <Field className="edit__input" component={InputField} type="text" name="first_name" />
          <label htmlFor="last_name">Lastname</label>
          <Field className="edit__input" component={InputField} type="text" name="last_name" />
          <label htmlFor="password">New password</label>
          <Field className="edit__input" component={InputField} type="text" name="password" />
          <span className="edit__active">
            <label htmlFor="is_active">Is active</label>
            <Field className="edit__input" component={InputField} type="checkbox" name="is_active" />
          </span>
          <button className="button edit-form__button" type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: {
      username: ownProps.user?.username || '',
      first_name: ownProps.user?.first_name || '',
      last_name: ownProps.user?.last_name || '',
      is_active: ownProps.user?.is_active || true,
      password: ownProps.user?.username ? 'Nf<U4f<rDbtDxAPn' : ''
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