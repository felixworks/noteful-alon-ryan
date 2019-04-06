import React from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../AppContext';
import PropTypes from 'prop-types';


export default function ListNote(props) {

  const { id, name, modified, content } = props.note;
  if(!content) {
    throw new Error();
  }

  return (
    <li className="note" key={id}>
        <Link to={`/note/${id}`}>
            <h2 className="note-heading">{name}</h2>
        </Link>
        <p className="note-paragraph">{modified}</p>
        <MyContext.Consumer>
          {(context) => {
           return <button onClick={()=> context.deleteNote(id)} className="note-delete-btn">Delete Note</button>
          }}
        </MyContext.Consumer>
    </li>
  )
}

ListNote.propTypes = {
  note: PropTypes.object
}
