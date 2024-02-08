document.addEventListener('DOMContentLoaded', function () {
    const addToCartForm = document.getElementById('add-to-cart-form');
    const cartItemsList = document.getElementById('cart-items');

    addToCartForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const quantity = parseInt(document.getElementById('quantity').value, 10);
        const productDetails = {
            name: 'Product name',
            price:XX.XX, 
            quantity: quantity,
        };

        addToCart(productDetails);
    });

    function addToCart(product) {
        
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        
        const existingProductIndex = cartItems.findIndex(item => item.name === product.name);

        if (existingProductIndex !== -1) {
            
            cartItems[existingProductIndex].quantity += product.quantity;
        } else {
            
            cartItems.push(product);
        }

        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

       
        updateCartDisplay();
    }

    function updateCartDisplay() {
      
        cartItemsList.innerHTML = '';

        
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - Quantity: ${item.quantity}`;
            cartItemsList.appendChild(listItem);
        });
    }

    
    updateCartDisplay();
});
