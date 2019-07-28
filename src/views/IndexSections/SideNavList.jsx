import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const SideNavList = ({ songList }) => {
    return (
      <div>
      {console.log(songList)}
      {songList.map(songList => (
        <p>{songList}</p>
      ))}
      </div>
      // <div>
      //   {console.log(songList)}
      //   <p>List Based</p>
      //   <Nav vertical className='bg-secondary' >
      //     <NavItem>
      //       <NavLink href="#">Link</NavLink>
      //     </NavItem>
      //     <NavItem>
      //       <NavLink href="#">Link</NavLink>
      //     </NavItem>
      //     <NavItem>
      //       <NavLink href="#">Another Link</NavLink>
      //     </NavItem>
      //     <NavItem>
      //       <NavLink disabled href="#">Disabled Link</NavLink>
      //     </NavItem>
      //   </Nav>
      //   <hr />
      //   <p>Link based</p>
      //   <Nav vertical>
      //     <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
      //   </Nav>
      // </div>
    );
}

export default SideNavList;