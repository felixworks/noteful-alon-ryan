import React from 'react'

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
    </>
  )
}

