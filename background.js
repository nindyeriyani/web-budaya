// Daftar gambar background
const backgrounds = [
  'bg-hero1.jpg',
  'bg-hero2.jpg',
  'bg-hero3.jpg',
  'bg-hero4.jpg',
  'bg-footer.jpg',
];

let currentIndex = 0; // Indeks gambar saat ini
const heroSection = document.querySelector('.hero');

// Fungsi untuk mengganti background
function changeBackground() {
  currentIndex = (currentIndex + 1) % backgrounds.length; // Ganti ke gambar berikutnya
  heroSection.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
}

// Ganti background setiap 5 detik
setInterval(changeBackground, 5000);
