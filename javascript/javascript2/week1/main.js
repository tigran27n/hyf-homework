// Logs a message to the console to indicate that the script has loaded
console.log("Script loaded");

// Retrieves a list of available products and stores it in a constant variable
const products = getAvailableProducts();

// Renders the first 18 products to an unordered list on the webpage
function renderProducts(products) {
  // Finds the unordered list element in the webpage and stores it in a constant variable
  const productList = document.querySelector('ul');
  
  // Limits the number of products to display to 18
  const maxProducts = 18;

  // Loops through the first 18 products in the array and creates a list item element for each one
  for (let i = 0; i < maxProducts; i++) {
    // Gets the current product from the products array
    const product = products[i];

    // Creates an HTML string to display the product's name, price, and rating
    const productHtml = `
      <h2>${product.name}</h2>
      <span>Price: ${product.price}</span><br>
      <span>Rating: ${product.rating}</span>
    `;

    // Creates a new list item element and sets its innerHTML to the product HTML string
    const productListItem = document.createElement('li');
    productListItem.innerHTML = productHtml;

    // Adds the new list item to the unordered list on the webpage
    productList.appendChild(productListItem);
  } 
}

// Calls the renderProducts function to display the first 18 products on the webpage
renderProducts(products);



