import React from 'react';
import { Link } from 'react-router-dom';
import AddFolder from '../Elements/AddFolderButton';
import StoreContext from '../StoreContext';
import AddNote from '../Elements/AddNoteButton';

class MainSideBar extends React.Component {

    render() {
        return (
            <StoreContext.Consumer>
                {({ folders }) => {

                    const folderItems = folders.map((folder, idx) => {
                        return (
                            <Link key={idx} to={`/folder/${folder.folder_name}`}>
                                <li
                                    key={folder.id}
                                    id={folder.id}
                                    name='folder'>
                                    {folder.folder_name}
                                </li>
                            </Link>
                        )
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

export default MainSideBar;