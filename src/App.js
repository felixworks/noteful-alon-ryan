import React, { Component } from 'react';
import Store from './Store';
import FolderPage from './components/FolderPage';
import MainPage from './components/MainPage';
import NotePage from './components/NotePage';
import Header from './components/Header';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    folders: Store.folders,
    notes: Store.notes,
  };

  renderMainRoutes = () => {
    return (
      <React.Fragment>
        <Route 
        exact path="/" 
        render={() => <MainPage 
                      folders={this.state.folders}
                      notes={this.state.notes}
                      />
        }/>

        <Route 
        path="/folder/:folderId" 
        render={({ match }) => <FolderPage 
                      folders={this.state.folders}
                      notes={this.state.notes}
                      folderId={match.params.folderId}
                      />
        }/>

        <Route 
        path="/note/:noteId" 
        render={({ match, history }) => <NotePage 
                                noteId={match.params.noteId}
                                history={history}
                                notes={this.state.notes}/>
              } />

      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>{this.renderMainRoutes()}</main>
      </div>
    );
  }
}

export default App;
