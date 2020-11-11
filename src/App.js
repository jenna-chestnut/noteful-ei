import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import SideBar from './SideBar';
import MainSideBar from './Main/MainSideBar';
import FolderSideBar from './Folder/FolderSidebar';
import NoteSideBar from './Note/NoteSidebar';
import MainMain from './Main/MainMain';
import FolderMain from './Folder/FolderMain';
import NoteMain from './Note/NoteMain';
import ClearMessage from './Elements/ClearMessage';
import StoreContext from './StoreContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: [],
      loading: false,
      error: null,
      updateMessage: null
    }
  }

  componentDidMount = () => {
    this.setState({ loading: true })
    fetch('http://localhost:9090/db')
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Sorry! Something went wrong. Please try again later.')
        } else {
          return resp.json()
        }
      })
      .then(data => {
        setTimeout(() =>
          this.setState({
            ...data,
            loading: false
          }), 500);
      })
      .catch(error => {
        console.log(error)
        this.setState({
          loading: false,
          error: error.message
        })
      })
  }

  handleDelete = (id) => {
    const toDelete = this.state.notes.find(note => {
      return note.id === id
    })
    this.setState({
      notes: this.state.notes.filter(notes =>
        notes !== toDelete)
    })
  }

  updateError = (message) => {
    this.setState({
      error: message
    })
  }

  updateMessage = (message) => {
    this.setState({
      updateMessage: message
    })
  }

  clearMessage = () => {
    this.setState({
      error: null,
      updateMessage: null
    })
  }

  render() {

    const contextValues = {
      ...this.state,
      handleDelete: this.handleDelete,
      updateMessage: this.updateMessage,
      handleError: this.updateError,
      clearMessage: this.clearMessage
    }

    const loading = this.state.loading ?
      <div className='loading'>Loading...</div>
      : '';

    const error = this.state.error ?
      <div className='loading'>{this.state.error}<ClearMessage/></div>
      : '';

    const updateMessage = this.state.updateMessage ?
      <div className='loading'>{this.state.updateMessage}<ClearMessage/></div>
      : '';

    return (
      <BrowserRouter>
        <div className="App">
          <StoreContext.Provider value={contextValues}>

            <Header >
              <Route exact path='/' component={Header} />
              <Route path='/folder/:folderId' component={Header} />
              <Route path='/note/:noteId' component={Header} />
            </Header>

            {loading}{error}{updateMessage}

            <main className='group'>
              <SideBar >
                <Route exact path='/' component={MainSideBar} />
                <Route path='/folder/:folderId' component={FolderSideBar} />
                <Route path='/note/:noteId' component={NoteSideBar} />
              </SideBar>

              <Main >
                <Route exact path='/' component={MainMain} />
                <Route path='/folder/:folderId' component={FolderMain} />
                <Route path='/note/:noteId' component={NoteMain} />
              </Main>
            </main>

          </StoreContext.Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
