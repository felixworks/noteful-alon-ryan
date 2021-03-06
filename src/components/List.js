import React from 'react';
import ListNote from './ListNote';
import AddNote from './AddNote';
import ListNoteErrorBoundary from './ListNoteErrorBoundry';
import PropTypes from 'prop-types';

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
      <>
      <AddNote folders={props.folders}/>
      <ul className="notes-list">
        {notes.map((note) => {
          return (
            <ListNoteErrorBoundary key={note.id}>
              <ListNote note={note} />
            </ListNoteErrorBoundary>
          )
        })}
      </ul>
      </>
  );
}

List.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  folderId: PropTypes.string,
  folders: PropTypes.arrayOf(PropTypes.object)
}

export default List;
