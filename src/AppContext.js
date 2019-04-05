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

    addNote = (newNote) => {
        let newNotes = this.state.notes;
        newNotes.push(newNote);
        this.setState({
            notes: newNotes
        });
    }

    addFolder = (newFolder) => {
        let newFolderList = this.state.folders;
        newFolderList.push(newFolder);
        this.setState({
            folders: newFolderList
        })
    }


    render() {
        return (
        <MyContext.Provider value={{...this.state,
                                    deleteNote: this.deleteNote,
                                    addNote: this.addNote,
                                    addFolder: this.addFolder,
                                    }}>
            {this.props.children}
        </MyContext.Provider>
        )
    }
}

export default AppContext;
