import React from 'react';
import {withRouter} from 'react-router-dom';
import './styles/header.css';

class Header extends React.Component {
    render() {
        return (
            <header onClick={() => this.props.history.push('/')}>
                {this.props.children}
            </header>
        )
    }
}

export default withRouter(Header);