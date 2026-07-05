export const socials = [
  { key: 'whatsapp', label: 'WhatsApp', icon: '/icons/whatsapp.svg', href: 'https://wa.me/6281320271087' },
  { key: 'instagram', label: 'Instagram', icon: '/icons/instagram.svg', href: 'https://instagram.com/_naufllar2' },
  { key: 'youtube', label: 'YouTube', icon: '/icons/youtube.svg', href: 'https://www.youtube.com/@NaufalNetwork' },
  { key: 'tiktok', label: 'TikTok', icon: '/icons/tiktok.svg', href: 'https://www.tiktok.com/@dtbypal' },
  { key: 'linkedin', label: 'LinkedIn', icon: '/icons/linkedin.svg', href: 'https://linkedin.com/in/naufal-athaillah-59a429377/' },
];

export const skills = [
  { id: 'electronics', level: 80 },
  { id: 'networking', level: 75 },
  { id: 'webdev', level: 70 },
  { id: 'video', level: 85 },
  { id: 'content', level: 90 },
];

export const services = [
  { id: 'web', span: 'md:col-span-2' },
  { id: 'electronics', span: '' },
  { id: 'video', span: '' },
];

export const projects = [
  {
    id: 'counter',
    videoId: 'kNY7AudbsfM',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'antenna',
    videoId: 'yED4_Vk7yAE',
    span: '',
  },
  {
    id: 'boq',
    videoId: 'ER8Xr4RdwNQ',
    span: '',
  },
  {
    id: 'dynweb',
    videoId: '-27lzwjwl3k',
    span: 'md:col-span-2',
  },
];

export const certifications = [
  {
    id: 'osis',
    image: '/images/sertifikat_anggota_osis.jpg',
    tag: 'OSIS',
  },
  {
    id: 'pkl',
    image: '/images/setifikat_pkl_pt_itb.jpg',
    tag: 'PKL',
  },
  {
    id: 'pijar',
    image: '/images/certificate-course-web-app-12-11-2024.jpg',
    tag: 'PT',
  },
];

export const blogPosts = [
  { id: 'elektronika-dasar', date: '2024-01-15' },
  { id: 'portfolio-html-css-js', date: '2024-02-20' },
];

export const galleryPhotos = [
  { id: 'gallery-1', src: '/images/gallery-1.jpg' },
  { id: 'gallery-2', src: '/images/gallery-2.jpg' },
];

export const copy = {
  id: {
    nav: { home: 'Beranda', about: 'Tentang', services: 'Layanan', projects: 'Proyek', certifications: 'Sertifikasi', blog: 'Blog', contact: 'Kontak' },
    hero: {
      eyebrow: 'SYS://NAUFAL_NETWORK — STATUS: ONLINE',
      title1: 'Hai, saya',
      name: 'Naufal',
      tagline: 'Full-Stack Developer',
      description:
        'Saya membongkar, merakit, dan mendokumentasikan proyek elektronika, jaringan, dan pengembangan web — lalu membagikannya lewat channel YouTube Naufal Network.',
      cta1: 'Lihat Proyek',
      cta2: 'Hubungi Saya',
    },
    about: {
      eyebrow: 'PROFIL',
      title: 'Tentang Saya',
      p1: 'Saya seorang enthusiast teknologi dengan fokus pada elektronika, jaringan komputer, dan pengembangan web. Lewat channel YouTube Naufal Network, saya berbagi proyek praktis yang bisa langsung diaplikasikan.',
      p2: 'Dengan latar belakang teknik, saya senang mengeksplorasi berbagai sisi teknologi dan membagikan pengetahuan itu ke orang lain — tujuannya konten yang edukatif tapi tetap mudah dicerna.',
      skillsTitle: 'Keahlian',
      skills: {
        electronics: 'Elektronika Dasar',
        networking: 'Jaringan Komputer',
        webdev: 'Pengembangan Web',
        video: 'Video Editing',
        content: 'Konten Kreatif',
      },
    },
    services: {
      eyebrow: 'PENAWARAN',
      title: 'Layanan Saya',
      subtitle: 'Layanan yang saya tawarkan dalam bidang teknologi dan konten kreatif.',
      items: {
        web: { title: 'Web Development', desc: 'Pembuatan website modern, responsif, dan SEO-friendly.' },
        electronics: { title: 'Elektronika', desc: 'Proyek dan konsultasi rangkaian elektronika serta IoT.' },
        video: { title: 'Video & Konten', desc: 'Produksi video edukatif dan konten kreatif untuk digital.' },
      },
    },
    projects: {
      eyebrow: 'ARSIP',
      title: 'Proyek Terbaru',
      subtitle: 'Beberapa proyek yang telah saya kerjakan dan bagikan di YouTube.',
      watch: 'Tonton di YouTube',
      items: {
        counter: { title: 'Rangkaian Up Counter', desc: 'Demonstrasi rangkaian digital up counter menggunakan IC 7493 dengan tampilan 7-segment.' },
        antenna: { title: 'Antena Yagi untuk TV Digital', desc: 'Panduan membuat antena Yagi sederhana untuk menangkap sinyal TV digital.' },
        boq: { title: 'BoQ Fiber Optik', desc: 'Pembahasan detail tentang Bill of Quantity (BoQ) untuk proyek fiber optik.' },
        dynweb: { title: 'Website Dinamis', desc: 'Tutorial membuat website dinamis interaktif menggunakan HTML, CSS, dan JavaScript.' },
      },
    },
    certifications: {
      eyebrow: 'ARSIP',
      title: 'Sertifikasi',
      subtitle: 'Sertifikasi dan pelatihan yang telah diselesaikan.',
      view: 'Lihat Sertifikat',
      items: {
        osis: { title: 'SMK Telkom Bandung', desc: 'Sertifikat Apresiasi sebagai Anggota OSIS Masa Bakti 2024/2025', status: 'Certificate of Appreciation' },
        pkl: { title: 'PT. Inovasi Tjaraka Buana', desc: 'Sertifikat Praktek Kerja Lapangan selama 3 bulan (Juli–September 2025) dengan sangat baik', status: 'Certificate of Internship' },
        pijar: { title: 'Pijar Talenta', desc: 'Program pengembangan talenta oleh Telkom Corporate University Center', status: 'Certificate of Completion' },
      },
    },
    blog: {
      eyebrow: 'LOG',
      title: 'Blog & Artikel',
      subtitle: 'Tulisan dan update terbaru seputar teknologi dan proyek.',
      readMore: 'Baca Selengkapnya',
      galleryTitle: 'Galeri Foto',
      gallerySubtitle: 'Sedikit dokumentasi pribadi di luar konten teknis.',
      items: {
        'elektronika-dasar': { title: 'Memulai Belajar Elektronika Dasar', excerpt: 'Panduan singkat untuk pemula yang ingin memulai belajar elektronika dari dasar, mulai dari komponen hingga rangkaian sederhana.' },
        'portfolio-html-css-js': { title: 'Membuat Website Portfolio dengan HTML, CSS, dan JavaScript', excerpt: 'Tutorial membuat website portfolio statis tanpa framework, cocok untuk pemula yang ingin belajar web development.' },
      },
    },
    contact: {
      eyebrow: 'SAMBUNGKAN',
      title: 'Hubungi Saya',
      subtitle: 'Silakan hubungi saya melalui platform berikut untuk kolaborasi atau pertanyaan.',
      items: {
        whatsapp: { desc: 'Chat langsung untuk respon cepat', cta: 'Kirim Pesan' },
        instagram: { desc: 'Follow untuk update terbaru', cta: 'Kunjungi Profil' },
        youtube: { desc: 'Subscribe untuk konten terbaru', cta: 'Kunjungi Channel' },
        tiktok: { desc: 'Follow untuk konten pendek', cta: 'Follow Saya' },
        linkedin: { desc: 'Koneksi profesional', cta: 'Kunjungi Profil' },
      },
    },
    footer: {
      brand: 'Naufal Network',
      rights: 'Seluruh Hak Cipta.',
      backToTop: 'Kembali ke atas',
    },
  },
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', projects: 'Projects', certifications: 'Certifications', blog: 'Blog', contact: 'Contact' },
    hero: {
      eyebrow: 'SYS://NAUFAL_NETWORK — STATUS: ONLINE',
      title1: 'Hi, I\'m',
      name: 'Naufal',
      tagline: 'Full-Stack Developer',
      description:
        'I take apart, build, and document electronics, networking, and web-dev projects — then share them on the Naufal Network YouTube channel.',
      cta1: 'View Projects',
      cta2: 'Get in Touch',
    },
    about: {
      eyebrow: 'PROFILE',
      title: 'About Me',
      p1: "I'm a technology enthusiast focused on electronics, computer networking, and web development. Through the Naufal Network YouTube channel, I share practical projects people can put to use right away.",
      p2: 'With an engineering background, I enjoy exploring different sides of technology and passing that knowledge on — the goal is content that teaches without losing anyone.',
      skillsTitle: 'Skills',
      skills: {
        electronics: 'Basic Electronics',
        networking: 'Computer Networking',
        webdev: 'Web Development',
        video: 'Video Editing',
        content: 'Creative Content',
      },
    },
    services: {
      eyebrow: 'OFFERING',
      title: 'Services',
      subtitle: 'What I offer across technology and creative content.',
      items: {
        web: { title: 'Web Development', desc: 'Modern, responsive, SEO-friendly websites.' },
        electronics: { title: 'Electronics', desc: 'Circuit projects and consultation, including IoT.' },
        video: { title: 'Video & Content', desc: 'Educational video production and creative digital content.' },
      },
    },
    projects: {
      eyebrow: 'ARCHIVE',
      title: 'Recent Projects',
      subtitle: "Projects I've built and shared on YouTube.",
      watch: 'Watch on YouTube',
      items: {
        counter: { title: 'Up Counter Circuit', desc: 'A digital up-counter circuit demo using the 7493 IC with a 7-segment display.' },
        antenna: { title: 'Yagi Antenna for Digital TV', desc: 'A guide to building a simple Yagi antenna to pick up digital TV signal.' },
        boq: { title: 'Fiber Optic BoQ', desc: 'A detailed walkthrough of a Bill of Quantity (BoQ) for a fiber optic project.' },
        dynweb: { title: 'Dynamic Website', desc: 'A tutorial on building an interactive dynamic website with HTML, CSS, and JavaScript.' },
      },
    },
    certifications: {
      eyebrow: 'ARCHIVE',
      title: 'Certifications',
      subtitle: 'Certifications and training completed so far.',
      view: 'View Certificate',
      items: {
        osis: { title: 'SMK Telkom Bandung', desc: 'Certificate of Appreciation as an OSIS member, 2024/2025 term', status: 'Certificate of Appreciation' },
        pkl: { title: 'PT. Inovasi Tjaraka Buana', desc: '3-month internship (July–September 2025), completed with distinction', status: 'Certificate of Internship' },
        pijar: { title: 'Pijar Talenta', desc: 'A talent development program by Telkom Corporate University Center', status: 'Certificate of Completion' },
      },
    },
    blog: {
      eyebrow: 'LOG',
      title: 'Blog & Articles',
      subtitle: 'Recent writing and updates on tech and projects.',
      readMore: 'Read More',
      galleryTitle: 'Photo Gallery',
      gallerySubtitle: 'A little personal documentation outside the technical content.',
      items: {
        'elektronika-dasar': { title: 'Getting Started with Basic Electronics', excerpt: 'A short guide for beginners wanting to start learning electronics from the ground up, from components to simple circuits.' },
        'portfolio-html-css-js': { title: 'Building a Portfolio Site with HTML, CSS & JavaScript', excerpt: 'A tutorial on building a static portfolio site with no framework — good for beginners learning web development.' },
      },
    },
    contact: {
      eyebrow: 'CONNECT',
      title: 'Get in Touch',
      subtitle: 'Reach out through any of these platforms for collaboration or questions.',
      items: {
        whatsapp: { desc: 'Chat directly for a quick response', cta: 'Send a Message' },
        instagram: { desc: 'Follow for the latest updates', cta: 'Visit Profile' },
        youtube: { desc: 'Subscribe for new content', cta: 'Visit Channel' },
        tiktok: { desc: 'Follow for short-form content', cta: 'Follow Me' },
        linkedin: { desc: 'Professional networking', cta: 'Visit Profile' },
      },
    },
    footer: {
      brand: 'Naufal Network',
      rights: 'All Rights Reserved.',
      backToTop: 'Back to top',
    },
  },
};
