import React from 'react';
import moment from 'moment';

class NoteMain extends React.Component {
    render() {
        const { notes } = this.props.store;

        const note = notes.find(note => {
            return this.props.match.match.params.noteId
                === note.name
        })


        return (
            <div className='content'>
                <li className='note-view' key={note.id}>
                    <span className='note-name'>{note.name}</span>
                    <button className='delete-note'>DELETE</button>
                    <p>Date modified: {moment(note.modified).calendar()}</p>
                </li>
                <p>{note.content}</p>
            </div>
        )
    }
}

export default NoteMain;