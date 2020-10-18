import React from 'react';

function EditForm(props) {
  console.log(props)
  return (
    <div className="edit">
      <div className="wrapper">
        <h2>Edit username</h2>
        <form>
          <input type="text" />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default EditForm;