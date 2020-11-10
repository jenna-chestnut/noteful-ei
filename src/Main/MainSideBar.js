import React from 'react';
import {Link} from 'react-router-dom';

class MainSideBar extends React.Component {
    render() {
        const {folders} = this.props.store;
        const folderItems = folders.map((folder, idx) => {
            return <Link key={idx} to={`/folder/${folder.name}`}>
            <li 
            type='radio'
            key={folder.id} 
            id={folder.id} 
            name='folder'>
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

export default MainSideBar;