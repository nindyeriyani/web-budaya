const pulauData = [
  {
    name: "Pulau Sumatra",
    description: "Budaya Aceh, Minangkabau, Batak, Melayu",
    link: "galeri-budaya-nusantara.html",
    className: "sumatra",
  },
  {
    name: "Pulau Jawa",
    description: "Budaya Jawa, Betawi, Sunda",
    link: "galeri-budaya-nusantara.html",
    className: "jawa",
  },
  {
    name: "Pulau Nusa Tenggara",
    description: "Sasak, Sumba, Flores",
    link: "galeri-budaya-nusantara.html",
    className: "nusa",
  },
  {
    name: "Pulau Kalimantan",
    description: "Dayak, Banjar, Kutai, Melayu, dan Tionghoa",
    link: "galeri-budaya-nusantara.html",
    className: "kalimantan",
  },
  {
    name: "Pulau Sulawesi",
    description: "Bugis, Makassar, Toraja, Minahasa, Gorontalo",
    link: "galeri-budaya-nusantara.html",
    className: "sulawesi",
  },
  {
    name: "Pulau Maluku",
    description: "Ternate, Ambon",
    link: "galeri-budaya-nusantara.html",
    className: "maluku",
  },
  {
    name: "Pulau Papua",
    description: "Asmat, Dani",
    link: "galeri-budaya-nusantara.html",
    className: "papua",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const petaContainer = document.querySelector(".peta-nusantara");

  pulauData.forEach((pulau) => {
    const tooltipContainer = document.createElement("div");
    tooltipContainer.classList.add("tooltip-container");
    
    const icon = document.createElement("img");
    icon.classList.add("icon", "point-icon", pulau.className);
    icon.src = "/assets/icon-point.png";
    icon.alt = `Point ${pulau.name}`;
    tooltipContainer.appendChild(icon);
  
    const tooltip = document.createElement("div");
    tooltip.classList.add(`tooltip-${pulau.className}`);
    tooltip.innerHTML = `
      <h4>${pulau.name}</h4>
      <p>${pulau.description}</p>
      <a href="${pulau.link}" class="tooltip-link">Lihat</a>
    `;
    tooltipContainer.appendChild(tooltip);
    petaContainer.appendChild(tooltipContainer);
  
    // Tambahkan event listener untuk menyimpan data ke localStorage
    tooltip.querySelector(".tooltip-link").addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem(
        "selectedPulau",
        JSON.stringify({ title: pulau.name })
      );
      window.location.href = pulau.link;
    });
  });
  
});

document.querySelectorAll(".tooltip-container").forEach((container) => {
  const tooltip = container.querySelector("div");
  container.addEventListener("mouseenter", () => {
    tooltip.style.display = "block";
  });
  container.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});
