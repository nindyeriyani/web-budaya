// Data jadwal acara
const events = [
  {
    title: "Pameran Virtual Nusantara",
    date: "10 Desember 2024",
    location: "Virtual",
    description: "Menampilkan foto, video, dan cerita budaya dari seluruh Indonesia",
    imageUrl: "/assets/img-pameran.jpg"
  },
  {
    title: "Upacara Peringatan Hari Nusantara",
    date: "13 Desember 2024",
    location: "Pantai Daerah",
    description: "Upacara peringatan Hari Nusantara dilaksanakan di wilayah sekitar perairan masing-masing daerah",
    imageUrl: "/assets/img-upacara.jpg"
  },
  {
    title: "Karnaval Budaya Laut",
    date: "13 Desember 2024",
    location: "Pantai Daerah",
    description: "Parade kapal tradisional dihiasi seni dan budaya dari berbagai daerah",
    imageUrl: "/assets/img-karnaval.jpg"
  },
  {
    title: "Festival Kuliner Nusantara",
    date: "13 Desember 2024",
    location: "Pantai Daerah",
    description: "Menyajikan makanan khas pesisir seperti ikan bakar, coto Makassar, hingga papeda",
    imageUrl: "/assets/img-kuliner.jpg"
  },
  {
    title: "Pentas Seni Budaya Laut",
    date: "13 Desember 2024",
    location: "Pantai Daerah",
    description: "Pertunjukan tari tradisional yang terinspirasi dari laut, seperti Tari Cakalele",
    imageUrl: "/assets/img-tari.jpeg"
  },
  {
    title: "Penutupan dan Konser Musik",
    date: "13 Desember 2024",
    location: "Pantai Daerah",
    description: "Penutupan acara sekaligus konser Musik Nusantara yang menampilkan musik budaya dari berbagai daerah di Indonesia",
    imageUrl: "/assets/img-konser.jpg"
  }
];

// Fungsi untuk membuat elemen HTML untuk setiap kartu
const createEventCard = ({ title, date, location, description, imageUrl }) => `
  <div class="event-card">
    <img src="${imageUrl}" alt="${title}" class="event-image" />
    <div class="event-info">
      <h3>${title}</h3>
      <span class="event-date">${date}</span>
      <span class="event-location">${location}</span>
      <p>${description}</p>
    </div>
  </div>
`;

// Menambahkan elemen kartu ke kontainer
const eventGrid = document.getElementById("event-grid");
eventGrid.innerHTML = events.map(createEventCard).join("");
