// Open the door after a short delay
   setTimeout(() => {
  document.body.classList.add('doors-open');
}, 4000);

const productList = document.getElementById("productList");
const addBtn = document.getElementById("addBtn");

// Load products from server
async function loadProducts() {
  try {
    const res = await fetch("/products");
    const products = await res.json();
    productList.innerHTML = "";
    products.forEach(p => {
      const li = document.createElement("li");
      li.textContent = `${p.name} - $${p.price} x ${p.quantity} = $${p.finalPrice}`;
      productList.appendChild(li);
    });
  } catch (err) {
    console.error("Failed to load products:", err);
  }
}

// Add new product
addBtn.addEventListener("click", async () => {
  const name = document.getElementById("productName").value;
  const price = Number(document.getElementById("Price").value);
  const quantity = Number(document.getElementById("quantity").value);

  if (!name || !price || !quantity) return alert("Fill all fields!");

  try {
    const res = await fetch("/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, quantity })
    });
    const product = await res.json();
    console.log("✅ Product Added:", product);
    loadProducts();
  } catch (err) {
    console.error("Failed to add product:", err);
  }
});

// Initial load
loadProducts();







