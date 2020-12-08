import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AddNote from '../Elements/AddNoteButton';
import DeleteNote from '../Elements/DeleteNoteButton';
import StoreContext from '../StoreContext';

class MainMain extends React.Component {

    render() {
        return (
            <StoreContext.Consumer>
                {({ notes }) => {

                    let mainList = notes.map((item, idx) => {
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
                            id={item.id} 
                            key={idx}/>
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

export default MainMain;