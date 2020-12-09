import React from 'react';
import { ReactComponent as UpArrow } from './../../../../../assets/images/up.svg';
import { ReactComponent as DownArrow } from './../../../../../assets/images/down.svg';
import classname from 'classnames';

const UsersHeader = ({ handleClickToggle, columns }) => {

  return (
    <div className="users__item users__header"> 
      {columns.map((item, index) => 
        <span key={index} 
              className={item.classes}
              onClick={() => {
                item.sort && handleClickToggle(index)
               }}>
          {item.name}
          {item.sort && <span className="users__icon">
            <UpArrow className={classname("icon_arrow", {"icon_arrow_active": item.order === 'asc'})} />
            <DownArrow className={classname("icon_arrow", {"icon_arrow_active": item.order === 'desc'})} />
          </span>}      
        </span>)}
    </div>
  )
}

export default UsersHeader;