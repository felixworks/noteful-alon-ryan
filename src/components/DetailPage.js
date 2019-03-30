import React from 'react';

function DetailPage(props) {
  return (
    <div className="container">
      <nav className="sidebar">
        <button className="sidebar-go-back">Go Back</button>
      </nav>
      <main className="main">
        <ul className="notes-list">
          <li className="note">
            <h2 className="note-heading">Note 1</h2>
            <p className="note-paragraph">Date modified on 2rd Jan 2019</p>
            <button className="note-delete-btn">Delete Note</button>
          </li>
        </ul>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </main>
    </div>
  );
}

export default DetailPage;
