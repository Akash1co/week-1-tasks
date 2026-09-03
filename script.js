// ==========================================
// 1. REFACTORING ES5 TO ES6+ & DESTRUCTURING
// ==========================================

// Dataset: List of items
const products = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics", inStock: true },
  { id: 2, name: "Phone", price: 800, category: "Electronics", inStock: false },
  { id: 3, name: "Desk Chair", price: 150, category: "Furniture", inStock: true },
  { id: 4, name: "Notebook", price: 10, category: "Stationery", inStock: true },
  { id: 5, name: "Headphones", price: 100, category: "Electronics", inStock: true }
];

// Object Destructuring with Template Literals
const { name, price, category } = products[0];
console.log(`Featured product: ${name} costs $${price} and belongs to ${category}.`);

// Array Destructuring
const [firstProduct, secondProduct] = products;
console.log(`Top picks: ${firstProduct.name} and ${secondProduct.name}`);


// ==========================================
// 2. ARRAY METHODS: filter(), map(), reduce()
// ==========================================

// filter(): Get items that are currently in stock
const availableProducts = products.filter(item => item.inStock);
console.log("In-stock items:", availableProducts);

// map(): Create a list of formatted product descriptions
const productSummaries = products.map(item => `${item.name} - $${item.price}`);
console.log("Product Summaries:", productSummaries);

// reduce(): Calculate the total price of all products
const totalPrice = products.reduce((accumulator, item) => accumulator + item.price, 0);
console.log(`Total Inventory Value: $${totalPrice}`);


// ==========================================
// 3. INTERACTIVE COMPONENT (EVENT LISTENER)
// ==========================================

// Simple interactive counter component
let count = 0;

// Look for elements in the HTML (ensure these IDs exist or add fallback logging)
const counterDisplay = document.querySelector("#counter-text");
const actionBtn = document.querySelector("#counter-btn");

if (actionBtn && counterDisplay) {
  actionBtn.addEventListener("click", () => {
    count += 1;
    counterDisplay.textContent = `Count: ${count}`;
  });
}