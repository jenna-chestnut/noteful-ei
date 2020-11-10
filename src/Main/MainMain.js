import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class MainMain extends React.Component {
    render() {
        const { notes } = this.props.store;

        let mainList = notes.map(item => {
            return <li key={item.id}>
                <Link to={`/note/${item.name}`}>
                    {item.name}
                </Link>
                <button className='delete-note'>DELETE</button>
                <p>Date modified: {moment(item.modified).calendar()}</p>
            </li>
        })

        return (
            <>
                { mainList}
                <button className='add-note'>ADD NOTE</button>
            </>
        )
    }
}

export default MainMain;