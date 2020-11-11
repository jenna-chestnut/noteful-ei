import React from 'react';
import StoreContext from '../StoreContext';
import './deletenote.css';

class DeleteNote extends React.Component {
    static contextType = StoreContext;

    deleteNote = (id) => {
        fetch(`http://localhost:9090/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Item not deleted! Try again.')
                } else {
                    this.context.updateMessage('Item deleted!')
                }
            })
            .catch(error => this.context.updateError(error.message));
    }

    render() {
        const { id } = this.props;
        return (
            <StoreContext.Consumer>
                {({ handleDelete }) => {
                    return (
                        <button className='delete-note'
                            onClick={() => {
                                if (window.confirm
                                    ('Are you sure you want to delete?')) {
                                    handleDelete(id);
                                    this.deleteNote(id);
                                }
                            }}
                        >DELETE</button>
                    )
                }
                }
            </StoreContext.Consumer>
        )
    }
}

export default DeleteNote;