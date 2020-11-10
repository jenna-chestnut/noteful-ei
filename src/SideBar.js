import React from 'react';
import './styles/sidebar.css';

class SideBar extends React.Component {
    render() {
        return (
            <div className='sidebar item'>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

export default SideBar;