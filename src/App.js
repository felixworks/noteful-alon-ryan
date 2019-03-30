import React, { Component } from 'react';
import Store from './Store';
import FolderPage from './components/FolderPage';
import MainPage from './components/MainPage';
import DetailPage from './components/DetailPage';
import Header from './components/Header';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    folders: [],
    notes: []
  };

  renderMainRoutes = () => {
    return (
      {
      <>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/folder" component={FolderPage} />
        <Route path="/detail" component={DetailPage} />
      </>
      }
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
