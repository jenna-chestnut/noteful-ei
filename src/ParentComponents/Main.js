import React from 'react';
import '../sweepingstyles/main.css';

class Main extends React.Component {
    render() {
        return (
            <div className='main-seg itemdouble'>
                {this.props.children}
            </div>
        )
    }
}

export default Main;