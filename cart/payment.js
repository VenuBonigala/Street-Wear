function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const paymentTotalContainer = document.getElementById('paymentTotal');
    let total = 0;

    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        total += item.price;
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <button class="remove-button" onclick="removeItem(${cart.indexOf(item)})">X</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
    paymentTotalContainer.innerText = total;
    const cartTotalContainer = document.getElementById('cartTotal');
    cartTotalContainer.innerHTML = `<h3>Total: ₹${total}</h3>`;
}
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}
window.onload = loadCart;
