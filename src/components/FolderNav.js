import React from 'react';
import { NavLink } from 'react-router-dom';

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
      <button className="sidebar-add-btn">Add Folder</button>
    </nav>
  );
}

export default FolderNav;
