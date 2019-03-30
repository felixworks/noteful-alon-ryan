import React from 'react';

function FolderNav(props) {
  return (
    <nav className="sidebar">
      <ul className="folders-list">
        <li className="folder">Folder 1</li>
        <li className="folder">Folder 2</li>
        <li className="folder">Folder 3</li>
      </ul>
      <button className="sidebar-add-btn">Add Folder</button>
    </nav>
  );
}

export default FolderNav;
