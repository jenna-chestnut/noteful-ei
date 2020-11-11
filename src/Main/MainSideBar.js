import React from 'react';
import { Link } from 'react-router-dom';
import AddFolder from '../Elements/AddFolder';
import StoreContext from '../StoreContext';

class MainSideBar extends React.Component {

    render() {
        return (
            <StoreContext.Consumer>
                {({ folders }) => {

                    const folderItems = folders.map((folder, idx) => {
                        return (
                            <Link key={idx} to={`/folder/${folder.name}`}>
                                <li
                                    key={folder.id}
                                    id={folder.id}
                                    name='folder'>
                                    {folder.name}
                                </li>
                            </Link>
                        )
                    })

                    return (
                        <>
                            {folderItems}
                            <AddFolder />
                        </>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}

export default MainSideBar;