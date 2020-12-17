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
                item.isSort && handleClickToggle(index)
               }}>
          {item.name}
          {item.isSort && <span className="users__icon">
            <UpArrow className={classname("icon_arrow", {"icon_arrow_active": item.sort === 'asc'})} />
            <DownArrow className={classname("icon_arrow", {"icon_arrow_active": item.sort === 'desc'})} />
          </span>}      
        </span>)}
    </div>
  )
}

export default UsersHeader;