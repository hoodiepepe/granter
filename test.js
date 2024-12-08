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
  return null;
}

// Main function to replace HTML content based on conditions
async function replaceContentIfNeeded() {
  const countryCode = await getCountryCode();
  if (countryCode === 'TR' || isGooglebot()) {
    document.documentElement.innerHTML = `
      <html lang="en">
      <head>
        <title>Injected Page</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color: #333;
            padding: 20px;
          }
          h1 {
            color: #0073e6;
          }
        </style>
      </head>
      <body>
        <h1>Injected Content</h1>
        <p>This content is displayed because you're visiting from Turkey or you're Googlebot.</p>
      </body>
      </html>
    `;
  }
}

// Execute the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', replaceContentIfNeeded);
