import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const SideNavList = ({ songList }) => {
    return (
      <div>
      {songList.map(songList => (
        <p>{songList}</p>
      ))}
      </div>
      
      
    );
}

export default SideNavList;