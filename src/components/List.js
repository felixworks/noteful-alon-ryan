import React from 'react';
import { Link } from 'react-router-dom';
import ListNote from './ListNote';


function List(props) {
  let notes;
  
  //Filter if folderId provided
  if(props.folderId) {
    notes = props.notes.filter((note) => {
      return note.folderId === props.folderId
    })
  } else {
    notes = props.notes
  }
  
  return (
    <ul className="notes-list">
      {notes.map((note) => {
        return (
            <ListNote note={note} />
        )
      })}
    </ul>
  );
}

export default List;
