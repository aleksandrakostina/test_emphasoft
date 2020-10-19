import React from 'react';
import { Link } from 'react-router-dom';

const CreateButton= () => {

  return (
    <div className="create">
      <div className="wrapper">
        <Link className="button" to="/create">Add user</Link>
      </div>
    </div>
  );
}

export default CreateButton;