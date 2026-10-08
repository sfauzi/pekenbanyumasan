/**
 * Content layer — every string, path and number below was extracted verbatim
 * from the origin bundle (Peken Banyumasan, /assets/index-Cev4RdvL.js).
 *
 * These are the site's *baked-in fallbacks*: the origin renders them whenever
 * its content API (company-profile-pb.up.railway.app) is unreachable, which is
 * the state the live site is in — the API host answers 404 "Application not
 * found". Keeping them means the clone renders exactly the copy the origin
 * shows.
 */

/* ── navigation ─────────────────────────────────────────────────────────── */
export const NAV_ITEMS = ["HOME", "ABOUT", "PROGRAM", "PUBLICATION", "GALLERY"];

/* ── login hand-off targets ─────────────────────────────────────────────── */
export const LOGIN_TARGETS = {
  kolaborator: {
    envVar: "VITE_KOLABORATOR_URL",
    url: "https://kolabolator-pekenbanyumasan.pages.dev",
  },
  artisan: {
    envVar: "VITE_ARTISAN_URL",
    url: "https://artisan-pekenbanyumasan.pages.dev",
  },
};

/* ── home ───────────────────────────────────────────────────────────────── */
export const HOME_CONTENT = {
  hero_slides: [
    "./assets/banner-home-1.jpg",
    "./assets/banner-home-2.jpg",
    "./assets/banner-about.png",
  ],
  hero_eyebrow: "MIRAPAT · BANYUMASAN · 2026",
  hero_headline_pre: "Temukan",
  hero_headline_em: "pertunjukan",
  hero_headline_post: ", karya artisan, dan cerita Banyumasan dalam satu ekosistem.",
  manifesto_col1: `Peken Banyumasan adalah sebuah ruang kreatif berbasis budaya
lokal yang dirancang sebagai wadah berkumpulnya masyarakat,
pelaku Artisan, seniman, dan komunitas dalam satu ekosistem yang
hidup, inklusif, dan berkelanjutan.

Peken tidak hanya berfungsi sebagai pasar atau tempat berkumpul
biasa, tetapi sebagai ruang interaksi yang menghadirkan
pengalaman budaya khas Banyumas melalui berbagai aktivitas
seperti pertunjukan seni, kuliner tradisional, produk kreatif,
hingga eksplorasi identitas lokal.`,
  manifesto_col2: `Peken Banyumasan adalah ruang temu budaya dan ekonomi kreatif
di Banyumas yang mempertemukan seniman, Artisan, dan masyarakat
dalam satu perayaan kearifan lokal.

Menghadirkan kuliner tradisional, pertunjukan seni, serta
aktivitas komunitas, Peken menjadi tempat di mana budaya
tidak hanya dipamerkan, tetapi dirasakan dan dialami bersama.

Sejak pertama kali hadir pada Februari 2022 dan diselenggarakan
dua kali setiap bulan di kawasan Kota Lama Banyumas, Peken
terus berkembang sebagai ekosistem kreatif.`,
  agenda_date: "—",
  agenda_nama: "",
  agenda_label: "Agenda berikutnya akan diumumkan",
  agenda_lokasi: "",
  agenda_deskripsi: "Pantau terus informasi event Peken Banyumasan berikutnya.",
  lokasi_headline: `Kawasan Kota Lama Banyumas.
Taman Sari · Sudagaran.`,
  lokasi_alamat: `Banyumas, Sudagaran, Kec. Banyumas,
Kabupaten Banyumas, Jawa Tengah 53192`,
  lokasi_trans: `Trans Banyumas Koridor 4 · Terminal Bulupitu
Trans Banyumas Koridor 4 · RS Margono — Halte Alun-alun
Operasional · 04:40 – 18:30 WIB`,
  lokasi_trans1_url:
    "https://maps.google.com/?q=Taman+Sari+Kecamatan+Banyumas+Kabupaten+Banyumas+Jawa+Tengah",
  lokasi_trans2_url: "https://maps.google.com/?q=Trans+Banyumas+Koridor+4",
  lokasi_image_url: "",
};

/* ── programs ───────────────────────────────────────────────────────────── */
export const PROGRAMS = [
  {
    n: "01",
    slug: "banyumasan-fashionshow",
    title: "Banyumasan Fashionshow",
    image_url: "./assets/program-fashion.jpg",
    body: "Peragaan busana bertema kebudayaan Banyumas dengan materi tenun, batik, dan karya desainer lokal.",
  },
  {
    n: "02",
    slug: "bring-your-own-bowl",
    title: "Bring Your Own Bowl",
    image_url: "./assets/program-byob.jpg",
    body: "Gerakan zero-waste — pengunjung membawa wadah sendiri, artisan kuliner melayani tanpa kemasan sekali pakai.",
  },
  {
    n: "03",
    slug: "local-market",
    title: "Local Market",
    image_url: "./assets/program-local-market.jpg",
    body: "Pasar produk kerajinan, makanan, dan kebutuhan rumah tangga dari Artisan Banyumasan.",
  },
  {
    n: "04",
    slug: "pitutur-banyumasan",
    title: "Pitutur Banyumasan",
    image_url: "./assets/program-pitutur.jpg",
    body: "Panggung cerita lisan: kidung, wayang, geguritan. Dipandu oleh para pelaku pertunjukan setempat.",
  },
  {
    n: "05",
    slug: "coffee-and-conversation",
    title: "Coffee & Conversation",
    image_url: "./assets/program-coffee.jpg",
    body: "Ruang ngopi lambat untuk percakapan lintas komunitas: seniman, perajin, pemerintah, akademisi.",
  },
  {
    n: "06",
    slug: "makers-workshop",
    title: "Makers Workshop",
    image_url: "./assets/program-makers.jpg",
    body: "Workshop dua-jam: batik ecoprint, tenun mini, aksara Jawa, sablon manual. Terbuka untuk pengunjung.",
  },
];

/** The home grid uses the shorter teaser copy shipped for the six-card row. */
export const PROGRAMS_HOME = [
  {
    n: "01",
    slug: "banyumasan-fashionshow",
    title: "Banyumasan Fashionshow",
    image_url: "./assets/program-fashion.jpg",
    body: "Peragaan busana bertema kebudayaan Banyumas — tenun, batik, karya desainer lokal.",
  },
  {
    n: "02",
    slug: "bring-your-own-bowl",
    title: "Bring Your Own Bowl",
    image_url: "./assets/program-byob.jpg",
    body: "Gerakan zero-waste — pengunjung membawa wadah sendiri, artisan kuliner tanpa kemasan sekali pakai.",
  },
  {
    n: "03",
    slug: "local-market",
    title: "Local Market",
    image_url: "./assets/program-local-market.jpg",
    body: "Pasar produk kerajinan, makanan, dan kebutuhan rumah tangga dari Artisan Banyumasan.",
  },
  {
    n: "04",
    slug: "pitutur-banyumasan",
    title: "Pitutur Banyumasan",
    image_url: "./assets/program-pitutur.jpg",
    body: "Panggung cerita lisan: kidung, wayang, geguritan, dipandu pelaku pertunjukan setempat.",
  },
  {
    n: "05",
    slug: "coffee-and-conversation",
    title: "Coffee & Conversation",
    image_url: "./assets/program-coffee.jpg",
    body: "Ruang ngopi lambat untuk percakapan lintas komunitas — seniman, perajin, akademisi.",
  },
  {
    n: "06",
    slug: "makers-workshop",
    title: "Makers Workshop",
    image_url: "./assets/program-makers.jpg",
    body: "Workshop dua-jam: batik ecoprint, tenun mini, aksara Jawa, sablon manual.",
  },
];

/* ── agenda / events ────────────────────────────────────────────────────── */
export const STATIC_EVENTS = [
  {
    id: "ev-static-01",
    nama: "Peken Banyumasan — Edisi Mei 2026",
    tanggal: "2026-05-17",
    tanggal_selesai: "2026-05-17",
    jam_mulai: "15:00",
    jam_selesai: "22:00",
    lokasi: "Kawasan Kota Lama · Taman Sari, Banyumas",
    deskripsi:
      "Edisi Mei Peken Banyumasan menghadirkan pertunjukan seni lisan, pasar kriya lokal, dan sesi Coffee & Conversation. Terbuka untuk semua pengunjung — masuk gratis.",
    peserta_count: 0,
    kapasitas: 500,
    status: "published",
  },
  {
    id: "ev-static-02",
    nama: "Peken Banyumasan — Edisi Juni 2026",
    tanggal: "2026-06-07",
    tanggal_selesai: "2026-06-07",
    jam_mulai: "15:00",
    jam_selesai: "22:00",
    lokasi: "Kawasan Kota Lama · Taman Sari, Banyumas",
    deskripsi:
      "Edisi Juni menampilkan Banyumasan Fashionshow, workshop Makers, dan panggung Pitutur Banyumasan. Artisan dan kolaborator baru dipersilakan mendaftar.",
    peserta_count: 0,
    kapasitas: 500,
    status: "published",
  },
  {
    id: "ev-static-03",
    nama: "Peken Banyumasan — Edisi Juli 2026",
    tanggal: "2026-07-05",
    tanggal_selesai: "2026-07-05",
    jam_mulai: "15:00",
    jam_selesai: "22:00",
    lokasi: "Kawasan Kota Lama · Taman Sari, Banyumas",
    deskripsi:
      "Edisi pertengahan tahun dengan program Local Market yang diperluas — lebih dari 60 artisan lokal Banyumasan berpartisipasi.",
    peserta_count: 0,
    kapasitas: 500,
    status: "published",
  },
];

export const EVENT_STATUS_COLORS = {
  upcoming: "var(--accent)",
  berlangsung: "#7dd3fc",
  selesai: "var(--fg-muted)",
  published: "var(--accent)",
};

export const EVENT_STATUS_LABELS = {
  upcoming: "Akan Datang",
  berlangsung: "Berlangsung",
  selesai: "Selesai",
  published: "Akan Datang",
  draft: "Draft",
};

export const DAY_NAMES = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
export const MONTH_NAMES = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

/* ── about ──────────────────────────────────────────────────────────────── */
export const ABOUT_CONTENT = {
  hero_headline:
    "Peken lahir dari keinginan untuk menghidupkan kembali denyut kota lama melalui seni, pasar, dan kebersamaan.",
  manifesto_col1: `Peken Banyumasan tumbuh dari percakapan kecil di sudut Kota Lama — antara seniman pertunjukan, pelaku Artisan, dan warga sekitar yang ingin menghidupkan kembali ruang publik sebagai tempat bertemu, bukan sekadar berdagang.

Dari obrolan itu, lahir gerakan dwi-mingguan yang konsisten sejak Februari 2022 — sebuah ritual kolektif yang mempertemukan tradisi, kerajinan, dan kuliner Banyumasan dalam satu malam.`,
  manifesto_col2: `Kami percaya kebudayaan tidak perlu dipajang di balik kaca. Ia hidup ketika dirayakan secara rutin, dalam skala kecil, oleh orang-orang yang merasa memilikinya.

Setiap edisi Peken adalah usaha sederhana untuk menjaga warisan tetap berdetak — sambil membuka ruang bagi karya baru tumbuh di atasnya.`,
  mirapat_intro:
    "Peken Banyumasan bukan event satu-malam — ia adalah mirapat, kata Banyumasan yang berarti perjumpaan rutin yang dijaga bersama. Setiap edisi mempertemukan seniman pertunjukan tradisional, perajin muda, pelaku Artisan, akademisi, hingga warga sekitar dalam satu ruang yang sama.",
  mirapat_quote:
    '"Bukan pasar yang menjadi tujuan, melainkan perjumpaan yang menjadikan pasar itu bermakna."',
  mirapat_closing:
    "Tiga sumbu menjadi fondasi gerakan ini — pelestarian budaya, ruang berkarya bagi pelaku kreatif, dan ekonomi yang berputar di dalam komunitasnya sendiri.",
  pillars: [
    {
      n: "01",
      label: "CULTURE",
      body: "Melestarikan kearifan lokal, seni pertunjukan tradisional, dan warisan budaya takbenda Banyumas sebagai fondasi gerakan.",
    },
    {
      n: "02",
      label: "CREATIVE",
      body: "Memberikan ruang bagi seniman, perajin, dan kolektif muda untuk berkarya dan bertemu audiens yang sebenarnya.",
    },
    {
      n: "03",
      label: "CIRCULAR",
      body: "Mendorong ekonomi berputar di dalam komunitas — dari artisan lokal, bahan lokal, hingga pengunjung lokal.",
    },
  ],
  visi: "Menjadi ekosistem budaya dan ekonomi kreatif yang menjaga kearifan lokal Banyumas tetap berdetak — relevan, hidup, dan berkelanjutan.",
  tujuan:
    "Menyediakan ruang publik dwi-mingguan yang mempertemukan pelaku seni, Artisan, dan masyarakat — sehingga warisan budaya Banyumasan dirawat melalui praktik bersama, bukan sekadar dipamerkan.",
  sasaran:
    "Seniman pertunjukan tradisional, perajin & Artisan Banyumas, komunitas kreatif muda, akademisi, mitra pemerintah dan swasta, serta pengunjung lokal-regional yang menjadi audiens sekaligus pelaku.",
};

export const HEXA_HELIX = [
  { name: "Government", body: "Pemerintah Kabupaten Banyumas dan instansi terkait sebagai mitra kebijakan dan ruang publik." },
  { name: "Academia", body: "Kampus dan lembaga riset sebagai sumber kajian, kurikulum, dan tenaga kurasi muda." },
  { name: "Industry", body: "Pelaku usaha skala Artisan hingga korporasi sebagai mitra ekonomi dan ekosistem produk." },
  { name: "Community", body: "Warga, kolektif seni, dan komunitas hobi sebagai inti gerakan dan audiens setia Peken." },
  { name: "Media", body: "Jejaring media independen dan jurnalisme budaya sebagai penjaga narasi gerakan." },
  { name: "Finance", body: "Mitra pembiayaan — bank, koperasi, hingga skema gotong royong — yang menjaga sirkulasi ekonomi tetap sehat." },
];

export const KEY_PEOPLE = [
  {
    photo: "./assets/tokoh-portrait-1.png",
    role: "FOUNDER",
    name: "Gilang Ramadhan, S.Sn., M.Ds.",
    title: "Founder & Program Director",
    bio: "Menggagas Peken pada Februari 2022 dan mengawal kurasi setiap edisi sejak. Latar belakang antropologi pertunjukan, dengan fokus pada kesenian Banyumasan kontemporer.",
  },
  {
    photo: "./assets/tokoh-portrait-2.png",
    role: "CURATOR",
    name: "Galih Putra Pamungkas, S.Sn., M.Sn.",
    title: "Curator — Artisan",
    bio: "Mengkurasi artisan yang masuk ke setiap edisi Peken. Sebelumnya menjalankan kolektif batik di Sokaraja; membangun program pendampingan artisan dari hulu ke hilir.",
  },
  {
    photo: "./assets/tokoh-portrait-3.png",
    role: "STRATEGIC PARTNER",
    name: "Jakarta Tisam S.STP, M.Si",
    title: "Strategic Partner & Community Lead",
    bio: "Menjaga jaringan kolaborator, sponsor, dan mitra institusi — kampus, pemerintah daerah, swasta. Memegang rasio kolaborasi yang sehat antar enam helix.",
  },
];

export const ABOUT_STATS = [
  { n: "86", label: "Edisi Peken diselenggarakan" },
  { n: "240", label: "Kolaborator aktif" },
  { n: "1.2k", label: "Artisan terlibat" },
  { n: "38k", label: "Pengunjung setiap edisi" },
];

export const LEGAL_DUKUNGAN = `Peken Banyumasan didukung oleh jaringan mitra lintas sektor: Pemerintah Kabupaten Banyumas dan Dinas Kebudayaan sebagai mitra kebijakan; Universitas Jenderal Soedirman sebagai mitra riset dan pendampingan kurasi; Bank BPD Jawa Tengah sebagai mitra pembiayaan Artisan; Komunitas Kota Lama Banyumas sebagai mitra penyelenggara di lokasi.

Dukungan ini terdokumentasi dalam Memorandum of Understanding yang diperbarui setiap dua tahun, dan operasional tahunan dilaporkan secara terbuka kepada para mitra sebagai bagian dari prinsip akuntabilitas gerakan.`;

export const LEGAL_HUKUM = `Peken Banyumasan beroperasi di bawah payung Yayasan Peken Banyumasan, dengan landasan hukum nasional pada UU No. 5/2017 tentang Pemajuan Kebudayaan dan UU No. 24/2019 tentang Ekonomi Kreatif, serta payung daerah pada Peraturan Daerah Kabupaten Banyumas No. 6/2020 tentang Pemajuan Kebudayaan Daerah.

Yayasan terdaftar resmi dengan NPWP 00.000.000.0-000.000 dan NIB 0000000000000 (akan diperbarui pada handoff data legal sebenarnya), tunduk pada laporan keuangan dan tata kelola yayasan sebagaimana diatur dalam UU Yayasan.`;

/* ── gallery ────────────────────────────────────────────────────────────── */
export const GALLERY_IMAGES = [
  { filename: "gallery-1", label: "Mrapat #01", year: "2022" },
  { filename: "gallery-2", label: "Mrapat #02", year: "2022" },
  { filename: "gallery-3", label: "Mrapat #03", year: "2022" },
  { filename: "gallery-4", label: "Mrapat #04", year: "2023" },
  { filename: "gallery-5", label: "Mrapat #05", year: "2023" },
  { filename: "gallery-6", label: "Mrapat #06", year: "2023" },
  { filename: "gallery-perform-1", label: "Pertunjukan #01", year: "2024" },
  { filename: "gallery-perform-2", label: "Pertunjukan #02", year: "2024" },
  { filename: "banner-home-1", label: "Banner Peken", year: "2025" },
  { filename: "banner-home-2", label: "Banner Mrapat", year: "2025" },
];

export const GALLERY_DOC = {
  headline: "Setiap edisi Peken didokumentasikan secara terbuka.",
  body: `Foto-foto di laman ini diambil oleh tim dokumentasi Peken bersama relawan fotografer komunitas — dirilis di bawah lisensi Creative Commons BY-NC 4.0 untuk penggunaan non-komersial dengan atribusi.

Setiap edisi dikemas sebagai paket gambar resolusi tinggi (RAW + JPEG terkurasi) yang dapat diunduh untuk keperluan riset, jurnalisme, atau kebutuhan komunitas.`,
  ukuran: "ZIP · ±420 MB per edisi",
  download_url: "",
};

/* ── publication / works ────────────────────────────────────────────────── */
export const WORKS = [
  {
    id: "w-static-01",
    judul: "Senja di Pasar Lama",
    gambar_url: "./assets/gallery-1.jpg",
    owner: "Aji Pradana",
    owner_type: "kolaborator",
    owner_id: "aji-pradana",
    kategori_display: "Fotografi",
    tahun: 2026,
    deskripsi:
      "Seri foto malam di kawasan Pasar Lama Banyumas. Diambil dengan kamera analog format 35mm.",
    featured: true,
  },
  {
    id: "w-static-02",
    judul: "Tenun Lurik Modular",
    gambar_url: "./assets/gallery-2.jpg",
    owner: "Sanggar Lestari Sokaraja",
    owner_type: "artisan",
    owner_id: "sanggar-lestari-sokaraja",
    kategori_display: "Kriya",
    tahun: 2025,
    deskripsi:
      "Eksperimen tenun lurik dengan modul lebar tetap untuk memudahkan kombinasi warna oleh desainer pakaian.",
    featured: true,
  },
  {
    id: "w-static-03",
    judul: "Edisi #54 — Geguritan Malam",
    gambar_url: "./assets/gallery-3.jpg",
    owner: "Komunitas Pitutur",
    owner_type: "kolaborator",
    owner_id: "komunitas-pitutur",
    kategori_display: "Seni Pertunjukan",
    tahun: 2025,
    deskripsi: "Dokumentasi panggung geguritan malam pada Peken Edisi #54.",
    featured: true,
  },
  {
    id: "w-static-04",
    judul: "Wadah Bambu Lipat",
    gambar_url: "./assets/gallery-4.jpg",
    owner: "Artisan Tirta Karya",
    owner_type: "artisan",
    owner_id: "artisan-tirta-karya",
    kategori_display: "Kriya",
    tahun: 2024,
    deskripsi: "Wadah makanan bambu lipat untuk mendukung gerakan Bring Your Own Bowl Peken.",
    featured: true,
  },
  {
    id: "w-static-05",
    judul: "Mural Kota Lama",
    gambar_url: "./assets/gallery-5.jpg",
    owner: "Kolektif Coret",
    owner_type: "kolaborator",
    owner_id: "kolektif-coret",
    kategori_display: "Seni Rupa",
    tahun: 2024,
    deskripsi: "Mural permanen pada dinding selatan Taman Sari, dilukis selama dua minggu.",
    featured: true,
  },
  {
    id: "w-static-06",
    judul: "Aksara Jawa Banyumasan",
    gambar_url: "./assets/gallery-6.jpg",
    owner: "Studio Wignya",
    owner_type: "kolaborator",
    owner_id: "studio-wignya",
    kategori_display: "Desain Produk",
    tahun: 2023,
    deskripsi: "Tipografi aksara Jawa varian Banyumasan, dirilis sebagai font terbuka.",
    featured: true,
  },
  {
    id: "w-static-07",
    judul: "Banyumasan Streetwear Cap.1",
    gambar_url: "./assets/program-fashion.jpg",
    owner: "Reka Studio",
    owner_type: "kolaborator",
    owner_id: "reka-studio",
    kategori_display: "Fashion",
    tahun: 2025,
    deskripsi: "Lini streetwear pertama dari Reka Studio yang mengadaptasi motif batik banyumasan.",
    featured: false,
  },
  {
    id: "w-static-08",
    judul: "Anyaman Pandan Modular",
    gambar_url: "./assets/gallery-perform-1.jpg",
    owner: "Bu Tasrip & Komunitas",
    owner_type: "artisan",
    owner_id: "bu-tasrip-komunitas",
    kategori_display: "Kriya",
    tahun: 2023,
    deskripsi:
      "Anyaman pandan modular yang bisa dirangkai menjadi tas, alas duduk, atau partisi ruang.",
    featured: false,
  },
];

/* ── public profiles ────────────────────────────────────────────────────── */
export const PROFILES = [
  {
    id: "aji-pradana",
    slug: "aji-pradana",
    nama: "Aji Pradana",
    role: "kolaborator",
    subsektor: ["Fotografi", "Lainnya"],
    kota: "Banyumas",
    status: "aktif",
    foto_url: null,
    cover_url: null,
    bio: "Fotografer dokumenter yang berfokus pada kebudayaan lokal Banyumas. Bekerja sama dengan Peken Banyumasan sejak 2022 sebagai fotografer tetap setiap edisi.",
    tanggal_daftar: "2022-03-01",
    total_karya: 12,
    total_story: 28,
    total_event: 4,
    karya: [
      {
        id: "k1",
        judul: "Senja di Pasar Lama",
        gambar_url: "./assets/gallery-1.jpg",
        subsektor: "Fotografi",
        tahun: 2026,
        deskripsi:
          "Seri foto malam di kawasan Pasar Lama Banyumas. Diambil dengan kamera analog format 35mm.",
        featured: true,
      },
      {
        id: "k2",
        judul: "Wajah-Wajah Peken",
        gambar_url: "./assets/gallery-perform-1.jpg",
        subsektor: "Fotografi",
        tahun: 2025,
        deskripsi:
          "Potret para pedagang dan pengunjung Peken dalam momen kebersamaan yang autentik.",
        featured: false,
      },
      {
        id: "k3",
        judul: "Ritual Panggung #47",
        gambar_url: "./assets/gallery-perform-2.jpg",
        subsektor: "Fotografi",
        tahun: 2025,
        deskripsi: "Dokumentasi pertunjukan Pitutur Banyumasan edisi ke-47 di Taman Sari.",
        featured: false,
      },
    ],
    story: [
      {
        id: "s1",
        konten:
          "Malam ini mengabadikan Peken edisi ke-86. Selalu ada sudut baru yang belum pernah saya foto sebelumnya — itulah yang membuat saya terus kembali setiap edisi.",
        media_url: null,
        tags: ["Fotografi", "Peken"],
        like_count: 42,
        status: "aktif",
        created_at: "2025-04-10",
      },
      {
        id: "s2",
        konten:
          'Menggunakan kamera film Kodak Ultramax 400 untuk seluruh seri "Senja di Pasar Lama". Ada sesuatu yang tidak bisa ditiru digital dari butiran film analog.',
        media_url: null,
        tags: ["Fotografi", "Analog"],
        like_count: 31,
        status: "aktif",
        created_at: "2025-03-22",
      },
    ],
    events: [
      {
        id: "e1",
        nama: "Peken Edisi #86",
        tanggal: "2025-04-10",
        lokasi: "Taman Sari, Banyumas",
        status: "selesai",
        peran: "Fotografer Resmi",
        deskripsi: "Dokumentasi penuh edisi ke-86 Peken Banyumasan.",
      },
      {
        id: "e2",
        nama: "Workshop Foto Analog",
        tanggal: "2025-06-15",
        lokasi: "Studio Wignya, Purwokerto",
        status: "published",
        peran: "Fasilitator",
        deskripsi: "Workshop praktik fotografi analog untuk komunitas kreatif Banyumas.",
      },
    ],
  },
  {
    id: "sanggar-lestari-sokaraja",
    slug: "sanggar-lestari-sokaraja",
    nama: "Sanggar Lestari Sokaraja",
    role: "artisan",
    kategori_usaha: ["Kriya"],
    kota: "Sokaraja, Banyumas",
    status: "aktif",
    foto_url: null,
    cover_url: null,
    bio: "Sanggar tenun lurik yang dijalankan oleh tiga generasi keluarga penenun dari Sokaraja. Berkomitmen menjaga teknik tenun tradisional sembari mengeksplorasi desain kontemporer.",
    tanggal_daftar: "2022-05-15",
    total_karya: 9,
    total_story: 14,
    total_event: 5,
    karya: [
      {
        id: "k1",
        judul: "Tenun Lurik Modular",
        gambar_url: "./assets/gallery-2.jpg",
        kategori_usaha: "Kriya",
        tahun: 2025,
        deskripsi:
          "Eksperimen tenun lurik dengan modul lebar tetap untuk memudahkan kombinasi warna oleh desainer pakaian.",
        featured: true,
      },
      {
        id: "k2",
        judul: "Lurik Diagonal Cilacap",
        gambar_url: "./assets/banner-home-1.jpg",
        kategori_usaha: "Kriya",
        tahun: 2024,
        deskripsi:
          "Koleksi tenun lurik dengan pola diagonal hasil kolaborasi dengan pengrajin Cilacap.",
        featured: false,
      },
    ],
    story: [
      {
        id: "s1",
        konten:
          "Tiga generasi, satu alat tenun. Nenek saya memulai ini 60 tahun lalu. Saya hanya meneruskan, tapi dengan visi yang lebih jauh ke depan. 🧵",
        media_url: null,
        tags: ["Tenun", "Tradisi"],
        like_count: 58,
        status: "aktif",
        created_at: "2025-04-05",
      },
    ],
    events: [
      {
        id: "e1",
        nama: "Pameran Tenun Nusantara",
        tanggal: "2025-05-20",
        lokasi: "Gedung Kesenian Banyumas",
        status: "published",
        peran: "Peserta Pameran",
        deskripsi: "Pameran koleksi tenun lurik bersama pengrajin dari berbagai daerah.",
      },
      {
        id: "e2",
        nama: "Peken Edisi #80",
        tanggal: "2024-10-12",
        lokasi: "Taman Sari, Banyumas",
        status: "selesai",
        peran: "Artisan Resmi",
        deskripsi: "Booth tenun lurik di edisi ke-80 Peken Banyumasan.",
      },
    ],
  },
  {
    id: "komunitas-pitutur",
    slug: "komunitas-pitutur",
    nama: "Komunitas Pitutur",
    role: "kolaborator",
    subsektor: ["Seni Pertunjukan", "Lainnya"],
    kota: "Banyumas",
    status: "aktif",
    foto_url: null,
    cover_url: null,
    bio: "Komunitas pelestari seni lisan Banyumasan — kidung, wayang, geguritan. Tampil rutin di setiap edisi Peken sejak awal berdirinya gerakan ini.",
    tanggal_daftar: "2022-02-10",
    total_karya: 24,
    total_story: 31,
    total_event: 10,
    karya: [
      {
        id: "k1",
        judul: "Edisi #54 — Geguritan Malam",
        gambar_url: "./assets/gallery-3.jpg",
        subsektor: "Seni Pertunjukan",
        tahun: 2025,
        deskripsi: "Dokumentasi panggung geguritan malam pada Peken Edisi #54.",
        featured: true,
      },
      {
        id: "k2",
        judul: "Kidung Banyumasan #39",
        gambar_url: "./assets/gallery-perform-2.jpg",
        subsektor: "Seni Pertunjukan",
        tahun: 2024,
        deskripsi: "Penampilan kidung Banyumasan dipandu dalang muda dari Kecamatan Sokaraja.",
        featured: false,
      },
    ],
    story: [
      {
        id: "s1",
        konten:
          "Geguritan bukan hanya puisi — ia adalah cara orang Banyumas berbicara tentang dukanya, syukurnya, dan harapannya. Kami menjaga agar ia tetap hidup di telinga generasi baru.",
        media_url: null,
        tags: ["Seni Pertunjukan", "Geguritan"],
        like_count: 87,
        status: "aktif",
        created_at: "2025-03-18",
      },
    ],
    events: [
      {
        id: "e1",
        nama: "Festival Seni Lisan Banyumasan",
        tanggal: "2025-07-08",
        lokasi: "Pendopo Banyumas",
        status: "published",
        peran: "Penampil Utama",
        deskripsi: "Festival tahunan seni lisan Banyumasan.",
      },
      {
        id: "e2",
        nama: "Peken Edisi #54",
        tanggal: "2025-01-18",
        lokasi: "Taman Sari",
        status: "selesai",
        peran: "Penampil",
        deskripsi: "Penampilan geguritan malam di Peken #54.",
      },
    ],
  },
  {
    id: "reka-studio",
    slug: "reka-studio",
    nama: "Reka Studio",
    role: "kolaborator",
    subsektor: ["Fashion", "Desain Produk"],
    kota: "Purwokerto, Banyumas",
    status: "aktif",
    foto_url: null,
    cover_url: null,
    bio: "Studio desain mode yang mengadaptasi warisan batik dan tenun Banyumasan ke siluet pakaian kontemporer. Debut di Banyumasan Fashionshow Peken edisi ke-48.",
    tanggal_daftar: "2023-01-20",
    total_karya: 7,
    total_story: 19,
    total_event: 3,
    karya: [
      {
        id: "k1",
        judul: "Banyumasan Streetwear Cap.1",
        gambar_url: "./assets/program-fashion.jpg",
        subsektor: "Fashion",
        tahun: 2025,
        deskripsi:
          "Lini streetwear pertama dari Reka Studio yang mengadaptasi motif batik banyumasan.",
        featured: true,
      },
    ],
    story: [
      {
        id: "s1",
        konten:
          "Koleksi terbaru sudah siap. Kami menggabungkan motif kawung dengan siluet oversized — percaya atau tidak, hasilnya sangat Banyumas tapi juga sangat saat ini.",
        media_url: null,
        tags: ["Mode", "Batik"],
        like_count: 73,
        status: "aktif",
        created_at: "2025-04-08",
      },
    ],
    events: [
      {
        id: "e1",
        nama: "Banyumasan Fashionshow #48",
        tanggal: "2025-03-22",
        lokasi: "Taman Sari",
        status: "selesai",
        peran: "Perancang Utama",
        deskripsi: "Debut koleksi streetwear Banyumasan oleh Reka Studio.",
      },
    ],
  },
  {
    id: "artisan-tirta-karya",
    slug: "artisan-tirta-karya",
    nama: "Artisan Tirta Karya",
    role: "artisan",
    kategori_usaha: ["Kriya"],
    kota: "Banyumas",
    status: "aktif",
    foto_url: null,
    cover_url: null,
    bio: "Usaha kerajinan bambu ramah lingkungan yang mendukung gerakan zero-waste Peken melalui produksi wadah makanan tanpa lem sintetis.",
    tanggal_daftar: "2023-04-01",
    total_karya: 5,
    total_story: 8,
    total_event: 3,
    karya: [
      {
        id: "k1",
        judul: "Wadah Bambu Lipat",
        gambar_url: "./assets/gallery-4.jpg",
        kategori_usaha: "Kriya",
        tahun: 2024,
        deskripsi: "Wadah makanan bambu lipat untuk mendukung Bring Your Own Bowl.",
        featured: true,
      },
    ],
    story: [
      {
        id: "s1",
        konten:
          "Setiap wadah bambu yang kami buat menggantikan sekitar 200 wadah plastik sekali pakai selama masa pakainya. Kecil, tapi nyata dampaknya. 🌿",
        media_url: null,
        tags: ["Kriya", "ZeroWaste"],
        like_count: 45,
        status: "aktif",
        created_at: "2025-02-14",
      },
    ],
    events: [
      {
        id: "e1",
        nama: "Peken Zero-Waste Challenge",
        tanggal: "2024-12-07",
        lokasi: "Taman Sari",
        status: "selesai",
        peran: "Mitra BYOB",
        deskripsi: "Penyediaan wadah bambu untuk kampanye zero-waste Peken.",
      },
    ],
  },
  {
    id: "kolektif-coret",
    slug: "kolektif-coret",
    nama: "Kolektif Coret",
    role: "kolaborator",
    subsektor: ["Seni Rupa", "Desain Produk"],
    kota: "Banyumas",
    status: "aktif",
    foto_url: null,
    cover_url: null,
    bio: "Enam seniman muda yang percaya seni milik jalan, bukan galeri. Mural permanen mereka di Taman Sari menjadi latar ikonik Peken Banyumasan.",
    tanggal_daftar: "2023-07-10",
    total_karya: 6,
    total_story: 22,
    total_event: 3,
    karya: [
      {
        id: "k1",
        judul: "Mural Kota Lama",
        gambar_url: "./assets/gallery-5.jpg",
        subsektor: "Seni Rupa",
        tahun: 2024,
        deskripsi: "Mural permanen pada dinding selatan Taman Sari, dilukis selama dua minggu.",
        featured: true,
      },
    ],
    story: [
      {
        id: "s1",
        konten:
          "Dua minggu, enam tangan, satu tembok. Mural Kota Lama bukan hanya lukisan — ia adalah percakapan antara tradisi dan masa depan.",
        media_url: null,
        tags: ["Mural", "Seni Publik"],
        like_count: 112,
        status: "aktif",
        created_at: "2024-11-02",
      },
    ],
    events: [
      {
        id: "e1",
        nama: "Open Call Mural Banyumas",
        tanggal: "2025-08-01",
        lokasi: "Kota Lama Banyumas",
        status: "published",
        peran: "Seniman Terpilih",
        deskripsi: "Open call karya mural untuk ruang publik baru di kota lama.",
      },
    ],
  },
  {
    id: "petani-kopi-baturraden",
    slug: "petani-kopi-baturraden",
    nama: "Petani Kopi Baturraden",
    role: "artisan",
    kategori_usaha: ["F&B / Kuliner"],
    kota: "Baturraden, Banyumas",
    status: "aktif",
    foto_url: null,
    cover_url: null,
    bio: "Kelompok tani kopi di ketinggian 800 mdpl lereng Gunung Slamet. Robusta single-origin yang disangrai sendiri dan disajikan rutin di Coffee & Conversation Peken.",
    tanggal_daftar: "2023-09-05",
    total_karya: 3,
    total_story: 11,
    total_event: 4,
    karya: [
      {
        id: "k1",
        judul: "Kopi Robusta Banyumas",
        gambar_url: "./assets/program-coffee.jpg",
        kategori_usaha: "F&B / Kuliner",
        tahun: 2024,
        deskripsi: "Robusta single-origin dari ketinggian 800 mdpl di Baturraden.",
        featured: true,
      },
    ],
    story: [
      {
        id: "s1",
        konten:
          "Musim panen kali ini luar biasa. Kondisi cuaca yang sempurna menghasilkan biji kopi dengan rasa lebih clean dan fruity dari biasanya.",
        media_url: null,
        tags: ["Kopi", "Panen"],
        like_count: 29,
        status: "aktif",
        created_at: "2025-03-30",
      },
    ],
    events: [
      {
        id: "e1",
        nama: "Coffee & Conversation #12",
        tanggal: "2025-05-03",
        lokasi: "Taman Sari",
        status: "published",
        peran: "Penyedia Kopi",
        deskripsi: "Sesi diskusi santai sambil menikmati kopi Baturraden.",
      },
      {
        id: "e2",
        nama: "Harvest Open Farm",
        tanggal: "2025-04-20",
        lokasi: "Kebun Kopi, Baturraden",
        status: "berlangsung",
        peran: "Tuan Rumah",
        deskripsi: "Kunjungan terbuka ke kebun kopi saat panen raya.",
      },
    ],
  },
  {
    id: "studio-wignya",
    slug: "studio-wignya",
    nama: "Studio Wignya",
    role: "kolaborator",
    subsektor: ["Desain Produk", "Seni Rupa"],
    kota: "Purwokerto, Banyumas",
    status: "aktif",
    foto_url: null,
    cover_url: null,
    bio: "Studio desain yang berspesialisasi dalam identitas budaya Banyumasan. Merilis tipografi aksara Jawa sebagai font terbuka hasil riset bersama Universitas Jenderal Soedirman.",
    tanggal_daftar: "2022-08-20",
    total_karya: 4,
    total_story: 17,
    total_event: 3,
    karya: [
      {
        id: "k1",
        judul: "Aksara Jawa Banyumasan",
        gambar_url: "./assets/gallery-6.jpg",
        subsektor: "Desain Produk",
        tahun: 2023,
        deskripsi: "Tipografi aksara Jawa varian Banyumasan, dirilis sebagai font terbuka.",
        featured: true,
      },
    ],
    story: [
      {
        id: "s1",
        konten:
          "Font aksara Jawa Banyumasan sudah diunduh lebih dari 3.000 kali di seluruh dunia. Identitas lokal ternyata bisa berdampak global jika dikemas dengan baik. ✍️",
        media_url: null,
        tags: ["Desain Grafis", "Aksara"],
        like_count: 63,
        status: "aktif",
        created_at: "2025-01-15",
      },
    ],
    events: [
      {
        id: "e1",
        nama: "Peken Brand Identity Workshop",
        tanggal: "2025-02-08",
        lokasi: "Co-working UNSOED",
        status: "selesai",
        peran: "Fasilitator",
        deskripsi: "Workshop identitas visual untuk Artisan lokal Banyumas.",
      },
    ],
  },
  {
    id: "bu-tasrip-komunitas",
    slug: "bu-tasrip-komunitas",
    nama: "Bu Tasrip & Komunitas",
    role: "artisan",
    kategori_usaha: ["Kriya"],
    kota: "Desa Banjarsari, Banyumas",
    status: "pending",
    foto_url: null,
    cover_url: null,
    bio: "Komunitas perempuan Desa Banjarsari yang mengembangkan kerajinan anyaman pandan modular. Karya mereka bisa dirangkai menjadi berbagai produk fungsional.",
    tanggal_daftar: "2023-06-01",
    total_karya: 3,
    total_story: 6,
    total_event: 2,
    karya: [
      {
        id: "k1",
        judul: "Anyaman Pandan Modular",
        gambar_url: "./assets/gallery-perform-1.jpg",
        kategori_usaha: "Kriya",
        tahun: 2023,
        deskripsi:
          "Anyaman pandan modular yang bisa dirangkai menjadi tas, alas duduk, atau partisi ruang.",
        featured: true,
      },
    ],
    story: [
      {
        id: "s1",
        konten:
          "Dua puluh perempuan di desa kami kini punya penghasilan dari kerajinan anyaman pandan. Kecil tapi pasti — dan itu lebih dari cukup untuk membuat kami terus berkarya.",
        media_url: null,
        tags: ["Kriya", "Komunitas"],
        like_count: 94,
        status: "aktif",
        created_at: "2024-09-20",
      },
    ],
    events: [
      {
        id: "e1",
        nama: "Peken Makers Market",
        tanggal: "2024-08-17",
        lokasi: "Taman Sari",
        status: "selesai",
        peran: "Peserta",
        deskripsi: "Penjualan anyaman pandan di pasar makers Peken.",
      },
    ],
  },
];

/* ── pixel-band motif geometry (verbatim from the origin bundle) ────────── */
export const PIXEL_SIZE = 40;
export const PIXEL_VIEWBOX = [1440, 320];
export const PIXEL_POSITIONS = [
  [0, 280], [40, 280], [80, 280], [120, 280], [160, 280], [200, 280], [240, 280],
  [0, 240], [40, 240], [120, 240], [160, 240], [200, 240],
  [40, 200], [80, 200], [160, 200],
  [0, 160], [120, 160],
  [40, 120],
  [320, 280], [400, 280], [520, 280], [880, 280], [1000, 280], [1080, 280],
  [1160, 280], [1200, 280], [1240, 280], [1280, 280], [1320, 280], [1360, 280],
  [1400, 280],
  [1200, 240], [1240, 240], [1280, 240], [1360, 240], [1400, 240],
  [1240, 200], [1320, 200], [1360, 200],
  [1280, 160], [1400, 160],
  [1360, 120],
];

/** Origin content API host (kept for parity; see src/lib/api.js). */
export const API_BASE = "https://company-profile-pb.up.railway.app";
