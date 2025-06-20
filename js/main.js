document
  .getElementById("call-weather-btn")
  .addEventListener("click", async () => {
    const response = await fetch("/.netlify/functions/weather");
    const text = await response.text();
    document.getElementById("weather-output").textContent = text;
  });

document
  .getElementById("get-contacts-btn")
  .addEventListener("click", async () => {
    const response = await fetch("/.netlify/functions/contacts");
    const text = await response.text();
    document.getElementById("contacts-output").textContent = text;
  });
