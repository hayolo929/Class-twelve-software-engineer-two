import { useState } from 'react'

const Galeri = () => {
  const [filter, setFilter] = useState('semua')

  const photos = [
    // Gallery Cowo
    { id: 1, category: 'cowok', src: '/image/abdi.jpeg', title: 'Abdi' },
    { id: 2, category: 'cowok', src: '/image/abyan.jpeg', title: 'Abyan' },
    { id: 3, category: 'cowok', src: '/image/afdal.jpeg', title: 'Afdal' },
    { id: 4, category: 'cowok', src: '/image/bayu.jpeg', title: 'Bayu' },
    { id: 5, category: 'cowok', src: '/image/fadly.jpeg', title: 'Fadly' },
    { id: 6, category: 'cowok', src: '/image/fahri.jpeg', title: 'Fahri' },
    { id: 7, category: 'cowok', src: '/image/nazriel.jpeg', title: 'Nazriel' },
    { id: 8, category: 'cowok', src: '/image/rahman.jpeg', title: 'Rahman' },
    { id: 9, category: 'cowok', src: '/image/rahsya.jpeg', title: 'Rahsya' },
    { id: 10, category: 'cowok', src: '/image/rezky.jpeg', title: 'Rezky' },
    { id: 11, category: 'cowok', src: '/image/umar.jpeg', title: 'Umar' },
    // Gallery Cewe
    { id: 12, category: 'cewek', src: '/image/andini.jpeg', title: 'Andini' },
    { id: 13, category: 'cewek', src: '/image/angie.jpeg', title: 'Angie' },
    { id: 14, category: 'cewek', src: '/image/aura.jpeg', title: 'Aura' },
    { id: 15, category: 'cewek', src: '/image/ayla.jpeg', title: 'Ayla' },
    { id: 16, category: 'cewek', src: '/image/cinta.jpeg', title: 'Cinta' },
    { id: 17, category: 'cewek', src: '/image/desi.jpeg', title: 'Desi' },
    { id: 18, category: 'cewek', src: '/image/destrya.jpeg', title: 'Destrya' },
    { id: 19, category: 'cewek', src: '/image/dian.jpeg', title: 'Dian' },
    { id: 20, category: 'cewek', src: '/image/fina.jpeg', title: 'Fina' },
    { id: 21, category: 'cewek', src: '/image/gadiza.jpeg', title: 'Gadiza' },
    { id: 22, category: 'cewek', src: '/image/melinda.jpeg', title: 'Melinda' },
    { id: 23, category: 'cewek', src: '/image/nabila.jpeg', title: 'Nabila' },
    { id: 24, category: 'cewek', src: '/image/naura.jpeg', title: 'Naura' },
    { id: 25, category: 'cewek', src: '/image/nayla.jpeg', title: 'Nayla' },
    { id: 26, category: 'cewek', src: '/image/nisa.jpeg', title: 'Nisa' },
        { id: 27, category: 'cewek', src: '/image/puja.jpeg', title: 'Puja' },
    { id: 28, category: 'cewek', src: '/image/rizkyta.jpeg', title: 'Rizkyta' },
    { id: 29, category: 'cewek', src: '/image/mutiq.jpeg', title: 'Salwa Mutiq' },
    { id: 30, category: 'cewek', src: '/image/salwa.jpeg', title: 'Salwa' },
    { id: 31, category: 'cewek', src: '/image/sela.jpeg', title: 'Sela' },
    { id: 32, category: 'cewek', src: '/image/shevia.jpeg', title: 'Shevia' },
    { id: 33, category: 'cewek', src: '/image/syahkila.jpeg', title: 'Syahkila' },
    { id: 34, category: 'cewek', src: '/image/yuni.jpeg', title: 'Yuni' },
    // Gallery Kelas
    { id: 35, category: 'kelas', src: '/image/kenangan (20).jpeg', title: 'Momen 1' },
    { id: 36, category: 'kelas', src: '/image/gambar (2).jpeg', title: 'Momen 2' },
    { id: 37, category: 'kelas', src: '/image/gambar (3).jpeg', title: 'Momen 3' },
     { id: 38, category: 'kelas', src: '/image/kenangan (1).jpeg', title: 'Momen 4' },
      { id: 39, category: 'kelas', src: '/image/kenangan (15).jpeg', title: 'Momen 5' },
       { id: 40, category: 'kelas', src: '/image/kenangan (22).jpeg', title: 'Momen 6' },
        { id: 41, category: 'kelas', src: '/image/kenangan (21).jpeg', title: 'Momen 7' },
         { id: 42, category: 'kelas', src: '/image/kenangan (9).jpeg', title: 'Momen 8' },
 { id: 43, category: 'kelas', src: '/image/kenangan (10).jpeg', title: 'Momen 9' },
 { id: 44, category: 'kelas', src: '/image/kenangan (11).jpeg', title: 'Momen 10' },
  { id: 45, category: 'kelas', src: '/image/kenangan (4).jpeg', title: 'Momen 11' },
  ]

  const filteredPhotos = filter === 'semua' 
    ? photos 
    : photos.filter(p => p.category === filter)

  const categories = [
    { id: 'semua', label: 'Semua', count: photos.length },
    { id: 'cowok', label: '👦 Cowo', count: photos.filter(p => p.category === 'cowok').length },
    { id: 'cewek', label: '👧 Cewe', count: photos.filter(p => p.category === 'cewek').length },
    { id: 'kelas', label: '🏫 Kelas', count: photos.filter(p => p.category === 'kelas').length },
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
            Galeri Foto
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-xl text-base-content/70"
          >
            Kumpulan foto siswa dan momen XII RPL 2
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
          {categories.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`btn ${filter === cat.id ? 'btn-primary' : 'btn-outline'} hover:scale-105 transition-transform`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Photos Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              data-aos="fade-up"
              data-aos-delay={index * 30}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-base-content/50">Tidak ada foto ditemukan</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Galeri


