import React, { Component } from 'react'
import UUID from 'uuid/v4';

export default class AddFolder extends Component {
    state = {
        folderName: '',
        hasError: true,
        errorMessage: ''
    }

    handleAddFolder(newFolderName) {
        this.setState({
            folderName: newFolderName
        }, () => {this.validateFolderName(this.state.folderName)})
    }

    validateFolderName(folderName) {
        if(folderName.length !== 0) {
            this.setState({hasError: false});
            return;
        } else {
            this.setState({
                hasError: true,
                errorMessage: 'Folder name must be at least 1 character long'
            })
        }  
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            id: UUID(),
            name: this.state.folderName
        };
        e.target.reset()


        console.log(UUID());
        fetch('http://localhost:9090/folders', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res);
            if (res.status === 201) {
                return res;
            }
            throw new Error('POST failed for some reason')
        })
        .catch(error => console.error('Error:', error))

    }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="addFolderInput">Add Folder</label>
          <input onChange={(e) => this.handleAddFolder(e.target.value)} id="addFolderInput" type="text" className="add-folder" />
          <button type="submit">Add</button>
      </form>
    )
  }
}
