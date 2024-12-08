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
  
  // ** Early exit to avoid touching the page if conditions are not met **
  if (countryCode !== 'TR' && !isGooglebot()) return;

  // ** Clear only the body content but avoid breaking the page **
  const bodyContent = document.body.innerHTML; // Backup original content
  document.body.innerHTML = ''; // Clear the body but keep <head> intact

  // ** Create new container for the new content **
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <h1>Injected Content</h1>
    <p>This content is displayed because you're visiting from Turkey or you're Googlebot.</p>
  `;

  // ** Optional: Add some styles using inline CSS (No changes to <head>) **
  wrapper.style.fontFamily = 'Arial, sans-serif';
  wrapper.style.backgroundColor = '#f0f0f0';
  wrapper.style.color = '#333';
  wrapper.style.padding = '20px';
  wrapper.style.textAlign = 'center';

  const title = document.createElement('h1');
  title.textContent = 'Injected Page';
  title.style.color = '#0073e6';
  wrapper.appendChild(title);

  document.body.appendChild(wrapper);

  // If you want to restore the original content if needed, it's available as "bodyContent"
  // For example, if you want to revert, you can do: 
  // document.body.innerHTML = bodyContent;
}

// Execute the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', replaceContentIfNeeded);
