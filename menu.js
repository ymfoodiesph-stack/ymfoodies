const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxa_rV_SLt4DPaxCiRUghHLYnGFEdhSl4q49BkWTaQd2lwdFV3necxMermlPWZAc1Thg/exec";

async function loadMenu() {
  const res = await fetch(`${SCRIPT_URL}?action=products`);
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
