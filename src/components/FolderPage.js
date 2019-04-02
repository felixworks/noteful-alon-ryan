import React from 'react';
import FolderNav from './FolderNav';
import NoteList from './NoteList';

function FolderPage(props) {
  console.log(props.folderId);
  return (
    <div className="container">
      <FolderNav folders={props.folders}
                 selectedFolderId={props.folderId} />

      <main className="main">
        <NoteList notes={props.notes}
                  folderId={props.folderId}/>
      </main>
    </div>
  );
}

export default FolderPage;
