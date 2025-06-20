// Helper function to show loading state
function showLoading(outputElement, button) {
  button.disabled = true;
  button.innerHTML = '<span class="loading"></span>Loading...';
  outputElement.textContent = "";
}

// Helper function to reset button state
function resetButton(button, originalText) {
  button.disabled = false;
  button.innerHTML = originalText;
}

// Helper function to display results
function displayResult(outputElement, result, isError = false) {
  if (isError) {
    outputElement.innerHTML = `<div style="color: #dc3545; font-weight: 600;">❌ Error: ${result}</div>`;
  } else {
    outputElement.innerHTML = `<div style="color: #28a745; font-weight: 600;">✅ Success</div><pre>${result}</pre>`;
  }
}

// Weather function handler
document
  .getElementById("call-weather-btn")
  .addEventListener("click", async () => {
    const button = document.getElementById("call-weather-btn");
    const output = document.getElementById("weather-output");
    const originalText = "Get Weather";

    showLoading(output, button);

    try {
      const response = await fetch("/.netlify/functions/weather");
      const text = await response.text();

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${text}`);
      }

      displayResult(output, text);
    } catch (error) {
      displayResult(output, error.message, true);
    } finally {
      resetButton(button, originalText);
    }
  });

// Contacts function handler
document
  .getElementById("get-contacts-btn")
  .addEventListener("click", async () => {
    const button = document.getElementById("get-contacts-btn");
    const output = document.getElementById("contacts-output");
    const originalText = "Get Contacts";

    showLoading(output, button);

    try {
      const response = await fetch("/.netlify/functions/contacts");
      const text = await response.text();

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${text}`);
      }

      displayResult(output, text);
    } catch (error) {
      displayResult(output, error.message, true);
    } finally {
      resetButton(button, originalText);
    }
  });
