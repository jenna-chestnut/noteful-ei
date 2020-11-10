import React from 'react';
import './styles/main.css';

class Main extends React.Component {
    render() {
        return (
            <div className='main-seg itemdouble'>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

export default Main;