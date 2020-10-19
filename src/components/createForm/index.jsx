import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearCreateUser, create } from '../../redux/actionCreators';
import CreateForm from './CreateForm';

const CreateFormContainer = (props) => {

  useEffect(() => {
    if(props.createUser) {
      props.clearCreateUser();
    }
  }, [props.createUser]);
  
  if(props.createUser) {
    return <Redirect to="/" />
  }

  const handleSubmit = (values) => {
    props.create(values);
  }
 
  return (
    <CreateForm onSubmit={handleSubmit} />
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