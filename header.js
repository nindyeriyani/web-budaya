
  // Event Listener untuk Scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    // Tambahkan class 'scrolled' jika scroll lebih dari 50px
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Ambil elemen hamburger menu dan navigasi
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navMenu = document.getElementById("nav-menu");

  // Tambahkan event listener untuk klik pada hamburger menu
  hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active"); // Toggle kelas "active"
  });

