import React, { useEffect, useState } from 'react';
import SingleFriend from '../SingleFriend/SingleFriend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect( () => 
        fetch('data.json')
        .then(res => res.json())
        .then(data => setFriends(data))
    , [])
    return (
        <div>
            <h3>My friends list: {friends.length}</h3>
            {
                friends.map(friend => <SingleFriend 
                    key={friend._id} 
                    data={friend}
                    ></SingleFriend>)
            }
        </div>
    );
};

export default Friends;