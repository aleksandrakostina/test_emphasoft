import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearEditUser, edit, get } from '../../redux/actionCreators';
import EditForm from './EditForm';

const EditFormContainer = (props) => {
  console.log(props)
  useEffect(() => {
    props.get(props.match.params.id)
  }, [props.match.params.id]);

  if(props.editUser) {
    props.clearEditUser();
    return <Redirect to="/" />
  }
  const handleSubmit = (values) => {
    props.edit(props.match.params.id, values);
  }
 
  return props.user && <EditForm user={props.user} onSubmit={handleSubmit} />;
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