// Prints a message to the console 
console.log("Script loaded");

// Gets all the available products and stores them in "allProducts"
const allProducts = getAvailableProducts();

//These are used to filter the list of available products.
function renderFilteredProducts(searchQuery, priceRange) {
  
  const productList = document.querySelector('#products-list');

  // Clears the current list of products 
  productList.innerHTML = '';

  // Filters the products based on the searchbar and price range
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    product.price <= priceRange
  );

  //Creates a list item element for each one
  filteredProducts.forEach(product => {
    //Product's name, price, and rating
    const productHtml = `
      <h2>${product.name}</h2>
      <span>Price: ${product.price}</span><br>
      <span>Rating: ${product.rating}</span>
    `;

    
    const productListItem = document.createElement('li');
    productListItem.innerHTML = productHtml;

 
    productList.appendChild(productListItem);
  });
}


renderFilteredProducts('', 15000);

// Event listeners 
const searchInput = document.querySelector('#search-input');
const priceRangeInput = document.querySelector('#price-range');

searchInput.addEventListener('input', (event) => {
  renderFilteredProducts(event.target.value, priceRangeInput.value);
});

priceRangeInput.addEventListener('input', (event) => {
  // Updates the output 
  document.querySelector('#price-output').innerHTML = event.target.value;

  renderFilteredProducts(searchInput.value, event.target.value);
});



