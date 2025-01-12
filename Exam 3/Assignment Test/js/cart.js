let cart = [];

// Add item to cart
const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1; // Update quantity
    } else {
        cart.push({ ...product, quantity: 1 }); // Add new item
    }

    updateCartUI();
};

// Update the cart UI
const updateCartUI = () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
            <button onclick="changeQuantity(${item.id}, 1)">+</button>
            <button onclick="changeQuantity(${item.id}, -1)">-</button>
        `;
        cartItemsContainer.appendChild(itemElement);

        total += item.price * item.quantity;
    });

    cartTotalElement.innerHTML = `Total: $${total.toFixed(2)}`;
};

// Remove item from cart
const removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
};

// Change item quantity
const changeQuantity = (productId, amount) => {
    const product = cart.find(item => item.id === productId);

    if (product && product.quantity + amount > 0) {
        product.quantity += amount;
    }

    updateCartUI();
};

// Clear all items from cart
document.getElementById('clear-cart').onclick = () => {
    cart = [];
    updateCartUI();
};

// Handle checkout button
document.getElementById('checkout').onclick = () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to checkout!');
        // Redirect or open checkout page here
    }
};

