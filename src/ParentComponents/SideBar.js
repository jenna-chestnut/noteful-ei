import React from 'react';
import '../sweepingstyles/sidebar.css';
import PropTypes from 'prop-types';

class SideBar extends React.Component {
    static propTypes = {
        children : PropTypes.array.isRequired
    };

    render() {
        return (
            <div className='sidebar item'>
                    {this.props.children}
            </div>
        )
    }
}

export default SideBar;