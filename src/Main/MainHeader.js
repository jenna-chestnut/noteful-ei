import React from 'react';

class MainHeader extends React.Component {
    render() {
        return (
            <div className='main-header'>
                <h1 onClick={() => this.props.history.push('/')}>NOTEFUL</h1>
            </div>
        )
    }
}

export default MainHeader;