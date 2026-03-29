// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

// Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  alert(item + " added to cart!");
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;
}

function showCart() {
  alert("Cart Items:\n" + cart.join(", "));
}

updateCart();

// Notification
function notifyUser() {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("🔥 Big Sale!", {
        body: "Up to 50% OFF on all items!"
      });
    }
  });
}

// Offline/Online status
window.addEventListener("offline", () => {
  document.getElementById("status").innerText = "⚠️ You are offline";
});

window.addEventListener("online", () => {
  document.getElementById("status").innerText = "✅ Back Online";
});