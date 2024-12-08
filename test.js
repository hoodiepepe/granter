// Function to detect if the visitor is Googlebot
function isGooglebot() {
  return /Googlebot/.test(navigator.userAgent);
}

// Function to fetch the visitor's country code
async function getCountryCode() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (response.ok) {
      const data = await response.json();
      return data.country_code;
    }
  } catch (error) {
    console.error('Error fetching IP data:', error);
  }
  return null; // Return null if the fetch failed
}

// Main function to replace HTML content based on conditions
async function replaceContentIfNeeded() {
  const countryCode = await getCountryCode();
  
  // Exit early if no injection is required
  if (countryCode !== 'TR' && !isGooglebot()) return;

  // Inject only the body content
  document.body.innerHTML = `
    <h1>Injected Content</h1>
    <p>This content is displayed because you're visiting from Turkey or you're Googlebot.</p>
  `;

  // Optional: Update document title
  document.title = 'Injected Page';
  
  // Optional: Inject some CSS (in case you want full control)
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      color: #333;
      padding: 20px;
    }
    h1 {
      color: #0073e6;
    }
  `;
  document.head.appendChild(style);
}

// Execute the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', replaceContentIfNeeded);
