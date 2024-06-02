const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('toggle');
});

function orderNow() {
  const phoneNumber = "1234567890"; // Ganti dengan nomor WhatsApp tujuan
  const message = encodeURIComponent("Halo, saya ingin memesan produk Anda.");
  window.open(
    `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`,
    "_blank"
  );
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-J1PSPCEVFS');

