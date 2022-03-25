import React from 'react';
import { add, modulus } from '../Calculate/Calculate';

const Cosmetics = () => {
    const first = 55;
    const second = 65;
    const total = add(first, second)
    const a = 150;
    const b = 50;
    const remaining = modulus(a, b);
    return (
        <div>
            <h1>Cosmetics are coming.....</h1>
            <h3>Total: {total} remaining: {remaining}</h3>
        </div>
    );
};

export default Cosmetics;