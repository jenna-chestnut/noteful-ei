import React from 'react';
import { withRouter } from 'react-router-dom';
import './addnote.css';

class AddNote extends React.Component {
    render() {
        return (
            <button className='add-note'
            onClick={() => this.props.history.push('/AddNote')}>
             New Note
            </button>
        )
    }
}

export default withRouter(AddNote);