import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const FriendDetail = () => {

    const { friendId } = useParams();

    const history = useHistory();

    // Load data
    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);

    const handleClick = () => {
        history.push('/friends');
    }

    return (
        <div>
            <h3>Friend detail 0f: {friendId} </h3>
            <h4>Name: {friend.name} </h4>
            <p>Email: {friend.email} </p>
            <p>Website: {friend.website} </p>
            <p>Works at: {friend.company?.name} </p>

            <button onClick={handleClick}></button>

        </div>
    );
};

export default FriendDetail;

/* 

const history = useHistory();

const handleClick = () => {
        history.push('/friends');
    }

<button onClick={handleClick}></button>

*/