const productNameInput = document.querySelector('#product-name');
const productPriceInput = document.querySelector('#product-price');
const addProductButton = document.querySelector('#add-product');
const cart = document.querySelector('#cart');
const totalPriceSpan = document.querySelector('#total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

