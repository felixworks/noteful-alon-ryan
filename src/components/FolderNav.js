import React from 'react';
import { NavLink } from 'react-router-dom';
import AddFolder from './AddFolder';

function FolderNav(props) {

  let folders = props.folders.map((folder) => {
    return <NavLink 
            to={`/folder/${folder.id}`} 
            key={folder.id}
            activeClassName='highlight'>
            <li className='folder' key={folder.id}>{folder.name}</li>
          </NavLink>
  });

  return (
    <nav className="sidebar">
      <ul className="folders-list">
        {folders}
      </ul>
      <AddFolder />
    </nav>
  );
}

export default FolderNav;
