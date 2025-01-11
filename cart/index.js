function loadCart() {
      // Get the cart items from local storage
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const cartItemsContainer = document.getElementById('cartItems');
      const cartTotalContainer = document.getElementById('cartTotal');
  
      // Display each item in the cart
      cartItemsContainer.innerHTML = '';
      let total = 0;
  
      cart.forEach((item, index) => {
          total += item.price;
  
          // Create item element
          const itemElement = document.createElement('div');
          itemElement.classList.add('cart-item');
          itemElement.innerHTML = `
              <span>${item.name} - ₹${item.price}</span>
              <button class="remove-button" onclick="removeItem(${index})">X</button>
          `;
  
          cartItemsContainer.appendChild(itemElement);
      });
  
      // Display the total
      cartTotalContainer.innerHTML = `<h3>Total: ₹${total}</h3>`;
  }
  
  
  function removeItem(index) {
      let cart = JSON.parse(localStorage.getItem('cart'));
      cart.splice(index, 1); // Remove item at the given index
      localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
      loadCart(); // Reload cart to reflect changes
  }
  
  function checkout() {
      // Save cart data to localStorage (if it's not already there)
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
      // If cart is empty, alert user
      if (cart.length === 0) {
          alert("Your cart is empty.");
          return;
      }
  
      // Save cart items and total price to localStorage
      localStorage.setItem('checkoutCart', JSON.stringify(cart));
  
      // Redirect to the payment page
      window.location.href = "payment.html";
  }
  
  
  // Load the cart when the page loads
  window.onload = loadCart;
  

