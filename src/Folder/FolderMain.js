import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AddNote from '../Elements/AddNote';
import DeleteNote from '../Elements/DeleteNote';
import StoreContext from '../StoreContext';

class FolderMain extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {({ notes, folders }) => {

                    const folder = folders.find(folder => {
                        return folder.name === this.props.match.params.folderId
                    })

                    let list = notes.filter(item => item.folderId === folder.id)

                    let mainList = list.map(item => {
                        return <li key={item.id}>
                            <Link to={`/note/${item.name}`}>
                                {item.name}
                            </Link>
                            <DeleteNote id={item.id}/>
                            <p>Date modified: {moment(item.modified).calendar()}</p>
                        </li>
                    })

                    return (
                        <>
                            { mainList}
                            <AddNote />
                        </>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}


export default FolderMain;