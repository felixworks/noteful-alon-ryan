import React, { Component } from "react";
import UUID from "uuid/v4";
import { MyContext } from "../AppContext";

export default class AddFolder extends Component {
  state = {
    folderName: "",
    errorMessage: ""
  };

  handleFolderNameChange = e => {
    console.log("handleAddFolder runs");
    this.setState({
      folderName: e.target.value
    });
  };

  validateFolderName(folderName) {
    return folderName.length !== 0;
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.validateFolderName(this.state.folderName)) {
      let newFolder = {
        id: UUID(),
        name: this.state.folderName
      };
      e.target.reset();
      this.context.addFolder(newFolder);
      this.setState({
        errorMessage: ""
      });
    } else {
      this.setState({
        errorMessage: "Please add a name for the folder you are trying to add."
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="addFolderInput">Add Folder</label>
        <input
          onChange={this.handleFolderNameChange}
          id="addFolderInput"
          type="text"
          className="add-folder"
        />
        <button type="submit">Add</button>
        <p>{this.state.errorMessage ? this.state.errorMessage : ""}</p>
      </form>
    );
  }
}

AddFolder.contextType = MyContext;
