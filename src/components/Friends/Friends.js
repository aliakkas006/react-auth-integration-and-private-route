import React, { useEffect, useState } from 'react';
import Friend from '../../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const [friends, setfriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/friends')
            .then(res => res.json())
            .then(data => setfriends(data));
    }, [])
    return (
        <div className="friends-container">
            <h2>I have friends: {friends.length} </h2>
            <div>
                {
                    friends.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    />)
                }
            </div>
        </div>
    );
};

export default Friends;