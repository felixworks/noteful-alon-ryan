import React from 'react';
import { Link } from 'react-router-dom';

function NoteList(props) {

  let notes = props.notes.filter((note) => {
    return note.folderId === props.folderId
  })


  return (
    <ul className="notes-list">
      {notes.map((note) => {
        return (
          <Link to={`/note/${note.id}`}>
            <li className="note" key={note.id}>
              <h2 className="note-heading">{note.name}</h2>
              <p className="note-paragraph">{note.modified}</p>
              <button className="note-delete-btn">Delete Note</button>
            </li>
          </Link>
        )
      })}
    </ul>
  );
}

export default NoteList;
