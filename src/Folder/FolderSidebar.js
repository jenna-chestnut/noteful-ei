import React from 'react';
import {Link} from 'react-router-dom';

class FolderSideBar extends React.Component {
    render() {
        const {folderId} = this.props.match.match.params
        const {folders} = this.props.store;
        const folderItems = folders.map((folder, idx) => { 
            return <Link key={idx} to={`/folder/${folder.name}`}>
            <li 
            key={folder.id}
            type='radio' 
            id={folder.id} 
            name='folder'
            className={folder.name === folderId ?
            'selected-folder' : ''}>
                {folder.name}
            </li>
            </Link>
        })
        return (
            <>
                {folderItems}
                <Link to=''>
                <li key='addFolder'>ADD FOLDER?!</li>
                </Link>
            </>
        )
    }
}

export default FolderSideBar;