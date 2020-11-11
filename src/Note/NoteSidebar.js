import React from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../StoreContext';

class NoteSideBar extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {({ folders, notes }) => {

                    const note = notes.find(note => {
                        return this.props.match.params.noteId
                            === note.name
                    }) || {content: '', name: 'Name Unknown'}

                    const folder = folders.find(folder => {
                        return folder.id === note.folderId
                    }) || {name : 'FolderName'}

                    return (
                        <>
                            <Link to='/'>
                                <li
                                    key='goBack'>GO BACK</li>
                            </Link>
                            <h2>{folder.name}</h2>
                        </>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}

export default NoteSideBar;