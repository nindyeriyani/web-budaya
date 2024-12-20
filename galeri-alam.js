document.addEventListener("DOMContentLoaded", () => {
  // Ambil data dari localStorage
  const selectedPulau = JSON.parse(localStorage.getItem("selectedPulau"));

  if (selectedPulau) {
    const header = document.querySelector("header");
    const gallerySection = document.querySelector(".gallery-section");

    // Perbarui konten header
    header.querySelector(
      "h1"
    ).textContent = `Jelajahi keindahan alam dari ${selectedPulau.title}`;

    // Ganti data galeri berdasarkan pulau yang dipilih
    const galleryDataMap = {
      // ------------------------------------ SUMATERA ------------------------------------
      "Pulau Sumatra": [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sumatran_Tiger_Berlin_Tierpark.jpg",
          alt: "Harimau Sumatera",
        },
        {
          src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhH2co830rjMEuMRAtrG-mYPJJqBuIT_qeSWnMZuJoLUrqAGbhfMW9PaONdramSdRoN1eBlGxMNEmZrrI81d9QvH3_Z8R2cr36EzAgkmq7I59zC9ZKQgNApywmEhubGXvqL0JcRLDKq22Q/w1200-h675-p-k-no-nu/Hutan+tropis+Sumatera1.jpg",
          alt: "Hutan Hujan Tropis",
        },
        {
          src: "https://awsimages.detik.net.id/community/media/visual/2024/01/06/gajah-sumatera_169.jpeg?w=1200",
          alt: "Gajah Sumatera",
        },
        {
          src: "https://asset.kompas.com/crops/cv5nh_NNfOEmxiXuKv1Fq_c2VHA=/7x0:1000x662/750x500/data/photo/2022/01/25/61ef9ca74ad26.jpg",
          alt: "Bunga Rafflesia",
        },
        {
          src: "https://media.tampang.com/tm_images/article/desain-tanpae75m1mo60oj1ikyb.jpg",
          alt: "Badak Sumatera",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Indonesia_-_Lake_Toba_%2826224127503%29.jpg",
          alt: "Danau Toba",
        },
        {
          src: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/08/12/FotoJet-2023-08-12T143306476-748597235.jpg",
          alt: "Burung Kuau Raja",
        },
        {
          src: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/108/2023/08/21/Gunung-Kerinci-terlihat-dari-danau-gunung-7-ig-ghaardi-4081953553.jpg",
          alt: "Gunung Kerinci",
        },
        {
          src: "https://akcdn.detik.net.id/visual/2019/06/19/399b7912-8870-4c3c-89f7-6fa079880ed1_169.jpeg?w=650",
          alt: "Orangutan Sumatera",
        },
        {
          src: "https://1.bp.blogspot.com/-hOkBEgc8hdM/WAEDUkmyEaI/AAAAAAAABYg/0y_RETfHDXoJiID9l-f1wJuL8Hqjm7uhgCLcB/s1600/pantai-lampuuk-sore-hari.jpg",
          alt: "Pantai Lampuuk",
        },
        {
          src: "https://d1r9hss9q19p18.cloudfront.net/uploads/2019/11/DSC02158-1.jpg",
          alt: "Kopi Gayo",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/f/f8/AIR_TERJUN_SIPISO-PISO_%28SUMUT%29.jpg",
          alt: "Air Terjun Sipiso Sipiso",
        },
      ],

      // ------------------------------------ JAWA ------------------------------------
      "Pulau Jawa": [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sumatran_Tiger_Berlin_Tierpark.jpg",
          alt: "Harimau Sumatera",
        },
        {
          src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhH2co830rjMEuMRAtrG-mYPJJqBuIT_qeSWnMZuJoLUrqAGbhfMW9PaONdramSdRoN1eBlGxMNEmZrrI81d9QvH3_Z8R2cr36EzAgkmq7I59zC9ZKQgNApywmEhubGXvqL0JcRLDKq22Q/w1200-h675-p-k-no-nu/Hutan+tropis+Sumatera1.jpg",
          alt: "Hutan Hujan Tropis",
        },
        {
          src: "https://awsimages.detik.net.id/community/media/visual/2024/01/06/gajah-sumatera_169.jpeg?w=1200",
          alt: "Gajah Sumatera",
        },
        {
          src: "https://asset.kompas.com/crops/cv5nh_NNfOEmxiXuKv1Fq_c2VHA=/7x0:1000x662/750x500/data/photo/2022/01/25/61ef9ca74ad26.jpg",
          alt: "Bunga Rafflesia",
        },
        {
          src: "https://media.tampang.com/tm_images/article/desain-tanpae75m1mo60oj1ikyb.jpg",
          alt: "Badak Sumatera",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Indonesia_-_Lake_Toba_%2826224127503%29.jpg",
          alt: "Danau Toba",
        },
        {
          src: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/08/12/FotoJet-2023-08-12T143306476-748597235.jpg",
          alt: "Burung Kuau Raja",
        },
        {
          src: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/108/2023/08/21/Gunung-Kerinci-terlihat-dari-danau-gunung-7-ig-ghaardi-4081953553.jpg",
          alt: "Gunung Kerinci",
        },
        {
          src: "https://akcdn.detik.net.id/visual/2019/06/19/399b7912-8870-4c3c-89f7-6fa079880ed1_169.jpeg?w=650",
          alt: "Orangutan Sumatera",
        },
        {
          src: "https://1.bp.blogspot.com/-hOkBEgc8hdM/WAEDUkmyEaI/AAAAAAAABYg/0y_RETfHDXoJiID9l-f1wJuL8Hqjm7uhgCLcB/s1600/pantai-lampuuk-sore-hari.jpg",
          alt: "Pantai Lampuuk",
        },
        {
          src: "https://d1r9hss9q19p18.cloudfront.net/uploads/2019/11/DSC02158-1.jpg",
          alt: "Kopi Gayo",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/f/f8/AIR_TERJUN_SIPISO-PISO_%28SUMUT%29.jpg",
          alt: "Air Terjun Sipiso Sipiso",
        },
      ],

      // ------------------------------------ KALIMANTAN ------------------------------------
      "Pulau Kalimantan": [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sumatran_Tiger_Berlin_Tierpark.jpg",
          alt: "Harimau Sumatera",
        },
        {
          src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhH2co830rjMEuMRAtrG-mYPJJqBuIT_qeSWnMZuJoLUrqAGbhfMW9PaONdramSdRoN1eBlGxMNEmZrrI81d9QvH3_Z8R2cr36EzAgkmq7I59zC9ZKQgNApywmEhubGXvqL0JcRLDKq22Q/w1200-h675-p-k-no-nu/Hutan+tropis+Sumatera1.jpg",
          alt: "Hutan Hujan Tropis",
        },
        {
          src: "https://awsimages.detik.net.id/community/media/visual/2024/01/06/gajah-sumatera_169.jpeg?w=1200",
          alt: "Gajah Sumatera",
        },
        {
          src: "https://asset.kompas.com/crops/cv5nh_NNfOEmxiXuKv1Fq_c2VHA=/7x0:1000x662/750x500/data/photo/2022/01/25/61ef9ca74ad26.jpg",
          alt: "Bunga Rafflesia",
        },
        {
          src: "https://media.tampang.com/tm_images/article/desain-tanpae75m1mo60oj1ikyb.jpg",
          alt: "Badak Sumatera",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Indonesia_-_Lake_Toba_%2826224127503%29.jpg",
          alt: "Danau Toba",
        },
        {
          src: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/08/12/FotoJet-2023-08-12T143306476-748597235.jpg",
          alt: "Burung Kuau Raja",
        },
        {
          src: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/108/2023/08/21/Gunung-Kerinci-terlihat-dari-danau-gunung-7-ig-ghaardi-4081953553.jpg",
          alt: "Gunung Kerinci",
        },
        {
          src: "https://akcdn.detik.net.id/visual/2019/06/19/399b7912-8870-4c3c-89f7-6fa079880ed1_169.jpeg?w=650",
          alt: "Orangutan Sumatera",
        },
        {
          src: "https://1.bp.blogspot.com/-hOkBEgc8hdM/WAEDUkmyEaI/AAAAAAAABYg/0y_RETfHDXoJiID9l-f1wJuL8Hqjm7uhgCLcB/s1600/pantai-lampuuk-sore-hari.jpg",
          alt: "Pantai Lampuuk",
        },
        {
          src: "https://d1r9hss9q19p18.cloudfront.net/uploads/2019/11/DSC02158-1.jpg",
          alt: "Kopi Gayo",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/f/f8/AIR_TERJUN_SIPISO-PISO_%28SUMUT%29.jpg",
          alt: "Air Terjun Sipiso Sipiso",
        },
      ],

      // ------------------------------------ SULAWESI ------------------------------------
      "Pulau Sulawesi": [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sumatran_Tiger_Berlin_Tierpark.jpg",
          alt: "Harimau Sumatera",
        },
        {
          src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhH2co830rjMEuMRAtrG-mYPJJqBuIT_qeSWnMZuJoLUrqAGbhfMW9PaONdramSdRoN1eBlGxMNEmZrrI81d9QvH3_Z8R2cr36EzAgkmq7I59zC9ZKQgNApywmEhubGXvqL0JcRLDKq22Q/w1200-h675-p-k-no-nu/Hutan+tropis+Sumatera1.jpg",
          alt: "Hutan Hujan Tropis",
        },
        {
          src: "https://awsimages.detik.net.id/community/media/visual/2024/01/06/gajah-sumatera_169.jpeg?w=1200",
          alt: "Gajah Sumatera",
        },
        {
          src: "https://asset.kompas.com/crops/cv5nh_NNfOEmxiXuKv1Fq_c2VHA=/7x0:1000x662/750x500/data/photo/2022/01/25/61ef9ca74ad26.jpg",
          alt: "Bunga Rafflesia",
        },
        {
          src: "https://media.tampang.com/tm_images/article/desain-tanpae75m1mo60oj1ikyb.jpg",
          alt: "Badak Sumatera",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Indonesia_-_Lake_Toba_%2826224127503%29.jpg",
          alt: "Danau Toba",
        },
        {
          src: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/08/12/FotoJet-2023-08-12T143306476-748597235.jpg",
          alt: "Burung Kuau Raja",
        },
        {
          src: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/108/2023/08/21/Gunung-Kerinci-terlihat-dari-danau-gunung-7-ig-ghaardi-4081953553.jpg",
          alt: "Gunung Kerinci",
        },
        {
          src: "https://akcdn.detik.net.id/visual/2019/06/19/399b7912-8870-4c3c-89f7-6fa079880ed1_169.jpeg?w=650",
          alt: "Orangutan Sumatera",
        },
        {
          src: "https://1.bp.blogspot.com/-hOkBEgc8hdM/WAEDUkmyEaI/AAAAAAAABYg/0y_RETfHDXoJiID9l-f1wJuL8Hqjm7uhgCLcB/s1600/pantai-lampuuk-sore-hari.jpg",
          alt: "Pantai Lampuuk",
        },
        {
          src: "https://d1r9hss9q19p18.cloudfront.net/uploads/2019/11/DSC02158-1.jpg",
          alt: "Kopi Gayo",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/f/f8/AIR_TERJUN_SIPISO-PISO_%28SUMUT%29.jpg",
          alt: "Air Terjun Sipiso Sipiso",
        },
      ],

      // ------------------------------------ Maluku ------------------------------------
      "Kepulauan Maluku": [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sumatran_Tiger_Berlin_Tierpark.jpg",
          alt: "Harimau Sumatera",
        },
        {
          src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhH2co830rjMEuMRAtrG-mYPJJqBuIT_qeSWnMZuJoLUrqAGbhfMW9PaONdramSdRoN1eBlGxMNEmZrrI81d9QvH3_Z8R2cr36EzAgkmq7I59zC9ZKQgNApywmEhubGXvqL0JcRLDKq22Q/w1200-h675-p-k-no-nu/Hutan+tropis+Sumatera1.jpg",
          alt: "Hutan Hujan Tropis",
        },
        {
          src: "https://awsimages.detik.net.id/community/media/visual/2024/01/06/gajah-sumatera_169.jpeg?w=1200",
          alt: "Gajah Sumatera",
        },
        {
          src: "https://asset.kompas.com/crops/cv5nh_NNfOEmxiXuKv1Fq_c2VHA=/7x0:1000x662/750x500/data/photo/2022/01/25/61ef9ca74ad26.jpg",
          alt: "Bunga Rafflesia",
        },
        {
          src: "https://media.tampang.com/tm_images/article/desain-tanpae75m1mo60oj1ikyb.jpg",
          alt: "Badak Sumatera",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Indonesia_-_Lake_Toba_%2826224127503%29.jpg",
          alt: "Danau Toba",
        },
        {
          src: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/08/12/FotoJet-2023-08-12T143306476-748597235.jpg",
          alt: "Burung Kuau Raja",
        },
        {
          src: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/108/2023/08/21/Gunung-Kerinci-terlihat-dari-danau-gunung-7-ig-ghaardi-4081953553.jpg",
          alt: "Gunung Kerinci",
        },
        {
          src: "https://akcdn.detik.net.id/visual/2019/06/19/399b7912-8870-4c3c-89f7-6fa079880ed1_169.jpeg?w=650",
          alt: "Orangutan Sumatera",
        },
        {
          src: "https://1.bp.blogspot.com/-hOkBEgc8hdM/WAEDUkmyEaI/AAAAAAAABYg/0y_RETfHDXoJiID9l-f1wJuL8Hqjm7uhgCLcB/s1600/pantai-lampuuk-sore-hari.jpg",
          alt: "Pantai Lampuuk",
        },
        {
          src: "https://d1r9hss9q19p18.cloudfront.net/uploads/2019/11/DSC02158-1.jpg",
          alt: "Kopi Gayo",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/f/f8/AIR_TERJUN_SIPISO-PISO_%28SUMUT%29.jpg",
          alt: "Air Terjun Sipiso Sipiso",
        },
      ],

      // ------------------------------------ NUSA TENGGARA ------------------------------------
      "Nusa Tenggara": [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sumatran_Tiger_Berlin_Tierpark.jpg",
          alt: "Harimau Sumatera",
        },
        {
          src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhH2co830rjMEuMRAtrG-mYPJJqBuIT_qeSWnMZuJoLUrqAGbhfMW9PaONdramSdRoN1eBlGxMNEmZrrI81d9QvH3_Z8R2cr36EzAgkmq7I59zC9ZKQgNApywmEhubGXvqL0JcRLDKq22Q/w1200-h675-p-k-no-nu/Hutan+tropis+Sumatera1.jpg",
          alt: "Hutan Hujan Tropis",
        },
        {
          src: "https://awsimages.detik.net.id/community/media/visual/2024/01/06/gajah-sumatera_169.jpeg?w=1200",
          alt: "Gajah Sumatera",
        },
        {
          src: "https://asset.kompas.com/crops/cv5nh_NNfOEmxiXuKv1Fq_c2VHA=/7x0:1000x662/750x500/data/photo/2022/01/25/61ef9ca74ad26.jpg",
          alt: "Bunga Rafflesia",
        },
        {
          src: "https://media.tampang.com/tm_images/article/desain-tanpae75m1mo60oj1ikyb.jpg",
          alt: "Badak Sumatera",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Indonesia_-_Lake_Toba_%2826224127503%29.jpg",
          alt: "Danau Toba",
        },
        {
          src: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/08/12/FotoJet-2023-08-12T143306476-748597235.jpg",
          alt: "Burung Kuau Raja",
        },
        {
          src: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/108/2023/08/21/Gunung-Kerinci-terlihat-dari-danau-gunung-7-ig-ghaardi-4081953553.jpg",
          alt: "Gunung Kerinci",
        },
        {
          src: "https://akcdn.detik.net.id/visual/2019/06/19/399b7912-8870-4c3c-89f7-6fa079880ed1_169.jpeg?w=650",
          alt: "Orangutan Sumatera",
        },
        {
          src: "https://1.bp.blogspot.com/-hOkBEgc8hdM/WAEDUkmyEaI/AAAAAAAABYg/0y_RETfHDXoJiID9l-f1wJuL8Hqjm7uhgCLcB/s1600/pantai-lampuuk-sore-hari.jpg",
          alt: "Pantai Lampuuk",
        },
        {
          src: "https://d1r9hss9q19p18.cloudfront.net/uploads/2019/11/DSC02158-1.jpg",
          alt: "Kopi Gayo",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/f/f8/AIR_TERJUN_SIPISO-PISO_%28SUMUT%29.jpg",
          alt: "Air Terjun Sipiso Sipiso",
        },
      ],

      // ------------------------------------ PAPUA ------------------------------------
      "Pulau Papua": [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sumatran_Tiger_Berlin_Tierpark.jpg",
          alt: "Harimau Sumatera",
        },
        {
          src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhH2co830rjMEuMRAtrG-mYPJJqBuIT_qeSWnMZuJoLUrqAGbhfMW9PaONdramSdRoN1eBlGxMNEmZrrI81d9QvH3_Z8R2cr36EzAgkmq7I59zC9ZKQgNApywmEhubGXvqL0JcRLDKq22Q/w1200-h675-p-k-no-nu/Hutan+tropis+Sumatera1.jpg",
          alt: "Hutan Hujan Tropis",
        },
        {
          src: "https://awsimages.detik.net.id/community/media/visual/2024/01/06/gajah-sumatera_169.jpeg?w=1200",
          alt: "Gajah Sumatera",
        },
        {
          src: "https://asset.kompas.com/crops/cv5nh_NNfOEmxiXuKv1Fq_c2VHA=/7x0:1000x662/750x500/data/photo/2022/01/25/61ef9ca74ad26.jpg",
          alt: "Bunga Rafflesia",
        },
        {
          src: "https://media.tampang.com/tm_images/article/desain-tanpae75m1mo60oj1ikyb.jpg",
          alt: "Badak Sumatera",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Indonesia_-_Lake_Toba_%2826224127503%29.jpg",
          alt: "Danau Toba",
        },
        {
          src: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/08/12/FotoJet-2023-08-12T143306476-748597235.jpg",
          alt: "Burung Kuau Raja",
        },
        {
          src: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/108/2023/08/21/Gunung-Kerinci-terlihat-dari-danau-gunung-7-ig-ghaardi-4081953553.jpg",
          alt: "Gunung Kerinci",
        },
        {
          src: "https://akcdn.detik.net.id/visual/2019/06/19/399b7912-8870-4c3c-89f7-6fa079880ed1_169.jpeg?w=650",
          alt: "Orangutan Sumatera",
        },
        {
          src: "https://1.bp.blogspot.com/-hOkBEgc8hdM/WAEDUkmyEaI/AAAAAAAABYg/0y_RETfHDXoJiID9l-f1wJuL8Hqjm7uhgCLcB/s1600/pantai-lampuuk-sore-hari.jpg",
          alt: "Pantai Lampuuk",
        },
        {
          src: "https://d1r9hss9q19p18.cloudfront.net/uploads/2019/11/DSC02158-1.jpg",
          alt: "Kopi Gayo",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/f/f8/AIR_TERJUN_SIPISO-PISO_%28SUMUT%29.jpg",
          alt: "Air Terjun Sipiso Sipiso",
        },
      ],
      
      // Tambahkan data lainnya
    };

    const galleryData = galleryDataMap[selectedPulau.title] || [];

    // Render galeri
    gallerySection.innerHTML = ""; // Kosongkan konten lama
    galleryData.forEach((image) => {
      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt;
      gallerySection.appendChild(img);
    });
  }
});
