document.querySelector("header").innerHTML += `
<div class="fixed top-0 left-0 w-full z-[9999]">

  <!-- 🔥 ANNOUNCEMENT BAR -->
  <div class="w-full bg-white text-black overflow-hidden py-2 font-bold text-sm tracking-wider">
    <p class="scrolling-text">
      🛍️ SALE NOW LIVE — Get up to 40% Off on Customized T-Shirts! | 🎁 Limited Time Offer — Don’t Miss Out! | 🚀 Free Shipping on Orders Above Rs. 2000! | BUY ONE GET ONE FREE — WHATSAPP US NOW!
    </p>
  </div>

  <!-- 🔝 NAVBAR -->
  <nav class="fixed top-[34px] left-0 w-full bg-black border-b border-gray-700 shadow-md z-[9999]">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img src="assets/images/logo.jpg" alt="Xelex Logo" class="h-10 w-10 rounded-full border border-white">
        <h1 class="text-2xl font-extrabold tracking-widest text-white">XELEX</h1>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-8 text-sm uppercase font-semibold">
        <li><a href="index.html" class="hover:text-gray-400">Home</a></li>
        <li><a href="shop.html" class="hover:text-gray-400">Shop</a></li>
        <li><a href="contact.html" class="hover:text-gray-400">Contact</a></li>
      </ul>

      <!-- Desktop Social Icons -->
      <div class="hidden md:flex items-center gap-6 text-xl">
        <a href="https://www.instagram.com/xelex_brand_75/?igsh=M2MzOGt4d3I1cnhr#" target="blank" class="hover:text-pink-500"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/xellexbrand?rdid=9ntH9pgnNMDPuuEX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FhPf7zdDF%2F#" target="blank" class="hover:text-blue-500"><i class="fa-brands fa-facebook"></i></a>
        <a href="#" class="hover:text-gray-300"><i class="fa-brands fa-tiktok"></i></a>
      </div>

      <!-- Mobile Menu Button -->
      <button id="menu-btn" class="md:hidden text-2xl text-white"><i class="fa-solid fa-bars"></i></button>
    </div>

    <!-- Mobile Dropdown -->
    <div id="mobile-menu" class="hidden flex flex-col items-center bg-black border-t border-gray-700 py-4 space-y-4 md:hidden">
      <a href="index.html" class="hover:text-gray-400">Home</a>
      <a href="shop.html" class="hover:text-gray-400">Shop</a>
      <a href="contact.html" class="hover:text-gray-400">Contact</a>
      
      <div class="flex gap-4 text-xl pt-2">
        <a href="https://www.instagram.com/xelex_brand_75/?igsh=M2MzOGt4d3I1cnhr#" target="_blank" class="hover:text-pink-500"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" class="hover:text-blue-500"><i class="fa-brands fa-facebook"></i></a>
        <a href="#" class="hover:text-gray-300"><i class="fa-brands fa-tiktok"></i></a>
      </div>
    </div>
  </nav>
</div>
`;

// ✅ Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});
