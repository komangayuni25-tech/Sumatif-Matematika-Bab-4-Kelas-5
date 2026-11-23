import { Question } from '../types';

/**
 * Bank Soal Standar Asesmen Sumatif Mata Pelajaran MATEMATIKA
 * Kelas 5 SD Negeri 3 Loloan Timur - Kurikulum Merdeka
 * Lingkup Materi:
 * - Keliling segitiga, segi empat, dan segi banyak beraturan
 * - Keliling bangun datar gabungan
 * - Luas daerah bangun datar & bangun datar gabungan
 * - Hubungan keliling dan luas daerah bangun datar serta bangun gabungan
 *
 * Komposisi Soal:
 * - 30 Butir Pilihan Ganda (PG) [Nomor 1 - 30] (Bobot: 2 poin/butir = 60 poin)
 * - 5 Butir Pilihan Ganda Kompleks Kategori (3 Pernyataan Benar/Salah) [Nomor 31 - 35] (Bobot: 6 poin/butir = 30 poin)
 * Total: 35 Butir Soal (Skor Maksimal: 90 poin -> Nilai Akhir Skala 100)
 */

const TP1 = 'Mengenali situasi soal (konteks) yang melibatkan keliling bangun datar';
const TP2 = 'Menentukan konsep keliling bangun datar sebagai jumlahan panjang sisi-sisinya';
const TP3 = 'Menemukan keliling berbagai jenis segitiga (segitiga sembarang, segitiga sama sisi, segitiga sama kaki)';
const TP4 = 'Menemukan keliling berbagai jenis segi empat (persegi panjang, jajargenjang, layang-layang, persegi, belah ketupat, trapesium, dan segi empat sembarang)';
const TP5 = 'Menemukan keliling segi lima beraturan, segi enam beraturan, dan segi delapan beraturan';
const TP6 = 'Mendekomposisikan bangun datar gabungan lalu menemukan cara menentukan keliling dan luas daerah bangun datar serta hubungan keduanya';

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // BAGIAN I: 30 SOAL PILIHAN GANDA (PG)
  // ============================================================================

  // --- TP 1: SITUASI SOAL (KONTEKS) KELILING BANGUN DATAR (SOAL 1 - 4) ---
  {
    id: 1,
    type: 'pg',
    element: TP1,
    topic: 'Konteks Keliling Kebun (Persegi Panjang)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyelesaikan masalah kontekstual pemagaran kebun berbentuk persegi panjang menggunakan konsep keliling.',
    image: `<svg viewBox="0 0 420 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-md">
      <rect width="420" height="155" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <rect x="85" y="28" width="250" height="95" rx="4" fill="#dcfce7" stroke="#15803d" stroke-width="3" stroke-dasharray="8 4"/>
      <text x="210" y="72" font-family="sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">KEBUN PAK MADE</text>
      <text x="210" y="90" font-family="sans-serif" font-size="10" fill="#15803d" text-anchor="middle">(Dipasang Pagar di Sekeliling Tepi)</text>
      <text x="210" y="142" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Panjang = 12 m</text>
      <text x="372" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">8 m</text>
    </svg>`,
    text: 'Pak Made ingin memasang pagar bambu tepat di sekeliling kebun miliknya yang berbentuk persegi panjang seperti gambar di atas. Panjang kebun 12 m dan lebarnya 8 m. Panjang pagar bambu minimal yang dibutuhkan Pak Made adalah ...',
    options: [
      { id: 'A', text: '40 m' },
      { id: 'B', text: '20 m' },
      { id: 'C', text: '96 m' },
      { id: 'D', text: '32 m' },
    ],
    correctAnswer: 'A',
    explanation: 'Pemasangan pagar di sekeliling kebun berarti menghitung keliling persegi panjang. Keliling = 2 × (panjang + lebar) = 2 × (12 + 8) = 2 × 20 = 40 m.',
  },
  {
    id: 2,
    type: 'pg',
    element: TP1,
    topic: 'Konteks Keliling Bingkai Foto (Persegi)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan panjang pita yang diperlukan untuk menghias tepi bingkai foto berbentuk persegi.',
    image: `<svg viewBox="0 0 380 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm">
      <rect width="380" height="155" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <rect x="135" y="22" width="110" height="110" rx="4" fill="#ffffff" stroke="#2563eb" stroke-width="4"/>
      <rect x="150" y="37" width="80" height="80" fill="#dbeafe" stroke="#93c5fd" stroke-width="1.5"/>
      <circle cx="190" cy="68" r="14" fill="#60a5fa"/>
      <path d="M162 108 Q190 84 218 108 Z" fill="#3b82f6"/>
      <text x="190" y="147" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Sisi Bingkai = 25 cm</text>
      <text x="275" y="80" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#1e3a8a" text-anchor="start">25 cm</text>
    </svg>`,
    text: 'Dayu akan menempelkan pita warna-warni di seluruh tepi luar bingkai foto berbentuk persegi yang panjang sisinya 25 cm. Panjang pita minimal yang harus disiapkan Dayu adalah ...',
    options: [
      { id: 'A', text: '50 cm' },
      { id: 'B', text: '100 cm' },
      { id: 'C', text: '125 cm' },
      { id: 'D', text: '625 cm' },
    ],
    correctAnswer: 'B',
    explanation: 'Pita ditempel di seluruh tepi bingkai persegi sebanyak 4 sisi sama panjang. Keliling = 4 × 25 cm = 100 cm.',
  },
  {
    id: 3,
    type: 'pg',
    element: TP1,
    topic: 'Identifikasi Situasi Keliling vs Luas',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan situasi kehidupan sehari-hari yang melibatkan perhitungan keliling bangun datar dan luas daerah.',
    text: 'Perhatikan kegiatan-kegiatan berikut! Situasi manakah yang diselesaikan dengan cara menghitung KELILING bangun datar?',
    options: [
      { id: 'A', text: 'Memasang lis kayu di sepanjang tepi sekeliling papan tulis kelas' },
      { id: 'B', text: 'Mengecat seluruh permukaan tembok ruang kelas dengan cat biru' },
      { id: 'C', text: 'Menghitung banyaknya ubin keramik untuk menutupi lantai ruang tamu' },
      { id: 'D', text: 'Menanam rumput hijau di seluruh permukaan taman sekolah' },
    ],
    correctAnswer: 'A',
    explanation: 'Memasang lis kayu di tepi sekeliling papan tulis melibatkan ukuran batas luar (keliling). Sementara mengecat tembok, memasang ubin lantai, dan menanam rumput di permukaan berkaitan dengan luas daerah.',
  },
  {
    id: 4,
    type: 'pg',
    element: TP1,
    topic: 'Konteks Keliling Lintasan Lari',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan total jarak tempuh mengelilingi lapangan berbentuk persegi sebanyak beberapa putaran.',
    text: 'Sebuah lapangan upacara berbentuk persegi memiliki panjang sisi 15 m. Pada pelajaran olahraga, siswa kelas 5 berlari mengelilingi tepi lapangan tersebut sebanyak 2 putaran penuh. Total jarak yang ditempuh siswa adalah ...',
    options: [
      { id: 'A', text: '60 m' },
      { id: 'B', text: '90 m' },
      { id: 'C', text: '120 m' },
      { id: 'D', text: '225 m' },
    ],
    correctAnswer: 'C',
    explanation: 'Jarak 1 putaran sama dengan keliling persegi = 4 × 15 m = 60 m. Karena berlari 2 putaran penuh, total jaraknya = 2 × 60 m = 120 m.',
  },

  // --- TP 2: KONSEP KELILING SEBAGAI JUMLAHAN PANJANG SISI (SOAL 5 - 8) ---
  {
    id: 5,
    type: 'pg',
    element: TP2,
    topic: 'Konsep Dasar Keliling Bangun Datar',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan konsep dasar keliling bangun datar sebagai jumlahan seluruh panjang sisi terluarnya.',
    text: 'Secara konsep dasar, keliling suatu bangun datar ditentukan dengan cara ...',
    options: [
      { id: 'A', text: 'Menjumlahkan panjang seluruh sisi terluar yang membatasi bangun datar tersebut' },
      { id: 'B', text: 'Mengalikan sisi terpanjang dengan sisi terpendek pada bangun datar' },
      { id: 'C', text: 'Menghitung banyaknya titik sudut yang dimiliki bangun datar tersebut' },
      { id: 'D', text: 'Membagi luas permukaan bangun datar dengan jumlah sisinya' },
    ],
    correctAnswer: 'A',
    explanation: 'Keliling bangun datar adalah jumlah panjang seluruh sisi terluar yang mengelilingi dan membatasi bangun datar tersebut.',
  },
  {
    id: 6,
    type: 'pg',
    element: TP2,
    topic: 'Jumlahan Sisi Bangun Tidak Beraturan',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan keliling segi lima tidak beraturan dengan menjumlahkan panjang kelima sisinya.',
    image: `<svg viewBox="0 0 400 165" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-md">
      <rect width="400" height="165" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <polygon points="150,25 260,35 295,105 200,140 105,95" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
      <text x="206" y="23" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#92400e" text-anchor="middle">6 cm</text>
      <text x="292" y="68" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#92400e" text-anchor="start">8 cm</text>
      <text x="262" y="135" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#92400e" text-anchor="start">5 cm</text>
      <text x="142" y="133" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#92400e" text-anchor="end">9 cm</text>
      <text x="112" y="60" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#92400e" text-anchor="end">7 cm</text>
    </svg>`,
    text: 'Perhatikan gambar bangun datar segi lima tidak beraturan di atas! Keliling bangun datar tersebut adalah ...',
    options: [
      { id: 'A', text: '30 cm' },
      { id: 'B', text: '35 cm' },
      { id: 'C', text: '38 cm' },
      { id: 'D', text: '42 cm' },
    ],
    correctAnswer: 'B',
    explanation: 'Keliling diperoleh dengan menjumlahkan panjang seluruh sisi-sisinya: 6 + 8 + 5 + 9 + 7 = 35 cm.',
  },
  {
    id: 7,
    type: 'pg',
    element: TP2,
    topic: 'Keliling pada Kertas Berpetak (Grid)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan keliling bangun datar pada bidang berpetak satuan 1 cm dengan menghitung panjang tepinya.',
    image: `<svg viewBox="0 0 380 165" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm">
      <rect width="380" height="165" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <g transform="translate(115, 22)">
        <!-- Grid lines 6x4 (each cell 26px) -->
        <path d="M0,0 H156 M0,26 H156 M0,52 H156 M0,78 H156 M0,104 H156" stroke="#cbd5e1" stroke-width="1"/>
        <path d="M0,0 V104 M26,0 V104 M52,0 V104 M78,0 V104 M104,0 V104 M130,0 V104 M156,0 V104" stroke="#cbd5e1" stroke-width="1"/>
        <!-- L-shape: width 4 cells (104), height 3 cells (78); step in: top 2 cells (52), down 1 cell (26), right 2 cells (52), down 2 cells (52) -->
        <polygon points="26,26 78,26 78,52 130,52 130,104 26,104" fill="#3b82f6" fill-opacity="0.35" stroke="#1d4ed8" stroke-width="3"/>
      </g>
      <text x="190" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">1 petak sisi = 1 cm</text>
    </svg>`,
    text: 'Perhatikan gambar bangun berwarna biru pada kertas berpetak di atas! Jika panjang sisi setiap petak adalah 1 cm, keliling bangun biru tersebut adalah ...',
    options: [
      { id: 'A', text: '10 cm' },
      { id: 'B', text: '12 cm' },
      { id: 'C', text: '14 cm' },
      { id: 'D', text: '16 cm' },
    ],
    correctAnswer: 'C',
    explanation: 'Hitung jumlah panjang seluruh garis tepi terluar bangun biru: sisi kiri = 3 cm, sisi atas = 2 cm, turun = 1 cm, kanan = 2 cm, sisi kanan bawah = 2 cm, sisi bawah = 4 cm. Jumlah = 3 + 2 + 1 + 2 + 2 + 4 = 14 cm.',
  },
  {
    id: 8,
    type: 'pg',
    element: TP2,
    topic: 'Menentukan Panjang Sisi Belum Diketahui dari Keliling',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan panjang satu sisi yang belum diketahui jika keliling dan panjang sisi lainnya diketahui.',
    text: 'Sebuah bangun segi empat sembarang memiliki keliling tepat 44 cm. Jika panjang tiga sisinya berturut-turut adalah 12 cm, 9 cm, dan 13 cm, maka panjang sisi keempat adalah ...',
    options: [
      { id: 'A', text: '8 cm' },
      { id: 'B', text: '10 cm' },
      { id: 'C', text: '11 cm' },
      { id: 'D', text: '12 cm' },
    ],
    correctAnswer: 'B',
    explanation: 'Keliling = jumlah 4 sisi. Jumlah tiga sisi = 12 + 9 + 13 = 34 cm. Maka sisi keempat = 44 - 34 = 10 cm.',
  },

  // --- TP 3: KELILING BERBAGAI JENIS SEGITIGA (SOAL 9 - 13) ---
  {
    id: 9,
    type: 'pg',
    element: TP3,
    topic: 'Keliling Segitiga Sembarang',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menghitung keliling segitiga sembarang berdasarkan panjang ketiga sisinya.',
    image: `<svg viewBox="0 0 380 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm">
      <rect width="380" height="155" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <polygon points="85,120 295,120 150,32" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
      <text x="190" y="139" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">AB = 14 cm</text>
      <text x="106" y="72" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#1e3a8a" text-anchor="end">AC = 11 cm</text>
      <text x="235" y="72" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#1e3a8a" text-anchor="start">BC = 9 cm</text>
      <text x="75" y="128" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">A</text>
      <text x="302" y="128" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">B</text>
      <text x="150" y="25" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">C</text>
    </svg>`,
    text: 'Perhatikan gambar segitiga sembarang ABC di atas! Panjang AB = 14 cm, BC = 9 cm, dan AC = 11 cm. Keliling segitiga ABC adalah ...',
    options: [
      { id: 'A', text: '32 cm' },
      { id: 'B', text: '34 cm' },
      { id: 'C', text: '36 cm' },
      { id: 'D', text: '44 cm' },
    ],
    correctAnswer: 'B',
    explanation: 'Keliling segitiga sembarang = AB + BC + AC = 14 + 9 + 11 = 34 cm.',
  },
  {
    id: 10,
    type: 'pg',
    element: TP3,
    topic: 'Keliling Segitiga Sama Sisi',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan keliling segitiga sama sisi yang diketahui panjang satu sisinya.',
    image: `<svg viewBox="0 0 380 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm">
      <rect width="380" height="155" rx="12" fill="#fefce8" stroke="#fde047" stroke-width="1.5"/>
      <polygon points="190,24 125,128 255,128" fill="#fef08a" stroke="#ca8a04" stroke-width="3.5"/>
      <text x="190" y="96" font-family="sans-serif" font-size="22" font-weight="bold" fill="#a16207" text-anchor="middle">!</text>
      <line x1="152" y1="73" x2="162" y2="79" stroke="#a16207" stroke-width="2.5"/>
      <line x1="228" y1="73" x2="218" y2="79" stroke="#a16207" stroke-width="2.5"/>
      <line x1="190" y1="122" x2="190" y2="134" stroke="#a16207" stroke-width="2.5"/>
      <text x="190" y="147" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#854d0e" text-anchor="middle">Sisi = 30 cm</text>
    </svg>`,
    text: 'Sebuah rambu peringatan lalu lintas berbentuk segitiga sama sisi memiliki panjang setiap sisinya 30 cm. Keliling rambu lalu lintas tersebut adalah ...',
    options: [
      { id: 'A', text: '60 cm' },
      { id: 'B', text: '90 cm' },
      { id: 'C', text: '120 cm' },
      { id: 'D', text: '150 cm' },
    ],
    correctAnswer: 'B',
    explanation: 'Segitiga sama sisi mempunyai 3 sisi yang sama panjang. Keliling = 3 × sisi = 3 × 30 cm = 90 cm.',
  },
  {
    id: 11,
    type: 'pg',
    element: TP3,
    topic: 'Keliling Segitiga Sama Kaki',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menghitung keliling segitiga sama kaki dari panjang alas dan salah satu sisi kakinya.',
    image: `<svg viewBox="0 0 380 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm">
      <rect width="380" height="155" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <polygon points="190,22 130,126 250,126" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <!-- Tick marks on equal legs -->
      <line x1="154" y1="71" x2="166" y2="77" stroke="#15803d" stroke-width="2.5"/>
      <line x1="226" y1="71" x2="214" y2="77" stroke="#15803d" stroke-width="2.5"/>
      <text x="190" y="144" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#14532d" text-anchor="middle">PQ = 10 cm</text>
      <text x="148" y="70" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#14532d" text-anchor="end">13 cm</text>
      <text x="232" y="70" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#14532d" text-anchor="start">13 cm</text>
      <text x="120" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">P</text>
      <text x="255" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Q</text>
      <text x="190" y="16" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">R</text>
    </svg>`,
    text: 'Perhatikan gambar segitiga sama kaki PQR di atas! Panjang alas PQ = 10 cm, sedangkan panjang sisi kakinya PR = QR = 13 cm. Keliling segitiga PQR adalah ...',
    options: [
      { id: 'A', text: '23 cm' },
      { id: 'B', text: '33 cm' },
      { id: 'C', text: '36 cm' },
      { id: 'D', text: '46 cm' },
    ],
    correctAnswer: 'C',
    explanation: 'Keliling segitiga sama kaki = alas + (2 × sisi kaki) = 10 + 13 + 13 = 36 cm.',
  },
  {
    id: 12,
    type: 'pg',
    element: TP3,
    topic: 'Menentukan Panjang Sisi Kaki Segitiga Sama Kaki',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan panjang sisi kaki segitiga sama kaki jika diketahui keliling dan panjang alasnya.',
    text: 'Keliling sebuah segitiga sama kaki diketahui 50 cm. Jika panjang sisi alasnya 14 cm, maka panjang masing-masing sisi kakinya yang sama panjang adalah ...',
    options: [
      { id: 'A', text: '16 cm' },
      { id: 'B', text: '18 cm' },
      { id: 'C', text: '22 cm' },
      { id: 'D', text: '36 cm' },
    ],
    correctAnswer: 'B',
    explanation: 'Jumlah kedua sisi kaki = Keliling - alas = 50 - 14 = 36 cm. Karena kedua sisi kaki sama panjang, panjang masing-masing = 36 ÷ 2 = 18 cm.',
  },
  {
    id: 13,
    type: 'pg',
    element: TP3,
    topic: 'Menentukan Panjang Sisi Segitiga Sama Sisi dari Kawat',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyelesaikan masalah kontekstual menentukan panjang sisi segitiga sama sisi dari panjang kawat total.',
    text: 'Ani memiliki seutas kawat sepanjang 72 cm. Kawat tersebut dibentuk tepat menjadi sebuah segitiga sama sisi tanpa ada kawat yang tersisa. Panjang setiap sisi segitiga yang dibuat Ani adalah ...',
    options: [
      { id: 'A', text: '12 cm' },
      { id: 'B', text: '18 cm' },
      { id: 'C', text: '24 cm' },
      { id: 'D', text: '36 cm' },
    ],
    correctAnswer: 'C',
    explanation: 'Panjang kawat 72 cm merupakan keliling segitiga sama sisi. Karena ketiga sisinya sama panjang, maka panjang setiap sisi = 72 ÷ 3 = 24 cm.',
  },

  // --- TP 4: KELILING BERBAGAI JENIS SEGI EMPAT (SOAL 14 - 20) ---
  {
    id: 14,
    type: 'pg',
    element: TP4,
    topic: 'Keliling Persegi',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menghitung keliling persegi dari panjang sisinya.',
    text: 'Sebuah ubin keramik berbentuk persegi memiliki panjang sisi 20 cm. Keliling ubin keramik tersebut adalah ...',
    options: [
      { id: 'A', text: '40 cm' },
      { id: 'B', text: '60 cm' },
      { id: 'C', text: '80 cm' },
      { id: 'D', text: '400 cm' },
    ],
    correctAnswer: 'C',
    explanation: 'Persegi memiliki 4 sisi sama panjang. Keliling persegi = 4 × sisi = 4 × 20 cm = 80 cm.',
  },
  {
    id: 15,
    type: 'pg',
    element: TP4,
    topic: 'Keliling Persegi Panjang',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menghitung keliling persegi panjang dari gambar yang disajikan.',
    image: `<svg viewBox="0 0 380 145" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm">
      <rect width="380" height="145" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <rect x="85" y="30" width="210" height="80" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
      <text x="190" y="128" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">18 cm</text>
      <text x="305" y="74" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="start">7 cm</text>
    </svg>`,
    text: 'Perhatikan gambar persegi panjang di atas! Panjangnya 18 cm dan lebarnya 7 cm. Keliling persegi panjang tersebut adalah ...',
    options: [
      { id: 'A', text: '25 cm' },
      { id: 'B', text: '43 cm' },
      { id: 'C', text: '50 cm' },
      { id: 'D', text: '126 cm' },
    ],
    correctAnswer: 'C',
    explanation: 'Keliling persegi panjang = 2 × (panjang + lebar) = 2 × (18 + 7) = 2 × 25 = 50 cm.',
  },
  {
    id: 16,
    type: 'pg',
    element: TP4,
    topic: 'Keliling Jajargenjang',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menghitung keliling jajargenjang dengan memilih panjang sisi alas dan sisi miring (mengabaikan garis tinggi).',
    image: `<svg viewBox="0 0 400 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-md">
      <rect width="400" height="155" rx="12" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.5"/>
      <polygon points="110,32 300,32 260,118 70,118" fill="#ede9fe" stroke="#6d28d9" stroke-width="3"/>
      <line x1="110" y1="32" x2="110" y2="118" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4 3"/>
      <rect x="110" y="108" width="10" height="10" fill="none" stroke="#7c3aed" stroke-width="1.5"/>
      <text x="116" y="80" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#6d28d9" text-anchor="start">t = 7 cm</text>
      <text x="165" y="137" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#4c1d95" text-anchor="middle">AB = 16 cm</text>
      <text x="292" y="80" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#4c1d95" text-anchor="start">BC = 9 cm</text>
      <text x="60" y="124" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">A</text>
      <text x="264" y="124" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">B</text>
      <text x="305" y="34" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">C</text>
      <text x="98" y="34" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">D</text>
    </svg>`,
    text: 'Perhatikan gambar jajargenjang ABCD di atas! Diketahui panjang alas AB = 16 cm, sisi miring BC = 9 cm, dan tinggi t = 7 cm. Keliling jajargenjang ABCD adalah ...',
    options: [
      { id: 'A', text: '46 cm' },
      { id: 'B', text: '50 cm' },
      { id: 'C', text: '64 cm' },
      { id: 'D', text: '112 cm' },
    ],
    correctAnswer: 'B',
    explanation: 'Keliling jajargenjang hanya menjumlahkan keempat sisi tepinya (tidak memakai tinggi t). Karena sisi berhadapan sama panjang: AB = CD = 16 cm dan BC = AD = 9 cm. Keliling = 2 × (16 + 9) = 50 cm.',
  },
  {
    id: 17,
    type: 'pg',
    element: TP4,
    topic: 'Keliling Belah Ketupat',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan keliling bangun datar berbentuk belah ketupat.',
    image: `<svg viewBox="0 0 380 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm">
      <rect width="380" height="155" rx="12" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5"/>
      <polygon points="190,20 270,78 190,136 110,78" fill="#d1fae5" stroke="#059669" stroke-width="3"/>
      <text x="242" y="47" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#065f46" text-anchor="start">11 m</text>
      <text x="242" y="116" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#065f46" text-anchor="start">11 m</text>
      <text x="138" y="47" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#065f46" text-anchor="end">11 m</text>
      <text x="138" y="116" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#065f46" text-anchor="end">11 m</text>
    </svg>`,
    text: 'Sebuah taman bunga berbentuk belah ketupat memiliki panjang setiap sisinya 11 m seperti pada gambar. Panjang lintasan tepi sekeliling taman tersebut adalah ...',
    options: [
      { id: 'A', text: '22 m' },
      { id: 'B', text: '33 m' },
      { id: 'C', text: '44 m' },
      { id: 'D', text: '121 m' },
    ],
    correctAnswer: 'C',
    explanation: 'Belah ketupat memiliki 4 sisi yang sama panjang. Keliling = 4 × 11 m = 44 m.',
  },
  {
    id: 18,
    type: 'pg',
    element: TP4,
    topic: 'Keliling Layang-Layang',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan keliling layang-layang yang diketahui panjang sepasang sisi pendek dan sepasang sisi panjangnya.',
    image: `<svg viewBox="0 0 380 165" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm">
      <rect width="380" height="165" rx="12" fill="#fff7ed" stroke="#fed7aa" stroke-width="1.5"/>
      <polygon points="190,18 250,62 190,148 130,62" fill="#ffedd5" stroke="#ea580c" stroke-width="3"/>
      <line x1="190" y1="18" x2="190" y2="148" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="130" y1="62" x2="250" y2="62" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="148" y="38" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9a3412" text-anchor="end">15 cm</text>
      <text x="232" y="38" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9a3412" text-anchor="start">15 cm</text>
      <text x="148" y="114" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9a3412" text-anchor="end">25 cm</text>
      <text x="232" y="114" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9a3412" text-anchor="start">25 cm</text>
    </svg>`,
    text: 'Beni membuat layang-layang seperti gambar di atas dengan panjang dua sisi atas masing-masing 15 cm dan dua sisi bawah masing-masing 25 cm. Panjang benang yang dipasang mengelilingi tepi luar layang-layang tersebut adalah ...',
    options: [
      { id: 'A', text: '40 cm' },
      { id: 'B', text: '65 cm' },
      { id: 'C', text: '80 cm' },
      { id: 'D', text: '95 cm' },
    ],
    correctAnswer: 'C',
    explanation: 'Keliling layang-layang = 15 + 15 + 25 + 25 = 2 × (15 + 25) = 80 cm.',
  },
  {
    id: 19,
    type: 'pg',
    element: TP4,
    topic: 'Keliling Trapesium',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menghitung keliling trapesium sama kaki dari gambar bersisi lengkap dan tinggi pengecoh.',
    image: `<svg viewBox="0 0 400 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-md">
      <rect width="400" height="155" rx="12" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
      <polygon points="145,32 255,32 300,118 100,118" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
      <line x1="145" y1="32" x2="145" y2="118" stroke="#0369a1" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="200" y="24" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0c4a6e" text-anchor="middle">10 cm</text>
      <text x="200" y="137" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0c4a6e" text-anchor="middle">22 cm</text>
      <text x="115" y="75" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0c4a6e" text-anchor="end">10 cm</text>
      <text x="285" y="75" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0c4a6e" text-anchor="start">10 cm</text>
      <text x="150" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="start">t = 8 cm</text>
    </svg>`,
    text: 'Perhatikan gambar trapesium sama kaki di atas! Panjang sisi sejajar atas 10 cm, sisi bawah 22 cm, kedua sisi miringnya masing-masing 10 cm, dan tingginya 8 cm. Keliling trapesium tersebut adalah ...',
    options: [
      { id: 'A', text: '42 cm' },
      { id: 'B', text: '50 cm' },
      { id: 'C', text: '52 cm' },
      { id: 'D', text: '60 cm' },
    ],
    correctAnswer: 'C',
    explanation: 'Keliling trapesium adalah jumlah keempat sisi luarnya (tinggi 8 cm berada di dalam dan tidak dijumlahkan). Keliling = 10 + 22 + 10 + 10 = 52 cm.',
  },
  {
    id: 20,
    type: 'pg',
    element: TP4,
    topic: 'Keliling Segi Empat Sembarang (Konteks Kawat 2 Lapis)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyelesaikan masalah keliling segi empat sembarang dengan pemasangan kawat berlapis.',
    text: 'Sebidang tanah berbentuk segi empat sembarang memiliki panjang sisi berturut-turut 18 m, 24 m, 15 m, dan 21 m. Pemilik tanah akan memasang pagar kawat berduri sebanyak 2 lapis mengelilingi seluruh tepi tanah tersebut. Panjang kawat yang dibutuhkan adalah ...',
    options: [
      { id: 'A', text: '78 m' },
      { id: 'B', text: '136 m' },
      { id: 'C', text: '156 m' },
      { id: 'D', text: '166 m' },
    ],
    correctAnswer: 'C',
    explanation: 'Keliling 1 lapis = 18 + 24 + 15 + 21 = 78 m. Untuk 2 lapis kawat, panjang yang dibutuhkan = 2 × 78 m = 156 m.',
  },

  // --- TP 5: KELILING SEGI LIMA, SEGI ENAM, SEGI DELAPAN BERATURAN (SOAL 21 - 24) ---
  {
    id: 21,
    type: 'pg',
    element: TP5,
    topic: 'Keliling Segi Lima Beraturan',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menghitung keliling segi lima beraturan dari panjang satu sisinya.',
    image: `<svg viewBox="0 0 380 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm">
      <rect width="380" height="160" rx="12" fill="#fdf2f8" stroke="#fbcfe8" stroke-width="1.5"/>
      <polygon points="190,22 246,63 225,128 155,128 134,63" fill="#fce7f3" stroke="#db2777" stroke-width="3"/>
      <text x="190" y="88" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9d174d" text-anchor="middle">Segi Lima</text>
      <text x="190" y="102" font-family="sans-serif" font-size="10" fill="#be185d" text-anchor="middle">Beraturan</text>
      <text x="190" y="146" font-family="sans-serif" font-size="12" font-weight="bold" fill="#831843" text-anchor="middle">Sisi = 12 cm</text>
    </svg>`,
    text: 'Perhatikan gambar segi lima beraturan di atas! Jika panjang setiap sisinya 12 cm, keliling segi lima beraturan tersebut adalah ...',
    options: [
      { id: 'A', text: '48 cm' },
      { id: 'B', text: '60 cm' },
      { id: 'C', text: '72 cm' },
      { id: 'D', text: '84 cm' },
    ],
    correctAnswer: 'B',
    explanation: 'Segi lima beraturan memiliki 5 sisi yang sama panjang. Keliling = 5 × 12 cm = 60 cm.',
  },
  {
    id: 22,
    type: 'pg',
    element: TP5,
    topic: 'Keliling Segi Enam Beraturan',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menghitung keliling segi enam beraturan.',
    image: `<svg viewBox="0 0 380 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm">
      <rect width="380" height="155" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <polygon points="160,28 220,28 250,78 220,128 160,128 130,78" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
      <text x="190" y="82" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Segi Enam</text>
      <text x="190" y="146" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Sisi = 9 cm</text>
    </svg>`,
    text: 'Sebuah hiasan dinding berbentuk segi enam beraturan memiliki panjang sisi 9 cm. Keliling hiasan dinding tersebut adalah ...',
    options: [
      { id: 'A', text: '45 cm' },
      { id: 'B', text: '54 cm' },
      { id: 'C', text: '63 cm' },
      { id: 'D', text: '72 cm' },
    ],
    correctAnswer: 'B',
    explanation: 'Segi enam beraturan mempunyai 6 sisi yang sama panjang. Keliling = 6 × 9 cm = 54 cm.',
  },
  {
    id: 23,
    type: 'pg',
    element: TP5,
    topic: 'Keliling Segi Delapan Beraturan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menghitung keliling segi delapan beraturan berdasarkan gambar.',
    image: `<svg viewBox="0 0 380 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm">
      <rect width="380" height="160" rx="12" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/>
      <polygon points="168,24 212,24 244,56 244,100 212,132 168,132 136,100 136,56" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
      <text x="190" y="82" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">Segi Delapan</text>
      <text x="190" y="149" font-family="sans-serif" font-size="12" font-weight="bold" fill="#7f1d1d" text-anchor="middle">Sisi = 7 cm</text>
    </svg>`,
    text: 'Perhatikan gambar segi delapan beraturan di atas yang panjang tiap sisinya 7 cm! Keliling bangun segi delapan beraturan tersebut adalah ...',
    options: [
      { id: 'A', text: '42 cm' },
      { id: 'B', text: '49 cm' },
      { id: 'C', text: '56 cm' },
      { id: 'D', text: '64 cm' },
    ],
    correctAnswer: 'C',
    explanation: 'Segi delapan beraturan memiliki 8 sisi yang sama panjang. Keliling = 8 × 7 cm = 56 cm.',
  },
  {
    id: 24,
    type: 'pg',
    element: TP5,
    topic: 'Menentukan Panjang Sisi Segi Enam Beraturan',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan panjang sisi segi enam beraturan jika kelilingnya diketahui.',
    text: 'Keliling sebuah kolam ikan berbentuk segi enam beraturan adalah 96 m. Panjang setiap sisi kolam ikan tersebut adalah ...',
    options: [
      { id: 'A', text: '12 m' },
      { id: 'B', text: '14 m' },
      { id: 'C', text: '16 m' },
      { id: 'D', text: '18 m' },
    ],
    correctAnswer: 'C',
    explanation: 'Segi enam beraturan memiliki 6 sisi sama panjang. Maka panjang satu sisinya = Keliling ÷ 6 = 96 ÷ 6 = 16 m.',
  },

  // --- TP 6: DEKOMPOSISI BANGUN GABUNGAN, KELILING, LUAS DAERAH & HUBUNGANNYA (SOAL 25 - 30) ---
  {
    id: 25,
    type: 'pg',
    element: TP6,
    topic: 'Keliling Bangun Gabungan Bentuk L',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan keliling bangun datar gabungan berbentuk huruf L dengan menjumlahkan seluruh sisi terluarnya.',
    image: `<svg viewBox="0 0 400 175" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-md">
      <rect width="400" height="175" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- L-shape: left=12 (120px), bottom=14 (140px), right=5 (50px), inner-h=8 (80px), inner-v=7 (70px), top=6 (60px) -->
      <polygon points="120,25 180,25 180,95 260,95 260,145 120,145" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
      <text x="110" y="90" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="end">12 cm</text>
      <text x="190" y="162" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">14 cm</text>
      <text x="270" y="124" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="start">5 cm</text>
      <text x="220" y="88" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">8 cm</text>
      <text x="186" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="start">7 cm</text>
      <text x="150" y="19" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">6 cm</text>
    </svg>`,
    text: 'Perhatikan gambar bangun datar gabungan berbentuk huruf L di atas! Keliling bangun gabungan tersebut adalah ...',
    options: [
      { id: 'A', text: '39 cm' },
      { id: 'B', text: '46 cm' },
      { id: 'C', text: '52 cm' },
      { id: 'D', text: '58 cm' },
    ],
    correctAnswer: 'C',
    explanation: 'Keliling bangun gabungan dihitung dengan menjumlahkan seluruh panjang sisi terluarnya: 12 + 6 + 7 + 8 + 5 + 14 = 52 cm.',
  },
  {
    id: 26,
    type: 'pg',
    element: TP6,
    topic: 'Keliling Bangun Gabungan (Persegi & Segitiga Sama Sisi)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat mendekomposisikan bangun gabungan persegi dan segitiga sama sisi untuk menemukan keliling terluar tanpa menghitung sisi temu di dalam.',
    image: `<svg viewBox="0 0 380 175" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm">
      <rect width="380" height="175" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <!-- Triangle on top of square -->
      <polygon points="190,18 145,78 235,78" fill="#fef3c7" stroke="#15803d" stroke-width="3"/>
      <rect x="145" y="78" width="90" height="72" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
      <!-- Dashed inner shared edge visual cue -->
      <line x1="147" y1="78" x2="233" y2="78" stroke="#15803d" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="158" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532d" text-anchor="end">10 cm</text>
      <text x="222" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532d" text-anchor="start">10 cm</text>
      <text x="136" y="118" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532d" text-anchor="end">10 cm</text>
      <text x="244" y="118" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532d" text-anchor="start">10 cm</text>
      <text x="190" y="166" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532d" text-anchor="middle">10 cm</text>
    </svg>`,
    text: 'Perhatikan gambar bangun gabungan yang tersusun dari sebuah persegi (sisi 10 cm) dan sebuah segitiga sama sisi (sisi 10 cm) yang menempel rapat di bagian atasnya. Keliling bangun gabungan tersebut adalah ...',
    options: [
      { id: 'A', text: '50 cm' },
      { id: 'B', text: '60 cm' },
      { id: 'C', text: '70 cm' },
      { id: 'D', text: '40 cm' },
    ],
    correctAnswer: 'A',
    explanation: 'Keliling hanya menjumlahkan sisi-sisi terluar (garis pertemuan di tengah tidak dihitung). Ada 5 sisi luar yang panjangnya masing-masing 10 cm (3 sisi persegi + 2 sisi segitiga), sehingga Keliling = 5 × 10 cm = 50 cm.',
  },
  {
    id: 27,
    type: 'pg',
    element: TP6,
    topic: 'Luas Daerah Bangun Datar (Segitiga)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan luas daerah bangun datar segitiga yang diketahui alas dan tingginya.',
    image: `<svg viewBox="0 0 380 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm">
      <rect width="380" height="155" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <polygon points="115,122 275,122 115,32" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
      <rect x="115" y="110" width="12" height="12" fill="none" stroke="#1d4ed8" stroke-width="2"/>
      <text x="195" y="140" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Alas = 12 cm</text>
      <text x="106" y="82" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="end">Tinggi = 8 cm</text>
    </svg>`,
    text: 'Perhatikan gambar segitiga siku-siku dengan panjang alas 12 cm dan tinggi 8 cm di atas! Luas daerah segitiga tersebut adalah ...',
    options: [
      { id: 'A', text: '20 cm²' },
      { id: 'B', text: '48 cm²' },
      { id: 'C', text: '64 cm²' },
      { id: 'D', text: '96 cm²' },
    ],
    correctAnswer: 'B',
    explanation: 'Luas daerah segitiga = ½ × alas × tinggi = ½ × 12 cm × 8 cm = 48 cm².',
  },
  {
    id: 28,
    type: 'pg',
    element: TP6,
    topic: 'Luas Daerah Bangun Datar (Trapesium)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menghitung luas daerah trapesium dari panjang dua sisi sejajar dan tingginya.',
    image: `<svg viewBox="0 0 400 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-md">
      <rect width="400" height="155" rx="12" fill="#ecfeff" stroke="#a5f3fc" stroke-width="1.5"/>
      <polygon points="145,32 255,32 295,118 105,118" fill="#cffafe" stroke="#0891b2" stroke-width="3"/>
      <line x1="145" y1="32" x2="145" y2="118" stroke="#0e7490" stroke-width="1.8" stroke-dasharray="4 3"/>
      <text x="200" y="23" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#155e75" text-anchor="middle">a = 10 m</text>
      <text x="200" y="138" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#155e75" text-anchor="middle">b = 16 m</text>
      <text x="152" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0e7490" text-anchor="start">t = 6 m</text>
    </svg>`,
    text: 'Sebuah taman sekolah berbentuk trapesium memiliki panjang dua sisi sejajar masing-masing 10 m dan 16 m serta tinggi 6 m seperti gambar di atas. Luas daerah taman tersebut adalah ...',
    options: [
      { id: 'A', text: '68 m²' },
      { id: 'B', text: '78 m²' },
      { id: 'C', text: '96 m²' },
      { id: 'D', text: '156 m²' },
    ],
    correctAnswer: 'B',
    explanation: 'Luas trapesium = ½ × (jumlah sisi sejajar) × tinggi = ½ × (10 + 16) × 6 = ½ × 26 × 6 = 78 m².',
  },
  {
    id: 29,
    type: 'pg',
    element: TP6,
    topic: 'Luas Daerah Bangun Gabungan',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat mendekomposisikan bangun gabungan menjadi persegi dan persegi panjang lalu menghitung luas daerah totalnya.',
    image: `<svg viewBox="0 0 400 175" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-md">
      <rect width="400" height="175" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Bottom rect: 14 wide (168px) x 6 high (60px) from x=115,y=85 to x=283,y=145 -->
      <!-- Top square: 6 wide (72px) x 6 high (60px) from x=115,y=25 to x=187,y=85 -->
      <polygon points="115,25 187,25 187,85 283,85 283,145 115,145" fill="#e0e7ff" stroke="#4338ca" stroke-width="3"/>
      <line x1="115" y1="85" x2="187" y2="85" stroke="#6366f1" stroke-width="1.8" stroke-dasharray="5 3"/>
      <text x="151" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#312e81" text-anchor="middle">B</text>
      <text x="200" y="120" font-family="sans-serif" font-size="11" font-weight="bold" fill="#312e81" text-anchor="middle">A</text>
      <text x="151" y="18" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e1b4b" text-anchor="middle">6 cm</text>
      <text x="106" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e1b4b" text-anchor="end">6 cm</text>
      <text x="292" y="120" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e1b4b" text-anchor="start">6 cm</text>
      <text x="199" y="162" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e1b4b" text-anchor="middle">14 cm</text>
    </svg>`,
    text: 'Perhatikan gambar bangun datar gabungan yang didekomposisikan menjadi Persegi Panjang A (14 cm × 6 cm) dan Persegi B (sisi 6 cm) di atasnya! Luas daerah seluruh bangun gabungan tersebut adalah ...',
    options: [
      { id: 'A', text: '100 cm²' },
      { id: 'B', text: '110 cm²' },
      { id: 'C', text: '120 cm²' },
      { id: 'D', text: '144 cm²' },
    ],
    correctAnswer: 'C',
    explanation: 'Dengan dekomposisi: Luas Persegi Panjang A = 14 × 6 = 84 cm², dan Luas Persegi B = 6 × 6 = 36 cm². Total luas daerah bangun gabungan = 84 + 36 = 120 cm².',
  },
  {
    id: 30,
    type: 'pg',
    element: TP6,
    topic: 'Hubungan Keliling dan Luas Daerah Persegi',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan luas daerah persegi apabila diketahui kelilingnya.',
    text: 'Diketahui keliling sebuah kertas karton berbentuk persegi adalah 36 cm. Luas daerah kertas karton tersebut adalah ...',
    options: [
      { id: 'A', text: '36 cm²' },
      { id: 'B', text: '72 cm²' },
      { id: 'C', text: '81 cm²' },
      { id: 'D', text: '144 cm²' },
    ],
    correctAnswer: 'C',
    explanation: 'Pertama tentukan panjang sisi dari keliling: sisi = 36 ÷ 4 = 9 cm. Selanjutnya hitung luas daerah persegi: Luas = sisi × sisi = 9 × 9 = 81 cm².',
  },

  // ============================================================================
  // BAGIAN II: 5 SOAL PILIHAN GANDA KOMPLEKS KATEGORI (3 PERNYATAAN B/S)
  // ============================================================================

  {
    id: 31,
    type: 'pgk_kategori',
    element: TP3,
    topic: 'Analisis Keliling Berbagai Jenis Segitiga',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengevaluasi kebenaran pernyataan terkait keliling segitiga sama sisi, sama kaki, dan sembarang.',
    image: `<svg viewBox="0 0 430 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg">
      <rect width="430" height="140" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Segitiga A: Sama sisi 10 cm -->
      <polygon points="75,26 32,102 118,102" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
      <text x="75" y="84" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">A</text>
      <text x="75" y="122" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Sama Sisi: 10, 10, 10</text>

      <!-- Segitiga B: Sama kaki 8, 11, 11 -->
      <polygon points="215,22 175,102 255,102" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
      <text x="215" y="84" font-family="sans-serif" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">B</text>
      <text x="215" y="122" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#14532d" text-anchor="middle">Sama Kaki: 8, 11, 11</text>

      <!-- Segitiga C: Sembarang 7, 9, 14 -->
      <polygon points="335,34 300,102 400,102" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <text x="348" y="84" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">C</text>
      <text x="352" y="122" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#78350f" text-anchor="middle">Sembarang: 7, 9, 14</text>
    </svg>`,
    text: 'Perhatikan tiga jenis segitiga di atas beserta ukuran panjang sisi-sisinya (dalam satuan cm)! Tentukan apakah pernyataan berikut BENAR atau SALAH!',
    statements: [
      { id: 's1', text: 'Keliling Segitiga A (sama sisi) adalah 30 cm.', correctAnswer: true },
      { id: 's2', text: 'Keliling Segitiga B lebih besar daripada keliling Segitiga C.', correctAnswer: false },
      { id: 's3', text: 'Ketiga segitiga tersebut memiliki keliling yang sama, yaitu 30 cm.', correctAnswer: true },
    ],
    explanation: 'Segitiga A = 10+10+10 = 30 cm. Segitiga B = 8+11+11 = 30 cm. Segitiga C = 7+9+14 = 30 cm. Ketiganya memiliki keliling yang sama besar (30 cm), sehingga pernyataan kedua bernilai SALAH.',
  },
  {
    id: 32,
    type: 'pgk_kategori',
    element: TP4,
    topic: 'Perbandingan Keliling Segi Empat',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat membandingkan keliling bangun persegi, persegi panjang, dan belah ketupat secara tepat.',
    image: `<svg viewBox="0 0 430 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg">
      <rect width="430" height="135" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Persegi P -->
      <rect x="35" y="25" width="68" height="68" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
      <text x="69" y="63" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">P</text>
      <text x="69" y="114" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Persegi (s = 9 cm)</text>

      <!-- Persegi Panjang Q -->
      <rect x="155" y="32" width="110" height="54" fill="#fae8ff" stroke="#a21caf" stroke-width="2.5"/>
      <text x="210" y="63" font-family="sans-serif" font-size="11" font-weight="bold" fill="#86198f" text-anchor="middle">Q</text>
      <text x="210" y="114" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#701a75" text-anchor="middle">Persegi Pjg (12 × 6 cm)</text>

      <!-- Belah Ketupat R -->
      <polygon points="355,20 395,59 355,98 315,59" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
      <text x="355" y="63" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">R</text>
      <text x="355" y="114" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#14532d" text-anchor="middle">Belah Ketupat (s = 8 cm)</text>
    </svg>`,
    text: 'Diketahui tiga bangun datar segi empat pada gambar di atas: Persegi P (sisi 9 cm), Persegi Panjang Q (12 cm × 6 cm), dan Belah Ketupat R (sisi 8 cm). Tentukan BENAR atau SALAH pernyataan berikut!',
    statements: [
      { id: 's1', text: 'Keliling Persegi P sama besar dengan keliling Persegi Panjang Q.', correctAnswer: true },
      { id: 's2', text: 'Keliling Belah Ketupat R adalah 32 cm.', correctAnswer: true },
      { id: 's3', text: 'Bangun yang memiliki keliling paling panjang adalah Belah Ketupat R.', correctAnswer: false },
    ],
    explanation: 'Keliling P = 4 × 9 = 36 cm; Keliling Q = 2 × (12 + 6) = 36 cm; Keliling R = 4 × 8 = 32 cm. Jadi P dan Q sama panjang (36 cm), sedangkan R justru yang paling pendek.',
  },
  {
    id: 33,
    type: 'pgk_kategori',
    element: TP5,
    topic: 'Keliling Segi Banyak Beraturan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat menganalisis keliling segi lima beraturan, segi enam beraturan, dan segi delapan beraturan yang memiliki panjang sisi sama.',
    text: 'Perhatikan tiga bangun segi banyak beraturan yang masing-masing memiliki panjang sisi 6 cm: Segi Lima Beraturan, Segi Enam Beraturan, dan Segi Delapan Beraturan. Tentukan BENAR atau SALAH untuk setiap pernyataan!',
    statements: [
      { id: 's1', text: 'Keliling segi lima beraturan dengan sisi 6 cm adalah 30 cm.', correctAnswer: true },
      { id: 's2', text: 'Selisih keliling segi delapan beraturan dan segi enam beraturan adalah 12 cm.', correctAnswer: true },
      { id: 's3', text: 'Keliling segi delapan beraturan dengan sisi 6 cm adalah 42 cm.', correctAnswer: false },
    ],
    explanation: 'Keliling segi-5 = 5 × 6 = 30 cm (Benar). Keliling segi-6 = 6 × 6 = 36 cm, segi-8 = 8 × 6 = 48 cm. Selisih segi-8 dan segi-6 = 48 - 36 = 12 cm (Benar). Pernyataan ketiga salah karena 8 × 6 = 48 cm, bukan 42 cm.',
  },
  {
    id: 34,
    type: 'pgk_kategori',
    element: TP6,
    topic: 'Dekomposisi Keliling & Luas Bangun Gabungan',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengevaluasi cara menentukan keliling dan luas daerah bangun datar gabungan melalui dekomposisi.',
    image: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-md">
      <rect width="420" height="160" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5"/>
      <!-- A: 10x6 -> 130px wide x 78px high (x=95..225, y=42..120) -->
      <!-- B: 4x4 -> 52px wide x 52px high (x=225..277, y=68..120) -->
      <rect x="95" y="42" width="130" height="78" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/>
      <rect x="225" y="68" width="52" height="52" fill="#dcfce7" stroke="#15803d" stroke-width="2.5"/>
      <line x1="225" y1="68" x2="225" y2="120" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="160" y="85" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">A (10 × 6)</text>
      <text x="251" y="98" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532d" text-anchor="middle">B (4×4)</text>
      <text x="86" y="84" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="end">6 cm</text>
      <text x="160" y="34" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">10 cm</text>
      <text x="251" y="60" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">4 cm</text>
      <text x="285" y="98" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="start">4 cm</text>
      <text x="186" y="138" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">14 cm (10 cm + 4 cm)</text>
    </svg>`,
    text: 'Perhatikan gambar bangun datar gabungan yang terdiri atas Persegi Panjang A (10 cm × 6 cm) dan Persegi B (sisi 4 cm) yang menempel rapat di bagian kanan bawahnya! Tentukan BENAR atau SALAH setiap pernyataan!',
    statements: [
      { id: 's1', text: 'Luas bangun gabungan dapat dicari dengan menjumlahkan luas A dan B, yaitu 76 cm².', correctAnswer: true },
      { id: 's2', text: 'Keliling bangun gabungan tersebut adalah 44 cm.', correctAnswer: false },
      { id: 's3', text: 'Garis pertemuan sepanjang 4 cm di bagian dalam (garis merah putus-putus) tidak dihitung saat mencari keliling.', correctAnswer: true },
    ],
    explanation: 'Luas A = 10 × 6 = 60 cm² dan Luas B = 4 × 4 = 16 cm², sehingga Total Luas = 76 cm² (Benar). Untuk keliling terluar: 6 + 10 + (6-4) + 4 + 4 + 14 = 40 cm (bukan 44 cm). Garis temu di dalam memang tidak dihitung untuk keliling.',
  },
  {
    id: 35,
    type: 'pgk_kategori',
    element: TP6,
    topic: 'Hubungan Keliling dan Luas Daerah Bangun Datar',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator: 'Siswa dapat menyimpulkan hubungan antara keliling yang sama dengan luas daerah yang dapat berbeda pada dua bangun datar.',
    image: `<svg viewBox="0 0 420 145" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg">
      <rect width="420" height="145" rx="12" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.5"/>
      <!-- Bangun I: 8 x 4 -->
      <rect x="40" y="38" width="128" height="64" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
      <text x="104" y="74" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Bangun I (8 × 4 cm)</text>
      <text x="104" y="122" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e3a8a" text-anchor="middle">p = 8 cm, l = 4 cm</text>

      <!-- Bangun II: 6 x 6 -->
      <rect x="255" y="24" width="90" height="90" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
      <text x="300" y="73" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Bangun II (6 × 6 cm)</text>
      <text x="300" y="130" font-family="sans-serif" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">sisi = 6 cm</text>
    </svg>`,
    text: 'Perhatikan dua bangun datar di atas: Bangun I (persegi panjang 8 cm × 4 cm) dan Bangun II (persegi 6 cm × 6 cm). Tentukan BENAR atau SALAH setiap pernyataan tentang hubungan keliling dan luas daerahnya!',
    statements: [
      { id: 's1', text: 'Bangun I dan Bangun II memiliki keliling yang sama, yaitu 24 cm.', correctAnswer: true },
      { id: 's2', text: 'Dua bangun datar yang kelilingnya sama pasti selalu memiliki luas daerah yang sama.', correctAnswer: false },
      { id: 's3', text: 'Luas daerah Bangun II lebih besar 4 cm² dibandingkan luas daerah Bangun I.', correctAnswer: true },
    ],
    explanation: 'Keliling I = 2 × (8 + 4) = 24 cm; Keliling II = 4 × 6 = 24 cm (Keliling sama!). Namun Luas I = 8 × 4 = 32 cm², sedangkan Luas II = 6 × 6 = 36 cm² (selisih 4 cm²). Jadi bangun dengan keliling sama belum tentu luasnya sama.',
  },
];
