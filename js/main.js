document.getElementById("call-btn").addEventListener("click", async () => {
  const response = await fetch("/.netlify/functions/hello");
  const text = await response.text();
  document.getElementById("output").textContent = text;
});
