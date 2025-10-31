document.addEventListener("DOMContentLoaded", () => {
  // ✅ Fetch JSON Data for New Arrivals
  fetch("assets/js/newArrivals.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("new-arrivals");
      if (container) {
      container.innerHTML = data
  .map(
    (item) => `
     <div class="flip-card">
              <div class="flip-inner">
                <div class="flip-front bg-black border border-white rounded-2xl flex flex-col items-center justify-center p-6">
                  <img src="${item.image}" 
     class="w-48 h-48 rounded-xl mb-4 border-2 border-white object-cover transform transition-transform duration-500 hover:scale-105" 
     alt="${item.name}">


                  <h3 class="text-xl font-semibold uppercase text-white">${item.name}</h3>
                  <div class="mt-2">
  <span class="text-gray-400 line-through mr-2">${item.oldPrice}</span>
  <span class="text-white font-semibold">${item.newPrice}</span>
</div>
                </div>
                <div class="flip-back bg-white text-black rounded-2xl flex flex-col justify-center items-center p-6">
                  <p class="mb-4 text-center">Exclusive ${item.name} — perfect for your style.</p>
                  <div class="flex gap-3">
                    <!-- ✅ Added data-product + class="order-btn" -->
                    <a href="#" class="order-btn bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 transition" data-product="${item.name}">Order Now</a>
                  </div>
                </div>
              </div>
            </div>
          `).join('');
        }
      })
    .catch(error => console.error("❌ Failed to load New Arrivals:", error));

  // ✅ Popup logic
  const modal = document.getElementById("orderModal");
  const closeModal = document.getElementById("closeModal");
  const orderForm = document.getElementById("orderForm");
  const productTypeInput = document.getElementById("type");

  // Open modal when “Order Now” clicked
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("order-btn")) {
      e.preventDefault();
      const productName = e.target.getAttribute("data-product");
      productTypeInput.value = productName;
      modal.classList.remove("hidden");
    }
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // ✅ WhatsApp order send logic
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const product = document.getElementById("type").value.trim();
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;
    const notes = document.getElementById("notes").value.trim();

    const phoneNumber = "923162639541"; // 🔹 Replace with your WhatsApp number
    const message = `🛍️ *New Order*\n\n👤 Name: ${name}\n👕 Product: ${product}\n📏 Size: ${size}\n🔢 Quantity: ${quantity}\n📝 Notes: ${notes}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    modal.classList.add("hidden");
    orderForm.reset();
  });
});
