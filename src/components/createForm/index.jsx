import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clear, create } from '../../redux/actionCreators';
import { createForm } from '../form';

const CreateForm = createForm('createForm');

const CreateFormContainer = ({ createUser, clear, create }) => {

  useEffect(() => {
    clear();
  }, [createUser, clear]);

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
    clear: () => {
      dispatch(clear());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    createUser: state.users.createUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateFormContainer);