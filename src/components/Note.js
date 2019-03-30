import React from 'react';

function Note(props) {
  return (
    <li className="note">
      <h2 className="note-heading">Note 1</h2>
      <p className="note-paragraph">Date modified on 2rd Jan 2019</p>
      <button className="note-delete-btn">Delete Note</button>
    </li>
  );
}

export default Note;
