fetch("assets/js/designData.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("designContainer");
    container.innerHTML = "";

    data.forEach(category => {
      // Category title
      const title = document.createElement("h2");
      title.className = "text-2xl font-bold text-white mb-4 mt-6";
      title.textContent = category.title;
      container.appendChild(title);

      // Card container
      const grid = document.createElement("div");
      grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";

      category.items.forEach(item => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-2xl shadow-lg overflow-hidden p-4 text-center";

        card.innerHTML = `
          <img src="${item.img}" alt="${item.name}" class="w-48 h-48 object-cover rounded-full mx-auto mb-3">
          <h3 class="text-lg font-semibold">${item.name}</h3>
          <p class="text-gray-600 mb-3">${item.price}</p>
          <div class="flex justify-center gap-3">
            <button class="order-btn bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Order Now</button>
            <button class="cart-btn bg-gray-800 text-white px-4 py-2 rounded hover:bg-black">Add to Cart</button>
          </div>
        `;

        // Add button listeners
        card.querySelector(".order-btn").addEventListener("click", () => {
          // Open order page with product info
          localStorage.setItem("orderItem", JSON.stringify(item));
          window.location.href = "order.html";
        });

        card.querySelector(".cart-btn").addEventListener("click", () => {
          let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
          cart.push(item);
          localStorage.setItem("cartItems", JSON.stringify(cart));
          alert(`${item.name} added to cart!`);
        });

        grid.appendChild(card);
      });

      container.appendChild(grid);
    });
  })
  .catch(error => console.error("Error loading data:", error));
