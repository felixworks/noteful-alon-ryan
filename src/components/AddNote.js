import React from 'react';
import UUID from 'uuid/v4';
import { MyContext } from '../AppContext';


export default class AddNote extends React.Component {
    state = {
        noteName: '',
        content: '',
        folderName: '',
        hasError: true
    }

    updateName(noteName) {
        this.setState({
            noteName: noteName
        }, () => {this.validateNoteName(noteName)})
    }

    validateNoteName(noteName) {
        if(noteName.length !== 0) {
            this.setState({hasError: false});
            return;
        } else {
            this.setState({
                hasError: true,
                errorMessage: 'Note name must be at least 1 character long'
            })
        }
    }

    updateContent(content) {
        this.setState({
            content: content
        })
    }

    updateFolderId(folderId) {
        this.setState({
            folderId: folderId
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let newNote ={
            id: UUID(),
            name: this.state.noteName,
            modified: new Date().toDateString(),
            folderId: this.state.folderId,
            content: this.state.content
        }

    
    
        fetch('http://localhost:9090/notes', {
            method: 'POST',
            body: JSON.stringify(newNote),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res);
            if (res.status === 201) {
                this.context.addNote(newNote);
                return res;
            }
            throw new Error('POST failed for some reason')
        })
        .catch(error => console.error('Error:', error))
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="addNoteName">Note Name</label>
                <input type="text" onChange={(e) => this.updateName(e.target.value)} />
                <label htmlFor="addNoteContent">Content</label>
                <input type="text" onChange={(e) => this.updateContent(e.target.value)} />
                <label htmlFor="addNoteFolder">Folder Name</label>
                <select onChange={(e) => this.updateFolderId(e.target.value)}>
                    {this.props.folders.map(folder => {
                        return (
                            <option value={folder.id}>{folder.name}</option>
                        )
                    })}
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
AddNote.contextType = MyContext;