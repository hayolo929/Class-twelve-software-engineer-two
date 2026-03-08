const StrukturKelas = () => {
  const structure = [
    {
      level: 1,
      title: 'Wali Kelas',
      name: 'Pak Darta',
      image: '/image/pak_darta.jpeg',
      color: 'ring-error',
    },
    {
      level: 2,
      title: 'Ketua Kelas',
      name: 'Rezky',
      image: '/image/ketua.jpeg',
      color: 'ring-primary',
    },
    {
      level: 3,
      title: 'Wakil Ketua',
      name: 'Ayla',
      image: '/image/ayla.jpeg',
      color: 'ring-secondary',
    },
    {
      level: 4,
      title: 'Sekretaris',
      name: 'Gadiza',
      image: '/image/gadiza.jpeg',
      color: 'ring-accent',
    },
    {
      level: 5,
      title: 'Wakil Sekretaris',
      name: 'Nabila',
      image: '/image/nabila.jpeg',
      color: 'ring-info',
    },
    {
      level: 6,
      title: 'Bendahara',
      name: 'Desi',
      image: '/image/desi.jpeg',
      color: 'ring-warning',
    },
    {
      level: 7,
      title: 'Wakil Bendahara',
      name: 'Rizkyta',
      image: '/image/rizkyta.jpeg',
      color: 'ring-success',
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/20 to-transparent py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 
            data-aos="fade-up" 
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Struktur Kelas
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-xl text-base-content/70"
          >
            Organisasi Kelas XII RPL 2
          </p>
        </div>
      </div>

      {/* Structure */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Level 1: Wali Kelas */}
          <div className="mb-8" data-aos="fade-down">
            <div className="card bg-base-200 shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 w-64">
              <figure className="pt-6">
                <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-error">
                  <img 
                    src="/image/pak_darta.jpeg" 
                    alt="Wali Kelas" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="font-bold text-xl text-error">Wali Kelas</h3>
                <p className="text-lg font-semibold">Pak Sadarta Sinuraya , S.KOM</p>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="w-0.5 h-8 bg-gradient-to-b from-error to-primary" data-aos="fade-in"></div>

          {/* Level 2: Ketua Kelas */}
          <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
            <div className="card bg-base-200 shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 w-64">
              <figure className="pt-6">
                <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary">
                  <img 
                    src="/image/ketua.jpeg" 
                    alt="Ketua Kelas" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="font-bold text-xl text-primary">Ketua Kelas</h3>
                <p className="text-lg font-semibold">Rezky Ramadhan Sagala</p>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary" data-aos="fade-in"></div>

          {/* Level 3: Wakil Ketua */}
          <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
            <div className="card bg-base-200 shadow-2xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105 w-64">
              <figure className="pt-6">
                <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-secondary">
                  <img 
                    src="/image/ayla.jpeg" 
                    alt="Wakil Ketua" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="font-bold text-xl text-secondary">Wakil Ketua</h3>
                <p className="text-lg font-semibold">Ayla Kaafi</p>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="w-0.5 h-8 bg-gradient-to-b from-secondary to-accent" data-aos="fade-in"></div>

          {/* Level 4: Sekretaris & Wakil Sekretaris */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div data-aos="fade-right" data-aos-delay="300">
              <div className="card bg-base-200 shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105 w-56">
                <figure className="pt-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-accent">
                    <img 
                      src="/image/gadiza.jpeg" 
                      alt="Sekretaris" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="font-bold text-lg text-accent">Sekretaris</h3>
                  <p className="font-semibold">Gadiza Riahma</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="400">
              <div className="card bg-base-200 shadow-xl hover:shadow-info/30 transition-all duration-300 hover:scale-105 w-56">
                <figure className="pt-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-info">
                    <img 
                      src="/image/nabila.jpeg" 
                      alt="Wakil Sekretaris" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="font-bold text-lg text-info">Wakil</h3>
                  <p className="font-semibold">Nabila Nasution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="w-0.5 h-8 bg-gradient-to-b from-accent to-warning" data-aos="fade-in"></div>

          {/* Level 5: Bendahara & Wakil Bendahara */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div data-aos="fade-right" data-aos-delay="500">
              <div className="card bg-base-200 shadow-xl hover:shadow-warning/30 transition-all duration-300 hover:scale-105 w-56">
                <figure className="pt-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-warning">
                    <img 
                      src="/image/desi.jpeg" 
                      alt="Bendahara" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="font-bold text-lg text-warning">Bendahara</h3>
                  <p className="font-semibold">Desi Duwi Yanti</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="600">
              <div className="card bg-base-200 shadow-xl hover:shadow-success/30 transition-all duration-300 hover:scale-105 w-56">
                <figure className="pt-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-success">
                    <img 
                      src="/image/rizkyta.jpeg" 
                      alt="Wakil Bendahara" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="font-bold text-lg text-success">Wakil</h3>
                  <p className="font-semibold">Mutiara Rizkyta </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StrukturKelas


