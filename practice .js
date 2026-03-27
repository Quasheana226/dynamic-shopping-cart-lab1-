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
  // Find the list item (li) that contains the button we clicked
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  
  // Subtract the price from the total and remove the element
  updateTotalPrice(price);
  item.remove();
}

// ---  ADD PRODUCTS ---
addProductButton.addEventListener('click', () => {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  // Making  sure inputs aren't empty or invalid
  if (name === "" || isNaN(price) || price <= 0) {
    alert("Please enter a valid product name!");
    return; // Stop the function here
  }

  //  Create new list item (li)
  const listItem = document.createElement('li');
  
  // Store the price in a dataset so we can find it easily when deleting
  listItem.dataset.price = price;
  
  // Set the text for the item
  listItem.innerHTML = `
    ${name} - $${price.toFixed(2)} 
    <button class="remove-btn">Remove</button>
  `;

  // Add the remove button to the new button
  listItem.querySelector('.remove-btn').addEventListener('click', removeItem);

  // Add the item to the cart and update the total
  cart.appendChild(listItem);
  updateTotalPrice(price);

  //  Clearing the inputs for the next item
  productNameInput.value = "";
  productPriceInput.value = "";
});