const btn = document.querySelector("#idBtn");

let localStorage = JSON.parse(
  window.localStorage.getItem("localStorage") || "[]"
);