function addToCart(productName, productPrice) {
      // Get the existing cart from local storage or initialize a new array
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
      // Add the new product to the cart
      cart.push({ name: productName, price: productPrice });
  
      // Save the updated cart to local storage
      localStorage.setItem('cart', JSON.stringify(cart));
  
      alert(`${productName} has been added to the cart!`);
  }





  