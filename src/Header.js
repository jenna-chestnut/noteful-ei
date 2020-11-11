import React from 'react';
import { withRouter } from 'react-router-dom';
import './sweepingstyles/header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 onClick={() => this.props.history.push('/')}>
                    N <br/>
                    O <br/>
                    T <br/>
                    E <br/>
                    F <br/>
                    U <br/>
                    L 
                    </h1>
            </header>
        )
    }
}

export default withRouter(Header);