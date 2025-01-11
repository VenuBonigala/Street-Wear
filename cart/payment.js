// Function to load cart data and update the payment button with the total amount
function loadCart() {
    // Get the cart items from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const paymentTotalContainer = document.getElementById('paymentTotal');
    let total = 0;

    // Clear the existing cart items
    cartItemsContainer.innerHTML = '';

    // Display each item in the cart
    cart.forEach(item => {
        total += item.price;

        // Create item element for each cart item
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <button class="remove-button" onclick="removeItem(${cart.indexOf(item)})">X</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    // Update the "Pay" button with the total amount
    paymentTotalContainer.innerText = total;

    // Optionally update the total display in the cart section
    const cartTotalContainer = document.getElementById('cartTotal');
    cartTotalContainer.innerHTML = `<h3>Total: ₹${total}</h3>`;
}

// Function to remove an item from the cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1); // Remove item at the given index
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    loadCart(); // Reload cart to reflect changes
}

// Call the loadCart function when the page loads to show cart items
window.onload = loadCart;
