document.addEventListener("DOMContentLoaded", () => {
  // Ambil data dari localStorage
  const selectedPulau = JSON.parse(localStorage.getItem("selectedPulau"));

  if (selectedPulau) {
    const header = document.querySelector("header");
    const gallerySection = document.querySelector(".gallery-section");

    // Perbarui konten header
    header.querySelector(
      "h1"
    ).textContent = `Jelajahi keberagaman budaya dari ${selectedPulau.title}`;

    // Ganti data galeri berdasarkan pulau yang dipilih
    const galleryDataMap = {
      // ------------------------------------ SUMATERA ------------------------------------
      "Pulau Sumatra": [
        {
          src: "https://asset.kompas.com/crops/yVgzQBro6t_R1YJZoCZHaqdc0u0=/1x0:800x533/750x500/data/photo/2022/09/07/63184cf52b416.jpg",
          alt: "Tari Saman",
        },
        {
          src: "https://traverse.id/wp-content/uploads/2018/01/Toba_2012-museum-batu-kursi-raja-siallagan-Antonious-Pratama.jpg",
          alt: "Rumah Bolon",
        },
        {
          src: "https://bisnismuda.id/assets/content/202302131143290000002023021122313400000010FaktaUnikSukuBatakBisaMenikahDenganSepupu.png",
          alt: "Suku Batak",
        },
        {
          src: "https://asset.kompas.com/crops/Lr1PvDdJLVtFihgnYGFIy5_QkMw=/0x0:980x653/750x500/data/photo/2021/09/01/612f052b1aae1.jpg",
          alt: "Rumah Gadang",
        },
        {
          src: "https://awsimages.detik.net.id/community/media/visual/2019/04/29/c45b4fe5-2366-42c1-ac8e-5bb225a31a73_169.jpeg?w=1200",
          alt: "Tari Piring",
        },
        {
          src: "https://parto.id/asset/foto_produk/kain-jambi.jpg",
          alt: "Batik Jambi",
        },
        {
          src: "https://asset.kompas.com/crops/XlFGBKzskti3FphARynzDifUfSQ=/0x1:924x617/1200x800/data/photo/2022/02/07/620100b952e74.jpg",
          alt: "Matrilineala",
        },
        {
          src: "https://asset.kompas.com/crops/35Qi7zmTbQnsYOx1T7TS87UeUPQ=/0x0:968x645/1200x800/data/photo/2023/03/07/640691448f9d2.jpg",
          alt: "Pempek",
        },
        {
          src: "https://awsimages.detik.net.id/community/media/visual/2023/06/06/tari-erai-erai_169.jpeg?w=1200",
          alt: "Tari Gending Sriwijaya",
        },
        {
          src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixoaJMAf8GmSuVp6dAOm_Ov7TP5sMEXZqOmzcBfGXY1W-lBgCI5BQ7yJADIHOR9xD-1DpTJG4iHB_FbH90MOhFIn3ge9DI4jnBNSl7MiO9ug8KPIDv1PqgvUiLcJHRH2FPqcA2af_sWqes/s1600/17203146_1508378765880262_9002347635301954523_n.jpg",
          alt: "Tapis",
        },
        {
          src: "https://asset.kompas.com/crops/WsRGC6Tle-t_Dnf3XZuOARhe-bY=/0x0:0x0/750x500/data/photo/buku/634fe443869c3.jpg",
          alt: "Lompat Batu",
        },
        {
          src: "https://hypeabis.id/assets/photo/20230903234352000000HusnulFikri085766512919HoyakTabuikBudayaPariaman.jpg",
          alt: "Tabuik",
        },
      ],

      // ------------------------------------ JAWA ------------------------------------
      "Pulau Jawa": [
        {
          src: "https://asset-2.tstatic.net/tribunnews/foto/bank/images/muhibah-angklung.jpg",
          alt: "Angklung",
        },
        {
          src: "https://asset.kompas.com/crops/3kI6Hyb0eGVto195HHP8z31KlYE=/0x0:1000x667/1200x800/data/photo/2021/09/04/6132ca89be82b.jpg",
          alt: "Wayang Kulit",
        },
        {
          src: "https://asset.kompas.com/crops/1X03mvt0Uhv6hUR67HBSPgXn8Ac=/0x0:0x0/750x500/data/photo/buku/63072f7758008.jpg",
          alt: "Tari Jaipong",
        },
        {
          src: "https://www.kebumenupdate.com/wp-content/uploads/2024/02/wayang-menak.jpg",
          alt: "Wayang Golek",
        },
        {
          src: "https://assets-a1.kompasiana.com/items/album/2019/07/31/parade-reog-jawa1-5d4156270d823002d91ba5c3.jpg",
          alt: "Tari Reog Ponorogo",
        },
        {
          src: "https://jogjakonveksi.id/wp-content/uploads/2021/02/Batik-jogja.jpg",
          alt: "Batik Yogyakarta",
        },
        {
          src: "https://jelajahnesia.com/wp-content/uploads/2016/09/Kasada-Bromo-Wisata-Budaya-di-yang-sarat-makna.jpg",
          alt: "Upacara Kasada Bromo",
        },
        {
          src: "https://asset.kompas.com/crops/QGErEgRilqQ3z4u7E5fZ5NKO1As=/23x0:868x563/1200x800/data/photo/2022/07/12/62ccebf61f9ce.jpeg",
          alt: "Gudeg",
        },
        {
          src: "https://asset.kompas.com/crops/KOblroSeD5UDhVb9IlvBs1-fF4A=/11x0:881x580/750x500/data/photo/2021/09/07/61375373e7531.jpg",
          alt: "Tari Remo",
        },
        {
          src: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/09/13/Gunungan_darat_during_Garebeg_Mulud_Yogyakarta_Dec_2017_Pj_IMG_4517sm-2433102937.jpg",
          alt: "Sekaten",
        },
        {
          src: "https://static.republika.co.id/uploads/images/inpicture_slide/sejumlah-pelajar-smki-yogyakarta-memainkan-alat-musik-gamelan-saat-_160301153537-802.jpg",
          alt: "Gamelan",
        },
        {
          src: "https://assets.promediateknologi.id/crop/0x45:985x715/750x500/webp/photo/2022/07/07/2271112278.jpg",
          alt: "Air Terjun Sipiso Sipiso",
        },
      ],

      // ------------------------------------ KALIMANTAN ------------------------------------
      "Pulau Kalimantan": [
        {
          src: "https://asset.kompas.com/crops/JauYUOpat3E-olkyVvTfn8xUdhU=/0x0:0x0/1200x800/data/photo/2021/08/31/612e358585e0d.jpg",
          alt: "Tari Hudoq",
        },
        {
          src: "https://indonesiakaya.com/wp-content/uploads/2020/10/Rumah_Banjar_yang_menggunakan_atap_Bubungan_Tinggi_dinamakan_Rumah_Bubungan_Tinggi.jpg",
          alt: "Rumah Adat Banjar",
        },
        {
          src: "https://asset.kompas.com/crops/sRREIxFuWB5d1TELuLMAGC2Ao_k=/0x103:1440x1063/750x500/data/photo/2022/09/09/631b02cf85d9f.jpg",
          alt: "Tari Kancet Ledo",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/2/23/Oseng-oseng_Mandai.JPG",
          alt: "Mandai",
        },
        {
          src: "https://media.suara.com/pictures/970x544/2024/03/22/14109-ngugu-tahun-tradisi-tolak-bala-ala-masyarakat-dayak-tanjung-benuaq-ist.jpg",
          alt: "Tradisi Tolak Bala",
        },
        {
          src: "https://www.masakapahariini.com/wp-content/uploads/2019/06/5.jpg",
          alt: "Soto Banjar",
        },
        {
          src: "https://images.squarespace-cdn.com/content/v1/64ba44348b6a05559a816bc1/1690281519749-26LU5QW4GIL4SXHLGX4N/Tatung+Parade+-+Cap+Go+Meh+Festival+-+Singkawang_250.jpg",
          alt: "Cap Go Meh Festival",
        },
        {
          src: "https://static.republika.co.id/uploads/images/headline_slide/tenun-ikat-dayak-_171023143431-394.jpg",
          alt: "Tenun Ikat Dayak",
        },
        {
          src: "https://media.suara.com/pictures/970x544/2024/01/20/26260-tari-ganjur.jpg",
          alt: "Tari Ganjur",
        },
        {
          src: "https://live.staticflickr.com/6076/6087139741_afcd8d7788_b.jpg",
          alt: "Upacara Tilwah",
        },
        {
          src: "https://atourin.obs.ap-southeast-3.myhuaweicloud.com/images/destination/banjar/dermaga-pasar-terapung-lok-baintan-profile1639508195.png?x-image-process=image/resize,p_100,limit_1/imageslim",
          alt: "Pasar Terapung",
        },
        {
          src: "https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/24/2021/05/Tari-Mandau-6.jpg",
          alt: "Tari Mandau",
        },
      ],

      // ------------------------------------ SULAWESI ------------------------------------
      "Pulau Sulawesi": [
        {
          src: "https://asset-2.tstatic.net/banjarmasin/foto/bank/images/Pengantin-di-Batulicin-Tanbuyang-sedang-melaksanakan-Ritual-Mappacci.jpg",
          alt: "Mappacci",
        },
        {
          src: "https://awsimages.detik.net.id/community/media/visual/2022/08/11/sigajang-laleng-lipa_169.jpeg?w=650",
          alt: "Siri'na pacce",
        },
        {
          src: "https://media.suara.com/pictures/970x544/2022/07/28/52661-tari-paduppa-instagramcomsanggarsenikalimbaungssk.jpg",
          alt: "Paduppa",
        },
        {
          src: "https://www.ruparupa.com/blog/wp-content/uploads/2021/08/rumah-tongkonan-e1629394315415.jpg",
          alt: "Tongkonan",
        },
        {
          src: "https://awsimages.detik.net.id/community/media/visual/2022/03/28/tarian-bugis-di-hari-jadi-bone-ke-692_169.jpeg?w=1200",
          alt: "Baju Adat",
        },
        {
          src: "https://eventdaerah.kemenparekraf.go.id/storage/app/uploads/public/66e/165/630/66e165630cdeb672476070.webp",
          alt: "Pinisi",
        },
        {
          src: "https://assets.promediateknologi.id/crop/174x63:4207x2672/750x500/webp/photo/2023/07/02/Upacara-Rambu-Solo-3556206721.jpg",
          alt: "Rambu Solo",
        },
        {
          src: "https://getlost.id/wp-content/uploads/2022/05/lemo_1337965484.jpg",
          alt: "Lemo",
        },
        {
          src: "https://sultantv.co/wp-content/uploads/2022/09/tr.jpg",
          alt: "Tari Kebasaran",
        },
        {
          src: "https://sulsel.jadesta.com/imgpost/58609.jpg",
          alt: "Ukiran Toraja",
        },
        {
          src: "https://dimensiindonesia.com/wp-content/uploads/2023/02/IMG-20230213-WA0023.jpg",
          alt: "Pattu'du",
        },
        {
          src: "https://asset.kompas.com/crops/rlT1dhubq-lGp812cCvqp4JeGHU=/32x7:1000x653/1200x800/data/photo/2022/06/19/62ae88c4a1690.jpeg",
          alt: "Coto Makassar",
        },
      ],

      // ------------------------------------ Maluku ------------------------------------
      "Pulau Maluku": [
        {
          src: "https://tabaosnews.com/wp-content/uploads/2023/12/received_347349164554982.jpeg",
          alt: "Tradisi Adat Cuci Negeri",
        },
        {
          src: "https://yopiefranz.com/wp-content/uploads/2016/02/Festival-Budaya-Maritim-di-Teluk-Lampung.jpg",
          alt: "Pesta Laut",
        },
        {
          src: "https://radiodigitalmanado.co.id/wp-content/uploads/2024/02/120224-Tarian-Cakalele-wrtaceleb-1.jpg",
          alt: "Tarian Cakalele",
        },
        {
          src: "https://seringjalan.com/wp-content/uploads/2020/04/Tari-Saureka-reka-Maluku-Sumber-Blogkulo.jpg",
          alt: "Saureka",
        },
        {
          src: "https://cdn.rri.co.id/berita/Bukittinggi/o/1714452963720-rabab-pasisie.jpg/fdof6d9ujaq3hoi.webp",
          alt: "Rabab",
        },
        {
          src: "https://bisniswisata.co.id/wp-content/uploads/2019/08/IMG-20190805-WA0073.jpg",
          alt: "Bambu Hitada",
        },
        {
          src: "https://cdn0-production-images-kly.akamaized.net/wfcwhgecyQMdhzcSynVonFRhgCo=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1525850/original/053021800_1488546909-750x500-tenun-tanimbar-kain-khas-maluku-yang-sarat-filosofi-kehidupan-1703034.jpg",
          alt: "Tenun",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Manggurube_Arumbae%2C_pertandingan_mengayuh_perahu_Semang%2C_berenang_estafet_dari_titik_Martafons_Teluk_Ambon_ke_Galala_di_Ambon_Selatan.jpg/1280px-Manggurube_Arumbae%2C_pertandingan_mengayuh_perahu_Semang%2C_berenang_estafet_dari_titik_Martafons_Teluk_Ambon_ke_Galala_di_Ambon_Selatan.jpg",
          alt: "Manggurube",
        },
        {
          src: "https://www.masakapahariini.com/wp-content/uploads/2023/10/Cara-Membuat-Papeda-Khas-Indonesia-Timur.jpg",
          alt: "Papeda",
        },
        {
          src: "https://t-2.tstatic.net/tribunmanadotravel/foto/bank/images/nasi-bambu-jaha.jpg",
          alt: "Nasi Jaha",
        },
        {
          src: "https://smamariamediatrixambon.sch.id/wp-content/uploads/2023/05/2-1024x522.png",
          alt: "Lenso",
        },
        {
          src: "https://www.sasa.co.id/medias/page_medias/shutterstock_1644183805_(1).jpg",
          alt: "Rica Rodo",
        },
      ],

      // ------------------------------------ NUSA TENGGARA ------------------------------------
      "Pulau Nusa Tenggara": [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Berburu_Cacing_Laut.jpg/800px-Berburu_Cacing_Laut.jpg",
          alt: "Berburu Cacing Laut",
        },
        {
          src: "https://app.kuttabdigital.com/wp-content/uploads/2024/11/rumah-adat-ntb-1.jpg",
          alt: "Rumah Adat",
        },
        {
          src: "https://asset.kompas.com/crops/cYWRqrM2b7zshFZb8Big1Krlgek=/0x0:1000x667/750x500/data/photo/2020/02/18/5e4bbd62bf219.jpg",
          alt: "Gendang Beleq",
        },
        {
          src: "https://nusantaranews.co/storage/2018/04/Tenun-Mbojo-dan-Identitas-Perempuan-Bima.jpg",
          alt: "Tenun Mbojo",
        },
        {
          src: "https://cdn-assetd.kompas.id/g5CH4xpaPWDeeo-oJBCqqN5hZYA=/1024x472/https%3A%2F%2Fasset.kgnewsroom.com%2Fphoto%2Fpre%2F2023%2F02%2F13%2Fe3a1a0b5-2ef9-4db8-91c2-76e76276a2e8_jpg.jpg",
          alt: "Reba",
        },
        {
          src: "https://1001indonesia.net/asset/2018/04/Tradisi-Bakar-Batu-Papua.jpg",
          alt: "Bakar Batu",
        },
        {
          src: "https://backpackerjakarta.com/wp-content/uploads/2018/02/resep-membuat-jagung-bose-khas-ntt-99009cb5626bff10b5583beb7ef335da.jpg",
          alt: "Jagung Bose",
        },
        {
          src: "https://asset.kompas.com/crop/0x0:1000x667/750x500/data/photo/2018/10/12/1189318572.JPG",
          alt: "Anyaman",
        },
        {
          src: "https://asset.kompas.com/crops/4w9gJCBZvSuWNCsTfBY3xj-f2rw=/0x0:1600x1067/780x390/data/photo/2021/04/05/606b1a015f954.jpg",
          alt: "Megalantik",
        },
        {
          src: "https://asset.kompas.com/crops/pjBqV6oxFlLFV21ACXa1GYupwGE=/2x0:638x424/1200x800/data/photo/2024/06/27/667d5fa931752.jpg",
          alt: "Tari Kataga",
        },
        {
          src: "https://bobobox.com/blog/wp-content//uploads/2022/12/filosofi-luhur-di-balik-rumah-adat-sumba-jpg-1200x720.webp",
          alt: "Kopi Gayo",
        },
        {
          src: "https://asset.kompas.com/crops/-FOcjzPnixcOjfCeqOlsARxrZ9I=/0x0:1000x667/1200x800/data/photo/2022/02/15/620b1b4f0a48b.jpg",
          alt: "Pasola",
        },
      ],

      // ------------------------------------ PAPUA ------------------------------------
      "Pulau Papua": [
        {
          src: "https://asset-2.tstatic.net/papua/foto/bank/images/2372022kkn1.jpg",
          alt: "Upacara Wor",
        },
        {
          src: "https://img.merahputih.com/media/03/23/0b/03230ba4760a60cb423f7935725b531d.jpg",
          alt: "Tato tradisional papua",
        },
        {
          src: "https://asset.kompas.com/crops/b9276suZfr2a6wSH4FkDDWTLndM=/52x0:600x365/750x500/data/photo/2021/02/07/601fbdd97ecf8.jpg",
          alt: "Tari Yospan",
        },
        {
          src: "https://www.klikwarta.com/sites/default/files/styles/photo_medium/public/article/2022/Screenshot_2022-06-21_151917.jpg?itok=MPVeFAiA",
          alt: "Tumbu Tanah",
        },
        {
          src: "https://www.nesiatimes.com/wp-content/uploads/2019/10/IMG_20191029_174135.jpg",
          alt: "Sajojo",
        },
        {
          src: "https://www.kemenparekraf.go.id/_next/image?url=https%3A%2F%2Fapi2.kemenparekraf.go.id%2Fstorage%2Fapp%2Fuploads%2Fpublic%2F620%2Fb45%2F444%2F620b45444c891138362192.jpg&w=3840&q=75",
          alt: "Tari Perang",
        },
        {
          src: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/08/12/FotoJet-2023-08-12T143306476-748597235.jpg",
          alt: "Tumbu Tanah",
        },
        {
          src: "https://img.okezone.com/content/2020/12/04/406/2321819/5-keunikan-noken-papua-traveler-sudah-tahu-belum-gINxoxy1Em.jpg",
          alt: "Noken",
        },
        {
          src: "https://pariwisataindonesia.id/wp-content/uploads/2023/05/Pariwisata-Indonesia-Ukiran-Asmat.jpg",
          alt: "Asmat",
        },
        {
          src: "https://cdn1-production-images-kly.akamaized.net/BBUocIfQKm5PoflP94mVIl8QYnw=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1540950/original/070388800_1489823977-mumi_papua.jpg",
          alt: "Suku Dani",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Canoe_Warriers_in_West_Papua.jpg",
          alt: "Perahu Asmat",
        },
        {
          src: "https://www.pinhome.id/blog/wp-content/uploads/2021/07/Pakaian-Adat-Papua-Barat-1.webp",
          alt: "Baju Adat",
        },
      ],
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
