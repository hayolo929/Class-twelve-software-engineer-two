const Prestasi = () => {
  const achievements = [
    {
      id: 1,
      title: 'Juara 2 Classmeet Mobile Legends',
      level: 'Sekolah',
      year: '2024',
      description: 'Prestasi membanggakan dalam Kompetisi Classmeet Mobile Legends.',
      icon: '🥈',
    },

    {
      id: 2,
      title: 'Juara 3 Classmeet Mobile Legends',
      level: 'Sekolah',
      year: '2024',
      description: 'Prestasi membanggakan dalam Kompetisi Classmeet Mobile Legends.',
      icon: '🥉',
    },
     {
      id: 3,
      title: 'Juara 3 Classmeet Mobile Legends',
      level: 'Sekolah',
      year: '2024',
      description: 'Prestasi membanggakan dalam Kompetisi Classmeet Mobile Legends.',
      icon: '🥉',
    },
    
  ]

  const stats = [
    { label: 'Total Prestasi', value: '2+', icon: '🏆' },
    { label: 'Juara 1', value: '0', icon: '🥇' },
    { label: 'Juara 2', value: '1', icon: '🥈' },
    { label: 'Juara 3', value: '2', icon: '🥉' },
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
            Prestasi Kelas
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-xl text-base-content/70"
          >
            Prestasi yang telah diraih XII RPL 2
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="card bg-base-200 hover:bg-primary hover:text-primary-content transition-all duration-300"
            >
              <div className="card-body items-center text-center p-4">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-sm opacity-70">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="card bg-base-200 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 mb-6 hover:-translate-y-1"
            >
              <div className="card-body flex flex-row items-center gap-6">
                <div className="text-5xl">{achievement.icon}</div>
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="badge badge-primary">{achievement.year}</span>
                    <span className="badge badge-secondary">{achievement.level}</span>
                  </div>
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                  <p className="text-base-content/70">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Motivation Section */}
      <div className="container mx-auto px-4 mt-16">
        <div 
          data-aos="fade-up" 
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Semangat Prestasi</h2>
          <div className="card bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
            <div className="card-body">
              <p className="text-lg leading-relaxed">
                "Prestasi bukan hanya tentang kemenangan, tetapi tentang usaha, 
                kerja keras, dan tidak pernah menyerah. XII RPL 2 terus berusaha 
                untuk menjadi yang terbaik dalam setiap hal yang dilakukan."
              </p>
              <div className="divider"></div>
              <p className="font-semibold text-primary">— Semangat XII RPL 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prestasi


