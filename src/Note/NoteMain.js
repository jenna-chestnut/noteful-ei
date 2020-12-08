import React from 'react';
import moment from 'moment';
import StoreContext from '../StoreContext';
import PropTypes from 'prop-types';

class NoteMain extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired
    };
    

    render() {
        return (
            <StoreContext.Consumer>
                {({ notes }) => {

                    const note = notes.find(note => {
                        return this.props.match.params.noteId
                            === note.note_name
                    }) || { content: 'loading' }


                    return (
                        <div className='content'>
                            <li className='note-view' key={note.id}>
                                <span className='note-name'>{note.note_name}</span>
                                <p>Date modified:
                                    {moment(note.modified).calendar()}
                                </p>
                            </li>
                            <p>{note.content}</p>
                        </div>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}

export default NoteMain;