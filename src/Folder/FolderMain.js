import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class FolderMain extends React.Component {
    render() {
        const { notes, folders } = this.props.store;

        const folder = folders.find(folder => {
            return folder.name === this.props.match.match.params.folderId
        })

        let list = notes.filter(item => item.folderId === folder.id)

        let mainList = list.map(item => {
            return <li key={item.id}>
                <Link to={`/note/${item.name}`}>
                    {item.name}
                </Link>
                <button className='delete-note'>DELETE</button>
                <p>Date modified: {moment(item.modified).calendar()}</p>
            </li>
        })

        return (
            <>
                { mainList}
                <button className='add-note'>ADD NOTE</button>
            </>
        )
    }
}

export default FolderMain;