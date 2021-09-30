import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {

    const { id, name, email, website } = props.friend;

    const history = useHistory();

    const handleFriendClick = () => {
        history.push(`/friend/${id}`);
    }

    return (
        <div style={{
            textAlign: 'center',
            border: '3px solid brown',
            padding: '10px'
        }}>
            <h3> {name}  {id} </h3>
            <p> {email} </p>
            <p> {website} </p>
            {/* First system */}
            <Link to={`/friends/${id}`}>Visit me!</Link>
            <br />
            {/* Second system */}
            <Link to={`/friends/${id}`}>
                <button>Visit me!!</button>
            </Link>
            <br />
            {/* Third system */}
                <button onClick={handleFriendClick}>Visit me!!!</button>
        </div>
    );
};

export default Friend;