import React from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../AppContext';


export default function ListNote(props) {

  const { id, name, modified } = props.note;
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
