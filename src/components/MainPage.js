import React from 'react';
import FolderNav from './FolderNav';
import NoteList from './NoteList';
import {Link} from 'react-router-dom';

function MainPage(props) {

  let notes = props.notes.map((note) => {

    return (
      <li className="note" key={note.id}>
        <Link to={`/note/${note.id}`}>
          <h2 className="note-heading">{note.name}</h2>
        </Link>
        <p className="note-paragraph">{note.modified}</p>
        <button className="note-delete-btn">Delete Note</button>
      </li>
    )
  })

  return (
    <div className="container">
      <FolderNav folders={props.folders}/>
      <main className="main">
        {notes}
      </main>
    </div>
  );

}

export default MainPage;

