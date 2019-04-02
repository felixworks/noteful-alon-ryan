import React from 'react';
import Note from './Note';
import { Link } from 'react-router-dom'

function NotePage(props) {
  console.log(props);

  let note = props.notes.find((note) => {
    return note.id === props.noteId
  })


  return (
    <div className="container">
      <nav className="sidebar">
        <Link to={`/folder/${note.folderId}`}
        className="sidebar-go-back">Go Back</Link>
      </nav>
      <main className="main">
        <Note note={note}/>
      </main>
    </div>
  );
}

export default NotePage;
