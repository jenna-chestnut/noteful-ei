import React from 'react';
import StoreContext from '../StoreContext';
import './deletenote.css';
import PropTypes from 'prop-types';

class DeleteNote extends React.Component {
    static contextType = StoreContext;

    static defaultProps = {
        id: 'wuia4rgis'
    };

    static propTypes = {
        id: PropTypes.number.isRequired
    };

    deleteNote = (id) => {
        fetch(`http://localhost:8000/note/${id}`, {
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
                    this.props.history.push('/');
                }
            })
            .catch(error => this.context.handleError(error.message));
    }

    render() {
        const { id } = this.props;
        const buttonStyle = this.props.noteMain ? 
        'd-note-main' : 'delete-note';

        return (
            <StoreContext.Consumer>
                {({ handleDelete }) => {
                    return (
                        <button className={buttonStyle}
                            onClick={() => {
                                if (window.confirm
                                    ('Are you sure you want to delete?')) {
                                    handleDelete(id);
                                    this.deleteNote(id);
                                }
                            }}
                        >DELETE</button>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}

export default DeleteNote;