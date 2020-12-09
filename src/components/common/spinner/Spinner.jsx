import React from 'react';
import { ReactComponent as SpinnerIcon }  from './../../../assets/images/spinner.svg';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="wrapper">
        <SpinnerIcon className="icon_spinner" />
      </div>
    </div> 
  )
}

export default Spinner;