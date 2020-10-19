export const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'The field can\'t be empty';
  } else if (values.username.length > 150) {
    errors.username = 'Must be 150 characters or less';
  } else if (!/^[\w.@+-]+$/.test(values.username)) {
    errors.username = 'Invalid username';
  }

  if (!values.password) {
    errors.password = 'The field can\'t be empty';
  } else if (values.password.length > 128) {
    errors.password = 'Must be 128 characters or less';
  } else if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(values.password)) {
    errors.password = 'Invalid password';
  }

  if(values.first_name) {
    if (values.first_name.length > 30) {
        errors.first_name = 'Must be 30 characters or less'
    }
  }

  if(values.last_name) {
    if (values.last_name.length > 150) {
      errors.last_name = 'Must be 150 characters or less'
    }
  }

  return errors;
}


