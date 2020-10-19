import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearCreateUser, create } from '../../redux/actionCreators';
import { createForm } from '../form';

const CreateForm = createForm('createForm');

const CreateFormContainer = ({ createUser, clearCreateUser, create}) => {

  useEffect(() => {
    if(createUser) {
      clearCreateUser();
    }
  }, [createUser, clearCreateUser]);
  
  if(createUser) {
    return <Redirect to="/" />
  }

  const handleSubmit = (values) => {
    create(values);
  }
 
  return (
    <CreateForm title="Create user" onSubmit={handleSubmit} />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: (user) => {
      dispatch(create(user))
    },
    clearCreateUser: () => {
      dispatch(clearCreateUser())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    createUser: state.users.createUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateFormContainer);