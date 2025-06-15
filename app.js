const products = [
  { name: "Classic Aviators", price: 1299, img: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg" },
  { name: "Trendy Wayfarers", price: 1499, img: "https://images.pexels.com/photos/46709/pexels-photo-46709.jpeg" },
  { name: "Retro Round", price: 1199, img: "https://images.pexels.com/photos/46711/pexels-photo-46711.jpeg" },
  { name: "Sport Shades", price: 1399, img: "https://images.pexels.com/photos/46712/pexels-photo-46712.jpeg" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
document.getElementById('cart-count').textContent = cart.length;

const grid = document.getElementById('products');
products.forEach(p => {
  const div = document.createElement('div');
  div.className = 'product-card';
  div.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button>Add to Cart</button>
  `;
  div.querySelector('button').onclick = () => {
    cart.push(p);
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart-count').textContent = cart.length;
    alert(`${p.name} added to cart`);
  };
  grid.appendChild(div);
});
