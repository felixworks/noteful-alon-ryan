import React from 'react'
import { MyContext } from '../AppContext';
import { Link } from 'react-router-dom';

export default function Note(props) {

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
        return (
            <button onClick={() => context.deleteNote(props.note.id)}>
              <Link to="/">Delete</Link>
            </button>
        )
      }}
    </MyContext.Consumer>
    </>
  )
}

