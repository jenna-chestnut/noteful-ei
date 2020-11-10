import React from 'react';
import { Link } from 'react-router-dom';

class NoteSideBar extends React.Component {
    render() {
        const { folders, notes } = this.props.store;

        const note = notes.find(note => {
            return this.props.match.match.params.noteId
                === note.name
        })

        const folder = folders.find(folder => {
            return folder.id === note.folderId
        })
        
        return (
            <>
                <Link to='/'>
                    <li
                        key='goBack'>GO BACK</li>
                </Link>
                <h2>{folder.name}</h2>
            </>
        )
    }
}

export default NoteSideBar;