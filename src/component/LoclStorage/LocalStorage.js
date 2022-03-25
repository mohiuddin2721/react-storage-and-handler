// use local storage to manage cart data
const addToLocalStorage = id => {
    let shoppingCart;

    // get shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }

    // add quantity
    // localStorage.setItem(id, 1);
    // const quantity = localStorage.getItem(id);
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // const newQuantity = parseInt(quantity) + 1;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromStorage = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

export {addToLocalStorage, removeFromStorage};