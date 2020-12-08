import React from 'react';
import { Link } from 'react-router-dom';
import AddFolder from '../Elements/AddFolderButton';
import StoreContext from '../StoreContext';
import AddNote from '../Elements/AddNoteButton';
import PropTypes from 'prop-types';

class FolderSideBar extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired
    };

    render() {
        return (
            <StoreContext.Consumer>
                {({ folders }) => {
                    const { folderId } = this.props.match.params

                    const folderItems = folders.map((folder, idx) => {
                        return <Link key={idx} to={`/folder/${folder.folder_name}`}>
                            <li
                                key={folder.id}
                                type='radio'
                                id={folder.id}
                                name='folder'
                                className={folder.folder_name === folderId ?
                                    'selected-folder' : ''}>
                                {folder.folder_name}
                            </li>
                        </Link>
                    })

                    return (
                        <>
                            <ul>
                                {folderItems}
                                <AddFolder />
                            </ul>
                            <AddNote />
                        </>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}


export default FolderSideBar;