document
  .getElementById("call-weather-btn")
  .addEventListener("click", async () => {
    const response = await fetch("/.netlify/functions/weather");
    const text = await response.text();
    document.getElementById("output").textContent = text;
  });
