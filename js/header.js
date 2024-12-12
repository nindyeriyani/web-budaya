
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
