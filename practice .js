const productNameInput = document.querySelector('#product-name');
const productPriceInput = document.querySelector('#product-price');
const addProductButton = document.querySelector('#add-product');
const cart = document.querySelector('#cart');
const totalPriceSpan = document.querySelector('#total-price');


let totalPrice = 0;

addProductButton.addEventListener('click', () => {
    const name = productNameInput.value;
    const price = productPriceInput.value;

    console.log("Product Name:", name);
    console.log("Raw Price:", price);
    console.log("Parsed Price:", parseFloat(price));
});
