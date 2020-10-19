import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearEditUser, edit, get } from '../../redux/actionCreators';
import { createForm } from '../form';

const EditForm = createForm('editForm', true)

const EditFormContainer = ({ get, match, clearEditUser, edit, user, editUser }) => {
  
  useEffect(() => {
    get(match.params.id)
  }, [match.params.id, get]);

  useEffect(() => {
    if(editUser) {
      clearEditUser();
    }
  }, [editUser, clearEditUser]);

  if(editUser) {
    return <Redirect to="/" />
  }
  const handleSubmit = (values) => {
    edit(match.params.id, values);
  }
 
  return user && <EditForm title='Edit username' user={user} onSubmit={handleSubmit} />;
}

const mapDispatchToProps = (dispatch) => {
  return {
    get: (id) => {
      dispatch(get(id));
    },
    edit: (id, user) => {
      dispatch(edit(id, user));
    },
    clearEditUser: () => {
      dispatch(clearEditUser());
    } 
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    editUser: state.users.editUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFormContainer);