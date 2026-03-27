const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

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

// Adding products 
addProductButton.addEventListener('click', () => {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  //making sure that the input is empty or valid 
  if (name === "" || isNaN(price) || price <= 0) {
    alert("Please enter valid product name!");
    return; // function should stop here
  }

  const listItem = document.createElement('li');

  // storing the price to the data set
  listItem.dataset.price = price;

  // setting the price for the product item
  listItem.innerHTML = `
    ${name} - $${price.toFixed(2)}
    <button class="remove-btn">Remove</button>`;

  //add item and update total 
  cart.appendChild(listItem);
  updateTotalPrice(price);

  productNameInput.value = "";
  productPriceInput.value = "";

}); // closes addProductButton listener

// cart listener lives outside and on its own
cart.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-btn')) {
    removeItem(event);
  }
}); // closes cart listener