function calculateTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        total += item.price * item.quantity;
    }
    return total;
}

let shoppingCart = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 4 }
];
console.log(calculateTotal(shoppingCart)); // Output: 40