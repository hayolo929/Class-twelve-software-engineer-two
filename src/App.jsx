import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import DaftarSiswa from './pages/DaftarSiswa'
import StrukturKelas from './pages/StrukturKelas'
import WaliKelas from './pages/WaliKelas'
import Galeri from './pages/Galeri'
import Momen from './pages/Momen'
import Prestasi from './pages/Prestasi'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-100 text-base-content flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/daftar-siswa" element={<DaftarSiswa />} />
            <Route path="/struktur-kelas" element={<StrukturKelas />} />
            <Route path="/wali-kelas" element={<WaliKelas />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/momen" element={<Momen />} />
            <Route path="/prestasi" element={<Prestasi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

