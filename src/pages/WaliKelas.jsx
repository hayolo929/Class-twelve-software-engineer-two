import { useState } from 'react'

const WaliKelas = () => {
  const [activeClass, setActiveClass] = useState('XII')

  const walikelasData = {
    'XII': {
      nama: 'Pak Sadarta Sinuraya , S.KOM',
      nip: '197808152008011001',
      mapel: 'PPB (Pemrograman Perangkat Bergerak )',
      image: '/image/pak_darta.jpeg',
      tentang: 'Pak Sadarta adalah guru yang sangat berpengalaman di bidang RPL. Dengan dedikasi tinggi, beliau membimbing kami untuk menjadi generasi yang siap menghadapi dunia teknologi.',
      quote: 'Setiap siswa memiliki potensi luar biasa. Tugas kita adalah membantu mereka menemukan dan mengembangkan potensi tersebut.',
      pesan: 'Selamat datang di kelas XII RPL 2! Ini adalah tahun terakhir kalian di SMKN 2 Kota Tebing Tinggi. Manfaatkan waktu ini dengan baik untuk belajar, berkarya, dan menciptakan kenangan indah bersama. Saya berkomitmen untuk membimbing kalian menuju kesuksesan. Semangat!'
    },
    'XI': {
      nama: 'Bu Nurliza , S.Pd',
      nip: '198505152009012002',
      mapel: 'PKK (Produk Kreatif dan Kewirausahaan)',
      image: '/image/buk_liza.jpeg',
      tentang: 'Bu Nurliza adalah guru yang sangat kompeten di bidang Produk Kreatif dan Kewirausahaan. Dengan pendekatan yang sistematis, beliau membimbing siswa untuk memahami konsep bidang kewirausahan dengan mudah.',
      quote: 'Kesuksesan datang kepada mereka yang tidak pernah menyerah dalam belajar.',
      pesan: 'Halo siswa-siswa XI RPL 2! Tahun ini adalah tahun yang penuh tantangan tapi juga penuh peluang. Tetap semangat belajar dan jangan pernah ragu untuk bertanya. Bersama kita bisa mencapai puncak!'
    },
    'X': {
      nama: 'Bu Utami Ningsih , S.Pd',
      nip: '197912032007012003',
      mapel: 'Pemrograman Web dan DPK (Dasar - Dasar Pemrograman Keahlian)',
      image: '/image/buk_tami.jpeg',
      tentang: 'Bu Utami adalah guru yang penuh semangat dalam mengajarkan dasar-dasar komputer dan jaringan. Dengan kesabaran tinggi, beliau membimbing siswa kelas X untuk memahami fondasi teknologi.',
      quote: 'Mulai dari kecil, raih mimpi besar.',
      pesan: 'Selamat datang di kelas X RPL 2! kalian memulai perjalanan baru di dunia RPL. Nikmati setiap proses belajar kalian. Jangan lupa untuk selalu好奇 (bertahta) dan tidak takut untuk mencoba hal baru. Semangat!'
    }
  }

  const walikelas = walikelasData[activeClass]

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/20 to-transparent py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 
            data-aos="fade-up" 
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Wali Kelas
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-xl text-base-content/70"
          >
            Perkenalkan wali kelas kami
          </p>
        </div>
      </div>

      {/* Class Selector */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
          <button 
            onClick={() => setActiveClass('XII')}
            className={`btn btn-lg ${activeClass === 'XII' ? 'btn-primary' : 'btn-outline'} hover:scale-105 transition-transform`}
          >
            Kelas XII
          </button>
          <button 
            onClick={() => setActiveClass('XI')}
            className={`btn btn-lg ${activeClass === 'XI' ? 'btn-primary' : 'btn-outline'} hover:scale-105 transition-transform`}
          >
            Kelas XI
          </button>
          <button 
            onClick={() => setActiveClass('X')}
            className={`btn btn-lg ${activeClass === 'X' ? 'btn-primary' : 'btn-outline'} hover:scale-105 transition-transform`}
          >
            Kelas X
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Image */}
          <div 
            data-aos="fade-right" 
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur opacity-30"></div>
              <div className="relative">
                <div className="w-72 h-72 rounded-3xl overflow-hidden ring-4 ring-primary shadow-2xl">
                  <img 
                    src={walikelas.image} 
                    alt={walikelas.nama} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div 
            data-aos="fade-left" 
            className="flex-grow text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold text-primary mb-2">{walikelas.nama}</h2>
            <p className="text-lg text-base-content/70 mb-4">Wali Kelas {activeClass} RPL 2</p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <div className="badge badge-lg badge-outline badge-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {walikelas.mapel}
              </div>
              <div className="badge badge-lg badge-outline badge-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                NIP: {walikelas.nip}
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="font-bold text-lg mb-2">Tentang</h3>
                <p className="text-base-content/70">{walikelas.tentang}</p>
              </div>
            </div>

            {/* Quote */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="mt-6 p-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl border-l-4 border-primary"
            >
              <p className="text-lg italic text-base-content/80">"{walikelas.quote}"</p>
              <p className="text-sm text-base-content/60 mt-2">— {walikelas.nama}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Message Section */}
      <div className="container mx-auto px-4 mt-16">
        <div 
          data-aos="fade-up" 
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Pesan dari Wali Kelas</h2>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <p className="text-lg leading-relaxed">
                "{walikelas.pesan}"
              </p>
              <div className="divider"></div>
              <p className="font-semibold text-primary">— {walikelas.nama}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaliKelas


