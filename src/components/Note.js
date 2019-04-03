import React from 'react'
import { MyContext } from '../AppContext';
import { Link } from 'react-router-dom';

export default function Note(props) {
  
  function sendDeleteRequest(noteId) {
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type' : 'application/json'
      },
    })
    .then(res => {
      if(res.ok) {

      }
    })
    .catch(err => new Error(err));
  }

  return (
    <>
    <ul className="notes-list">
      <li className="note">
        <h2 className="note-heading">{props.note.name}</h2>
        <p className="note-paragraph">{props.note.modified}</p>
      </li>
    </ul>
    <p>
      {props.note.content}
    </p>
    <MyContext.Consumer>
      {(context) => {

        function sendDeleteRequest(noteId) {
          fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
              'content-type' : 'application/json'
            },
          })
          .then(res => {
            if(res.ok) {
              context.deleteNote(noteId);
            } else {
              throw new Error('bad response');
            }
          })
          .catch(err => new Error(err));
        }
        return (
            <button onClick={() => sendDeleteRequest(props.note.id)}>
              <Link to="/">Delete</Link>
            </button>
        )
      }}
    </MyContext.Consumer>
    </>
  )
}

