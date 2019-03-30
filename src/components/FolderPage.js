import React from 'react';

function FolderPage(props) {
  return (
    <div className="container">
      <nav className="sidebar">
        <ul className="folders-list">
          <li className="folder">Folder 1</li>
          <li className="folder">Folder 2</li>
          <li className="folder highlight">Folder 3</li>
        </ul>
        <button className="sidebar-add-btn">Add Folder</button>
      </nav>

      <main className="main">
        <ul className="notes-list">
          <li className="note">
            <h2 className="note-heading">Note 1</h2>
            <p className="note-paragraph">Date modified on 2rd Jan 2019</p>
            <button className="note-delete-btn">Delete Note</button>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default FolderPage;
