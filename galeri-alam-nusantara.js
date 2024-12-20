// Data budaya
const budayaData = [
  {
    title: "Pulau Sumatra",
    description: "Menawarkan pesona alam, kekayaan budaya, dan keunikan tradisi yang tak tertandingi. Klik gambar ini untuk menjelajahi galeri keindahan dan kekayaan Pulau Sumatra lebih dekat",
    imageUrl: "https://unsplash.com/photos/EbYjuBaIrwE/download?force=true&w=1920",
    link: "/pages/galeri-alam-nusantara.html"
  },
  {
    title: "Pulau Jawa",
    description: "Dari pegunungan yang menjulang hingga pantai yang mempesona, beragam keindahan alam dan budaya yang kaya. Klik gambar ini untuk mengeksplorasi keajaiban alam Pulau Jawa",
    imageUrl: "https://unsplash.com/photos/Yx5qQKEaD_s/download?force=true&w=1920",
    link: "/pages/galeri-alam-nusantara.html"
  },
  {
    title: "Pulau Kalimantan",
    description: "Hutan tropis yang lebat, sungai-sungai besar, dan fauna langka menjadikan Kalimantan sebagai rumah bagi keanekaragaman hayati. Klik untuk melihat lebih dalam kekayaan alam Pulau Kalimantan",
    imageUrl: "https://i.misteraladin.com/blog/2015/09/28091844/taman-nasional-tanjung-puting-1.jpg",
    link: "/pages/galeri-alam-nusantara.html"
  },
  {
    title: "Pulau Sulawesi",
    description: "Dengan keindahan laut yang menakjubkan dan budaya yang kaya, Sulawesi menyajikan panorama alam yang menawan. Jelajahi lebih banyak tentang alam Sulawesi",
    imageUrl: "https://unsplash.com/photos/_71JqsBewR4/download?force=true&w=1920g",
    link: "/pages/galeri-alam-nusantara.html"
  },
  {
    title: "Kepulauan Maluku",
    description: "Keindahan alam laut dan pulau-pulau yang eksotis menjadikan Maluku tempat yang tak terlewatkan untuk dijelajahi. Klik gambar ini untuk menemukan pesona alam Maluku",
    imageUrl: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/379/2024/01/06/Ilustrasi-keindahan-tempat-wisata-bawah-laut-di-Maluku-2935618087.jpg",
    link: "/pages/galeri-alam-nusantara.html"
  },
  {
    title: "Nusa Tenggara",
    description: "Dikenal dengan savana yang luas dan pantai-pantai indah, Nusa Tenggara menawarkan pemandangan alam yang luar biasa. Klik untuk menelusuri lebih lanjut keindahan alam Nusa Tenggara",
    imageUrl: "https://unsplash.com/photos/B44J90o9Pow/download?force=true&w=1920",
    link: "/pages/galeri-alam-nusantara.html"
  },
  {
    title: "Pulau Papua",
    description: "menawarkan kekayaan alam yang memukau dengan hutan tropis, gunung, dan pantai yang belum banyak dijelajahi. Temukan keindahan alam Papua lebih dalam",
    imageUrl: "https://unsplash.com/photos/u3rvGw8Yud4/download?force=true&w=1920",
    link: "/pages/galeri-alam-nusantara.html"
  }
];

// Fungsi untuk membuat elemen kartu
const createCard = ({ title, description, imageUrl, link }) => `
  <div class="image-card">
    <a href="${link}">
      <img src="${imageUrl}" alt="${title}" class="card-image" />
      <div class="card-info">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    </a>
  </div>
`;

// Menambahkan kartu ke dalam kontainer
const photosItem = document.getElementById("photos-item");
photosItem.innerHTML = budayaData.map(createCard).join("");

// Tambahkan event listener pada setiap kartu
photosItem.addEventListener("click", (event) => {
  const card = event.target.closest(".image-card");
  if (card) {
    const title = card.querySelector("h3").textContent; // Ambil judul pulau
    const description = card.querySelector("p").textContent; // Ambil deskripsi
    const imageUrl = card.querySelector(".card-image").src; // Ambil URL gambar

    // Simpan data ke localStorage
    localStorage.setItem(
      "selectedPulau",
      JSON.stringify({
        title,
        description,
        imageUrl,
      })
    );

    // Arahkan ke halaman galeri
    window.location.href = "/pages/galeri-alam-nusantara.html";
  }
});

