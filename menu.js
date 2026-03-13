const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxa_rV_SLt4DPaxCiRUghHLYnGFEdhSl4q49BkWTaQd2lwdFV3necxMermlPWZAc1Thg/exec";

async function loadMenu() {
  const res = await fetch(`// YM Foodies Menu JS — live products
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxa_rV_SLt4DPaxCiRUghHLYnGFEdhSl4q49BkWTaQd2lwdFV3necxMermlPWZAc1Thg/exec";

// Load products from Google Apps Script
async function loadMenu() {
  const container = document.getElementById("menu-container");
  if (!container) return;

  try {
    const res = await fetch(`${SCRIPT_URL}?action=products`);
    const products = await res.json();

    if (!products || products.length === 0) {
      container.innerHTML = "<p>No products available.</p>";
      return;
    }

    container.innerHTML = ""; // clear previous content

    products.forEach(p => {
      // Optional: disable button if stock = 0
      const disabled = Number(p.Stock) <= 0 ? "disabled" : "";

      container.innerHTML += `
        <div class="menu-card">
          <h3>${p["Product Name"]} (${p.Variant})</h3>
          <p>₱${p.Selling_Price}</p>
          <button ${disabled} onclick="addToCart('${p.ProductID}','${p['Product Name']}',${p.Selling_Price})">
            ${disabled ? "Sold Out" : "Add to Cart"}
          </button>
        </div>
      `;
    });

  } catch (err) {
    console.error("Error loading menu:", err);
    container.innerHTML = "<p>Error loading products. Please try again later.</p>";
  }
}

// Add to cart function (stores in localStorage)
function addToCart(id, name, price) {
  let cart = JSON.parse(localStorage.getItem("ymCart")) || [];
  const existing = cart.find(item => item.id === id);

  if (existing) existing.qty++;
  else cart.push({ id, name, price, qty: 1 });

  localStorage.setItem("ymCart", JSON.stringify(cart));
  alert(`${name} added to cart`);
}

// Initialize menu on DOM ready
document.addEventListener("DOMContentLoaded", loadMenu);`);
  const products = await res.json();
  const container = document.getElementById("menu-container");

  products.forEach(p => {
    container.innerHTML += `
      <div class="menu-card">
        <h3>${p["Product Name"]} (${p.Variant})</h3>
        <p>₱${p.Selling_Price}</p>
        <button onclick="addToCart('${p.ProductID}', '${p['Product Name']}', ${p.Selling_Price})">Add to Cart</button>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", loadMenu);
