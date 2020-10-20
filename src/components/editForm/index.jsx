import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clear, edit, get } from '../../redux/actionCreators';
import { createForm } from '../form';

const EditForm = createForm('editForm', true)

const EditFormContainer = ({ get, match, edit, user, editUser, clear }) => {
  
  useEffect(() => {
    clear();
  }, [editUser, clear]);

  useEffect(() => {
    get(match.params.id);
  }, [match.params.id, get]);

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
    clear: () => {
      dispatch(clear());
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