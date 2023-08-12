const products = [
    { id: 1, name: "IPhone 14 pro max", category: "Electronics", price: 999,image:"https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg" },
    { id: 2, name: "Lee copper", category: "Clothing", price: 50 ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpLO76GCBPeD6QVnSUBnodFAPhvAd5_WGZQ&usqp=CAU"},
    { id: 3, name: "Royal Kennel", category: "Groceries", price: 10,image:"https://www.nappets.com/wp-content/uploads/2022/10/32-01.jpg" },
    { id: 4, name: "ASUS ROG Strix G15", category: "Electronics", price: 1000,image:"https://m.media-amazon.com/images/I/51wQ18eozvL._SX679_.jpg" },
    { id: 5, name: "Blackberry Textured Mandarin Collar Shirt In Mid Blue (Volt)", category: "Clothing", price: 20,image:"https://blackberrys.com/cdn/shop/products/Textured_Casual_Shirt_In_Mid_Blue_Volt-USMU1275B2NA22SN-image1.jpg?v=1687873367" },
    { id: 6, name: "Chocopologie", category: "Groceries", price: 10,image:"https://images.cnbctv18.com/wp-content/uploads/2023/07/Chocopologie.jpg?impolicy=website&width=550&height=300" },
    { id: 7, name: "SONY WH-1000XM5 Bluetooth Headset ", category: "Electronics", price: 150 , image:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669124939/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/262565_0_gsz0tr.png?tr=w-360"},
    { id: 8, name: "Philipp Plein", category: "Clothing", price: 40 ,image:"https://imagescdn.thecollective.in/img/app/product/8/862667-10195778.jpg?"},
    { id: 9, name: "House of Saffron 50grams Afghani Kesar Pure, Natural and Finest Grade Keshar", category: "Groceries", price: 6 ,image:"https://m.media-amazon.com/images/I/81MLXCSlD-L._SX679_PIbundle-50,TopRight,0,0_SX679SY445SH20_.jpg"},
    { id: 10, name: "Apple 2022 12.9-inch iPad Pro", category: "Electronics", price: 300,image:"https://m.media-amazon.com/images/I/81hAx31maUL._SX679_.jpg" },
  ];
  
  const productsContainer = document.getElementById("products");
  const cartIcon = document.getElementById("cart-icon");
  const cartItemsContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  
  
    function displayProducts(filteredProducts = products) {
      productsContainer.innerHTML = "";
      filteredProducts.forEach(product => {
          const productCard = document.createElement("div");
          productCard.classList.add("product-card");
          productCard.innerHTML = `
              <img src="${product.image}" alt="${product.name}" class="product-image">    
              <h3>${product.name}</h3>
              <p>${product.category}</p>
              <p>$${product.price}</p>
              <button onclick="addToCart(${product.id}, ${product.price})">Add to Cart</button>
          `;
          productsContainer.appendChild(productCard);
      });
  }
  
  
  let cartItems = [];
  let total = 0;
  
  function addToCart(productId, price) {
    cartItems.push({ id: productId, price: price });
    total += price;
    updateCart();
  }
  
  function updateCart() {
    cartItemsContainer.innerHTML = "";
    cartItems.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${findProductById(item.id).name} - $${item.price}`;
        cartItemsContainer.appendChild(cartItem);
    });
    totalElement.textContent = `Total: $${total}`;
  }
  
  function findProductById(id) {
    return products.find(product => product.id === id);
  }
  
  cartIcon.addEventListener("click", () => {
    document.getElementById("cart").classList.toggle("visible");
  });
  
  displayProducts();
  
  function updateCart() {
    cartItemsContainer.innerHTML = "";
    cartItems.forEach(item => {
        const cartItem = document.createElement("li");
        const product = findProductById(item.id);
        cartItem.innerHTML = `
            <span>${product.name} - $${item.price}</span>
            <button class="remove-btn" onclick="removeFromCart(${item.id}, ${item.price})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    totalElement.textContent = `Total: $${total}`;
  }
  
  function removeFromCart(productId, price) {
    const index = cartItems.findIndex(item => item.id === productId);
    if (index !== -1) {
        cartItems.splice(index, 1);
        total -= price;
        updateCart();
    }
  }
  
  function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
  }
  
  function clearFilter() {
    displayProducts();
  }
  const billingForm = document.getElementById("billing-form");
  
  billingForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const address = document.getElementById("address").value;
  
      if (!name || !email || !address) {
          alert("Please fill in all billing details.");
          return;
      }
      alert("Order placed successfully!");
      billingForm.reset();
  });