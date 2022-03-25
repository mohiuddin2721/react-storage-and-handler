import React from 'react';
import { addToLocalStorage, removeFromStorage } from '../LoclStorage/LocalStorage';

const SingleFriend = (props) => {
    // console.log(props.data);
    const {name, gender, phone, email, _id} = props.data;

    const addToCart = (_id) => {
        // localStorage.setItem(_id, 1);
        addToLocalStorage(_id);
    };

    // const addToCartWithParam = () => addToCart(_id);


    const removeFromCart = _id => {
        removeFromStorage(_id);
    }

    return (
        <div>
            <h1>Name: {name}</h1>
            <h3>gender: {gender}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Email: {email}</h3>
            <p>Id: {_id}</p>
            <button onClick={() => addToCart(_id)}>Add to cart</button>
            <button onClick={() => removeFromCart(_id)}>Remove</button>
        </div>
    );
};

export default SingleFriend;