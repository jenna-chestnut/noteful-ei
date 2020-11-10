import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import SideBar from './SideBar';
import MainHeader from './Main/MainHeader';
import FolderHeader from './Folder/FolderHeader';
import NoteHeader from './Note/NoteHeader';
import MainSideBar from './Main/MainSideBar';
import FolderSideBar from './Folder/FolderSidebar';
import NoteSideBar from './Note/NoteSidebar';
import MainMain from './Main/MainMain';
import FolderMain from './Folder/FolderMain';
import NoteMain from './Note/NoteMain';
import store from './dummy-store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store
    }
  }

  render() {
    const { store } = this.state;
    return (
      <BrowserRouter>
        <div className="App">

          <Header >
            <Route exact path='/' component={MainHeader} />
            <Route path='/folder/:folderId' component={FolderHeader} />
            <Route path='/note/:noteId' component={NoteHeader} />
          </Header>

          <main className='group'>
            <SideBar >
              <Route exact path='/'
                render={() => <MainSideBar store={this.state.store} />} />
              <Route path='/folder/:folderId'
                render={(match) => <FolderSideBar match={match}
                  store={this.state.store} />} />
              <Route path='/note/:noteId'
                render={(match) => <NoteSideBar store={this.state.store}
                  match={match} />} />
            </SideBar>

            <Main >
              <Route exact path='/'
                render={() => <MainMain store={this.state.store} />} />
              <Route path='/folder/:folderId'
                render={(match) => <FolderMain match={match}
                  store={this.state.store} />} />
              <Route path='/note/:noteId'
                render={(match) => <NoteMain match={match}
                store={this.state.store} />} />
            </Main>
          </main>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
