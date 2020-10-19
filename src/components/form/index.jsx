import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../../utils/validate';
import InputField from '../InputFields';
import './Form.css';

function Form(props) {
 
  return (
    <div className="forms">
      <div className="wrapper">
        <h2>{props.title}</h2>
        <form className="form" onSubmit={props.handleSubmit}>
          <label htmlFor="username">Username</label>
          <Field className="form__input" component={InputField} type="text" name="username" />
          <label htmlFor="first_name">Firstname</label>
          <Field className="form__input" component={InputField} type="text" name="first_name" />
          <label htmlFor="last_name">Lastname</label>
          <Field className="form__input" component={InputField} type="text" name="last_name" />
          <label htmlFor="password">New password</label>
          <Field className="form__input" component={InputField} type="text" name="password" />
          <span className="form__active">
            <label htmlFor="is_active">Is active</label>
            <Field className="form__input" component="input" type="checkbox" name="is_active" />
          </span>
          <div className="form__buttons">
            <button className="button form__button" type="submit">Save</button>
            <Link to="/">
              <button className="button form__button form__button_cancel">Cancel</button>
            </Link>
          </div>
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