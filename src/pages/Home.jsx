import { Link } from 'react-router-dom'

const Home = () => {
  const statistics = [
    { label: 'Siswa', value: '34', icon: '👨‍🎓' },
    { label: 'Wali Kelas', value: '3', icon: '👨‍🏫' },
    { label: 'Classmeet', value: '2+', icon: '🏆' },
    { label: 'Jurusan', value: 'RPL', icon: '💻' },
  ]

  const features = [
    {
      title: 'Digital Native',
      description: 'Generasi yang tumbuh dengan teknologi, siap menghadapi era digital.',
      icon: '🚀',
    },
    {
      title: 'Kreatif & Inovatif',
      description: 'Selalu menghadirkan ide-ide baru dalam setiap proyek.',
      icon: '💡',
    },
    {
      title: 'Solidaritas Tinggi',
      description: 'Komunitas yang saling support dan membangun.',
      icon: '🤝',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNHoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div data-aos="fade-down" data-aos-duration="1000">
            <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary font-medium mb-6">
              Selamat Datang di
            </span>
          </div>
          
          <h1 
            data-aos="fade-up" 
            data-aos-delay="200" 
            className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          >
            XII RPL 2
          </h1>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay="400" 
            className="text-xl md:text-2xl text-base-content/80 mb-8 font-light"
          >
            SMKN 2 Kota Tebing Tinggi
          </p>

          <div data-aos="fade-up" data-aos-delay="600" className="flex flex-wrap justify-center gap-4">
            <Link to="/daftar-siswa" className="btn btn-primary btn-lg hover:scale-105 transition-transform shadow-lg shadow-primary/30">
              Lihat Daftar Siswa
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            <Link to="/galeri" className="btn btn-outline btn-secondary btn-lg hover:scale-105 transition-transform">
              Galeri Foto
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="card-body items-center text-center p-6">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
                  <p className="text-base-content/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Tentang Kami</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Kelas XII RPL 2 adalah kelas yang penuh semangat dan kreativitas. 
              Kami adalah generasi muda yang siap menghadapi tantangan di era digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="card bg-base-200 hover:bg-primary hover:text-primary-content transition-all duration-300 group"
              >
                <div className="card-body items-center text-center p-8">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-base-content/70 group-hover:text-primary-content/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Manager Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Wali Kelas</h2>
            <p className="text-lg text-base-content/70">
              Perkenalkan wali kelas kami yang selalu mendukung
            </p>
          </div>

          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
            <div className="card bg-base-100 shadow-2xl hover:shadow-primary/20 transition-all duration-300 max-w-md">
              <figure className="pt-8">
                <div className="avatar">
                  <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/image/pak_darta.jpeg" alt="Wali Kelas" />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="text-2xl font-bold text-primary">Pak Sadarta Sinuraya</h3>
                <p className="text-base-content/70">Wali Kelas XII RPL 2</p>
                <p className="text-sm text-base-content/60 mt-2">
                  Guru pembimbing yang selalu mendukung dan membimbing kami menuju kesuksesan.
                </p>
                <div className="card-actions mt-4">
                  <Link to="/wali-kelas" className="btn btn-primary">
                    Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Jelajahi</h2>
            <p className="text-lg text-base-content/70">
              Temukan lebih banyak tentang kelas kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/struktur-kelas" 
              data-aos="fade-up" 
              data-aos-delay="0"
              className="card bg-base-200 hover:bg-primary hover:text-primary-content transition-all duration-300 group cursor-pointer"
            >
              <div className="card-body items-center text-center p-8">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏫</div>
                <h3 className="text-xl font-bold">Struktur Kelas</h3>
                <p className="text-base-content/70 group-hover:text-primary-content/80">
                  Organisasi kelas kami
                </p>
              </div>
            </Link>

            <Link 
              to="/momen" 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="card bg-base-200 hover:bg-primary hover:text-primary-content transition-all duration-300 group cursor-pointer"
            >
              <div className="card-body items-center text-center p-8">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📸</div>
                <h3 className="text-xl font-bold">Momen Berkesan</h3>
                <p className="text-base-content/70 group-hover:text-primary-content/80">
                  Kenangan indah kami
                </p>
              </div>
            </Link>

            <Link 
              to="/prestasi" 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="card bg-base-200 hover:bg-primary hover:text-primary-content transition-all duration-300 group cursor-pointer"
            >
              <div className="card-body items-center text-center p-8">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                <h3 className="text-xl font-bold">Prestasi</h3>
                <p className="text-base-content/70 group-hover:text-primary-content/80">
                  Prestasi yang diraih
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


