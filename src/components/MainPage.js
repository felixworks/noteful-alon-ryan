import React from 'react';
import FolderNav from './FolderNav';
import ListNote from './ListNote';
import { MyContext } from '../AppContext';
import List from './List';

function MainPage(props) {  

  return (
    <MyContext.Consumer>
      {(context)=> {
        return (
          <div className="container">
          <FolderNav folders={context.folders} />
          <main className="main">
            <List notes={context.notes} />
          </main>
          </div>
        )
      }}
    </MyContext.Consumer>
  );

}

export default MainPage;

