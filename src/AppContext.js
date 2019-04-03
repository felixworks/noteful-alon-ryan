import React, { Component } from 'react'

export const MyContext = React.createContext()

class AppContext extends Component {

    state = {
        folders: [],
        notes: [],
    };

    componentDidMount() {
        fetch('http://localhost:9090/folders')
        .then(res => res.json())
        .then(resJson => this.setState({folders: resJson}))
        .catch(err => new Error(err));

        fetch('http://localhost:9090/notes')
        .then(res => res.json())
        .then(resJson => this.setState({notes: resJson}))
        .catch(err => new Error(err));
    }

    deleteNote = (noteId) => {
        let newNotes = this.state.notes.filter((note) => {
            return note.id !== noteId;
        })
        this.setState({
            notes: newNotes
        });
    }

    render() {
        return (
        <MyContext.Provider value={{...this.state, deleteNote: this.deleteNote}}>
            {this.props.children}
        </MyContext.Provider>
        )
    }
}

export default AppContext;
