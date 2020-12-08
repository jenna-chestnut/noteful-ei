import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AddNote from '../Elements/AddNoteButton';
import DeleteNote from '../Elements/DeleteNoteButton';
import StoreContext from '../StoreContext';
import PropTypes from 'prop-types';

class FolderMain extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired
    };

    render() {
        return (
            <StoreContext.Consumer>
                {({ notes, folders }) => {

                    const folder = folders.find(folder => {
                        return folder.folder_name === this.props.match.params.folderId
                    })

                    let list = notes.filter(item => item.folder_id === folder.id)

                    let mainList = list.map(item => {
                        return (
                        <div className='group' key={item.id}>
                        <li className='thinned'>
                            <Link to={`/note/${item.note_name}`}>
                                {item.note_name}
                            </Link>
                            <p>Date modified:{' '} 
                             {moment(item.modified).calendar()}
                            </p>
                        </li>
                        <div className='d-note'>
                            <DeleteNote
                            id={item.id}/>
                            </div>
                        </div>
                        )
                    })

                    return (
                        <>
                        <ul>
                            { mainList}
                        </ul>
                        <AddNote />
                        </>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}


export default FolderMain;