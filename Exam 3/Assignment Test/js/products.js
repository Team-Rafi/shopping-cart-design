const products = [
    {
        id: 1,
        name: 'T- Shirt',
        description: 'Cotton t shirt for men',
        price: 25.99,
        image: "image/2.jpg",
    },
    {
        id: 2,
        name: 'Shirt',
        description: 'This is a shirt for man.',
        price: 40.99,
        image: 'assets/images/product2.jpg',
    },
    // {
    //     id: 3,
    //     name: 'Product 3',
    //     description: 'This is a shirt for man.',
    //     price: 15.99,
    //     image: 'assets/images/product3.jpg',
    // },
    // Add more products as needed
];

const displayProducts = () => {
    const productListElement = document.getElementById('product-list');
    productListElement.innerHTML = '';

    products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productListElement.appendChild(productElement);
    });
};

window.onload = displayProducts;
