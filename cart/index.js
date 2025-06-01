function loadCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const cartItemsContainer = document.getElementById('cartItems');
      const cartTotalContainer = document.getElementById('cartTotal');
  
      cartItemsContainer.innerHTML = '';
      let total = 0;
  
      cart.forEach((item, index) => {
          total += item.price;
  
          const itemElement = document.createElement('div');
          itemElement.classList.add('cart-item');
          itemElement.innerHTML = `
              <span>${item.name} - ₹${item.price}</span>
              <button class="remove-button" onclick="removeItem(${index})">X</button>
          `;
  
          cartItemsContainer.appendChild(itemElement);
      });
  
      cartTotalContainer.innerHTML = `<h3>Total: ₹${total}</h3>`;
  }
  
  
  function removeItem(index) {
      let cart = JSON.parse(localStorage.getItem('cart'));
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      loadCart();
  }
  
  function checkout() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      if (cart.length === 0) {
          alert("Your cart is empty.");
          return;
      }
      localStorage.setItem('checkoutCart', JSON.stringify(cart));
      window.location.href = "payment.html";
  }
  
  
  // Load the cart when the page loads
  window.onload = loadCart;
  

