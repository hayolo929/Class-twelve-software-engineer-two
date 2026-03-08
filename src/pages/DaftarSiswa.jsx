import { useState } from 'react'

const DaftarSiswa = () => {
  const [filter, setFilter] = useState('semua')

  const students = [
    { nama: 'Abdi Hernawan', image: '/image/abdi.jpeg',jk: 'Laki-laki', alamat: 'Tebing Tinggi' },
    { nama: 'Abyan Khairi Girsang', image: '/image/abyan.jpeg',jk: 'Laki-laki', alamat: 'Tebing Tinggi' },
    { nama: 'M. Afdhal Iman', image: '/image/afdal.jpeg',jk: 'Laki-laki', alamat: 'Tebing Tinggi' },
    { nama: 'Andini Hasibuan', image: '/image/andini.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Angie Purnama', image: '/image/angie.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Aura Julfa Kasih', image: '/image/aura.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Ayla Kaafi', image: '/image/ayla.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Rizky Bayu Andika', image: '/image/bayu.jpeg',jk: 'Laki-laki', alamat: 'Tebing Tinggi' },
    { nama: 'Cinta Ananda', image: '/image/cinta.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Desi Duwi Yanti', image: '/image/desi.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Destrya Tamara Dalimunte', image: '/image/destrya.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Dian Astri Novita', image: '/image/dian.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Fadly Mulia', image: '/image/fadly.jpeg',jk: 'Laki-laki', alamat: 'Tebing Tinggi' },
    { nama: 'Fachri Darus Maulana', image: '/image/fahri.jpeg',jk: 'Laki-laki', alamat: 'Tebing Tinggi' },
    { nama: 'Fina Lestari', image: '/image/fina.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Gadiza Riahma BR Purba', image: '/image/gadiza.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Melinda Arfa Lubis', image: '/image/melinda.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Salwa Mutiq Khairani', image: '/image/mutiq.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Nabila Nasution', image: '/image/nabila.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Naurah Nadhif', image: '/image/naura.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Nayla Syifa', image: '/image/nayla.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'MHD. Nazriel Ilham', image: '/image/nazriel.jpeg',jk: 'Laki-laki', alamat: 'Tebing Tinggi' },
    { nama: 'Mutiara Nissa BR Purba', image: '/image/nisa.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Puja Nabila Nasution', image: '/image/puja.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Rahmanyah Hasibuan', image: '/image/rahman.jpeg',jk: 'Laki-laki', alamat: 'Tebing Tinggi' },
    { nama: 'Rahsya Dwi Andika', image: '/image/rahsya.jpeg',jk: 'Laki-laki', alamat: 'Tebing Tinggi' },
    { nama: 'Rezky Ramadhan Sagala', image: '/image/rezky.jpeg',jk: 'Laki-laki', alamat: 'Tebing Tinggi' },
    { nama: 'Mutiara Rizkyta Saragih', image: '/image/rizkyta.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Salwa Salsabila', image: '/image/salwa.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Sela Amanda', image: '/image/sela.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Shevia Rafa Sinaga', image: '/image/shevia.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Syahkila Anggraini', image: '/image/syahkila.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
    { nama: 'Umar Muktar', image: '/image/umar.jpeg',jk: 'Laki-laki', alamat: 'Tebing Tinggi' },
    { nama: 'SriwahyuniHarahap', image: '/image/yuni.jpeg',jk: 'Perempuan', alamat: 'Tebing Tinggi' },
  ]

  const filteredStudents = filter === 'semua' 
    ? students 
    : students.filter(s => s.jk === filter)

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/20 to-transparent py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 
            data-aos="fade-up" 
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Daftar Siswa
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-xl text-base-content/70"
          >
            Siswa-siswi XII RPL 2 SMKN 1 Cibinong
          </p>
          <div 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="badge badge-lg badge-primary mt-4"
          >
            Total: {students.length} Siswa
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center gap-4" data-aos="fade-up">
          <button 
            onClick={() => setFilter('semua')}
            className={`btn ${filter === 'semua' ? 'btn-primary' : 'btn-outline'} hover:scale-105 transition-transform`}
          >
            Semua ({students.length})
          </button>
          <button 
            onClick={() => setFilter('Laki-laki')}
            className={`btn ${filter === 'Laki-laki' ? 'btn-primary' : 'btn-outline'} hover:scale-105 transition-transform`}
          >
            👦 Laki-laki ({students.filter(s => s.jk === 'Laki-laki').length})
          </button>
          <button 
            onClick={() => setFilter('Perempuan')}
            className={`btn ${filter === 'Perempuan' ? 'btn-primary' : 'btn-outline'} hover:scale-105 transition-transform`}
          >
            👧 Perempuan ({students.filter(s => s.jk === 'Perempuan').length})
          </button>
        </div>
      </div>

      {/* Students Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredStudents.map((student, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="card bg-base-200 hover:bg-primary hover:text-primary-content transition-all duration-300 group cursor-pointer hover:-translate-y-2"
            >
              <figure className="pt-4">
                <div className="w-24 h-24 rounded-full overflow-hidden ring ring-primary ring-offset-2 ring-offset-base-100 group-hover:ring-offset-primary group-hover:scale-110 transition-transform">
                  <img 
                    src={student.image} 
                    alt={student.nama} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="card-body items-center text-center p-4">
                <h3 className="font-bold text-lg">{student.nama}</h3>
                <p className="text-sm opacity-70">{student.jk}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-base-content/50">Tidak ada siswa ditemukan</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DaftarSiswa


