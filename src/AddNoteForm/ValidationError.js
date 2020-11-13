import React from 'react';
import './validationerror.css';

class ValidationError extends React.Component {
    render() {
        const message = this.props.message ?
            <div className='validation'>{this.props.message}</div>
            : <></>
        return (
            message
        )
    }
}

export default ValidationError;