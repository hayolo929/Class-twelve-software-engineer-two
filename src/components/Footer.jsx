import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Daftar Siswa', path: '/daftar-siswa' },
    { name: 'Struktur Kelas', path: '/struktur-kelas' },
    { name: 'Galeri', path: '/galeri' },
  ]

  return (
    <footer className="bg-base-200 mt-20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div data-aos="fade-up" data-aos-delay="0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">RPL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">XII RPL 2</h3>
                <p className="text-sm text-base-content/60">SMKN 2 Kota Tebing Tinggi</p>
              </div>
            </div>
            <p className="text-base-content/70 leading-relaxed">
              Kelas XII RPL 2 adalah kelas yang penuh dengan inovasi dan kreativitas. 
              Kami siap menciptakan masa depan cerah di dunia teknologi.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.tiktok.com/@anarpelda.skanda" className="btn btn-circle btn-outline btn-primary btn-sm hover:scale-110 transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
	<defs>
		<mask id="SVGgMs3O0ng">
			<path fill="#fff" d="M16.6 5.82c-0.68 -0.78 -1.06 -1.78 -1.06 -2.82h-3.09v12.4c-0.02 0.67 -0.31 1.31 -0.79 1.77c-0.48 0.47 -1.13 0.73 -1.8 0.73c-1.42 0 -2.6 -1.16 -2.6 -2.6c0 -1.72 1.66 -3.01 3.37 -2.48v-3.16c-3.45 -0.46 -6.47 2.22 -6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69 -2.55 5.69 -5.7v-6.29c1.25 0.9 2.76 1.38 4.3 1.38v-3.09c0 0 -1.88 0.09 -3.24 -1.48Z" />
			<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
				<path stroke-dasharray="36" d="M11 11h-1c-2.21 0 -4.5 1.79 -4.5 4c0 2.21 1.5 4.5 4.5 4.5c2.21 0 4 -2.29 4 -4.5v-12.5">
					<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;36" />
				</path>
				<path stroke-dasharray="10" stroke-dashoffset="20" d="M18 2.5v8">
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.1s" to="10" />
				</path>
			</g>
		</mask>
	</defs>
	<path fill="#b6d7dd" d="M0 0h24v24H0z" mask="url(#SVGgMs3O0ng)" />
</svg>
              </a>
              <a href="https://www.instagram.com/twelvsoft.engineer_skanda/" className="btn btn-circle btn-outline btn-primary btn-sm hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
  
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-lg font-bold mb-4 text-primary">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-base-content/70 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-bold mb-4 text-primary">Hubungi Kami</h4>
            <div className="space-y-4 text-base-content/70">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>SMKN 2 Kota Tebing Tinggi<br />Jalan. Gunung Leuser</p>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>xii.rpl2@smkn1cibinong.sch.id</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-base-content/60 text-sm">
              © {currentYear} Kelas XII RPL 2 - SMKN 2 Kota Tebing Tinggi. All rights reserved.
            </p>
            <p className="text-base-content/60 text-sm">
              Dibuat dengan <span className="text-error">❤</span> oleh Rezky Ramadhan Sagala
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

