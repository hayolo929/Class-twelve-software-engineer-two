const Momen = () => {
  const moments = [
   {
      id: 1,
      title: 'Foto Bareng Bersama walikelas',
      description: 'Momen indah saat photo Ijazah Dilanjutkan Foto bersama seluruh siswa XII RPL 2 Bersama Walikelas 10,11,dan 12.',
      image: '/image/kenangan (17).jpeg',
      date: '2025',
    },
    {
      id: 2,
      title: 'Foto Bareng Kelas',
      description: 'Momen indah saat photo bersama seluruh siswa XII RPL 2 Sebelum Melaksanakan PKL.',
      image: '/image/gambar (1).jpeg',
      date: '2025',
    },
    {
      id: 3,
      title: ' Foto Akhir Kelas 11',
      description: 'Pembagian Rapot Untuk Kenaikan Kelas 12 Dan Pembagian Hadiah Juara Classmeet Mobile legends.',
      image: '/image/gambar (2).jpeg',
      date: '2024',
    },
    {
      id: 4,
      title: 'Foto Bersama Buk Tuti',
      description: 'Pelajaran Buk Tuti Setelah Foto Ijazah.',
      image: '/image/gambar (3).jpeg',
      date: '2025',
    },
    {
      id: 5,
      title: 'Foto Bersama Buk Nurliza',
      description: 'Setelah Kegiatan Pentas seni Kelas 11 RPL 2.',
      image: '/image/kenangan (13).jpeg',
      date: '2024',
    },
    {
        id:6,
        title:'Foto Buka Bersama ',
        description:'Buka Bersama Edisi Kelas 11 RPL 2',
        image:'/image/kenangan (23).jpeg',
        date:'2024',
    },
    {
        id:7,
        title:'Hari Guru',
        description:'Foto Bersama Di Hari Guru 2024',
        image:'/image/kenangan (24).jpeg',
        date:'2024',
    }
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
            Momen Berkesan
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-xl text-base-content/70"
          >
            Kumpulan kenangan indah bersama XII RPL 2
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {moments.map((momen, index) => (
            <div
              key={momen.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-12`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={momen.image} 
                      alt={momen.title} 
                      className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="badge badge-primary mb-2">{momen.date}</div>
                <h3 className="text-2xl font-bold mb-2">{momen.title}</h3>
                <p className="text-base-content/70">{momen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quotes Section */}
      <div className="container mx-auto px-4 mt-16">
        <div 
          data-aos="fade-up" 
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Kenangan Terindah</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-200 hover:bg-primary hover:text-primary-content transition-all duration-300">
              <div className="card-body">
                <p className="text-lg italic">"Kelas yang solid dan kompak, penuh dengan kenangan tak terlupakan."</p>
                <p className="font-semibold mt-2">— XII RPL 2</p>
              </div>
            </div>
            <div className="card bg-base-200 hover:bg-secondary hover:text-secondary-content transition-all duration-300">
              <div className="card-body">
                <p className="text-lg italic">"Terima kasih untuk semua pengalaman dan pembelajaran bersama."</p>
                <p className="font-semibold mt-2">— XII RPL 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Momen


