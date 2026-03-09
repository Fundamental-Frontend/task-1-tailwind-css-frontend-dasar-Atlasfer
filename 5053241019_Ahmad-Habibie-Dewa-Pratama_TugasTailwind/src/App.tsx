import Button from "./component/button"
import logo from './assets/logo.png';
import logo2 from './assets/logo-kecil.png';

function Hover(){
  return (
    <section className="bg-primary min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl text-center">
        <span className="text-sm tracking-widest bg-secondary text-white font-bold mb-4 inline-block rounded-full px-4 py-1">Platform Belajar No.1 di Indonesia</span>
        <img src={logo2} alt="logo kecil" className="h-40 w-auto mx-auto pb-4"/>
        <h1 className="text-5xl font-extrabold text-white text-center">
        Belajar lebih Mudah <br />Bersama <span className="text-secondary">EduSmart</span>
        </h1>
        <p className="text-lg text-gray-300 text-center mt-6 md:text-xl mx-auto leading-relaxed">
          Platform pembelajaran online dengan materi interaktif, latihan soal, dan metode belajar yang efektif. Bersama EduSmart, belajar menjadi lebih mudah, fleksibel, dan menyenangkan.
        </p>
        <div className="mt-8">
          <Button label="Mulai Belajar" variant="secondary" />
        </div>
      </div>
    </section>
  )
}
const fitur = [
  {
    icon: '📖',
    judul: 'Materi Interaktif',
    deskripsi: 'EduSmart menyediakan materi pembelajaran yang interaktif dan mudah dipahami, lengkap dengan video, kuis, dan latihan soal untuk membantu Anda belajar dengan lebih efektif.',
  },
  {
    icon: '🧑🏻‍🏫',
    judul: 'Mentor Profesional',
    deskripsi: 'EduSmart memiliki tim mentor profesional yang siap membantu Anda memahami materi dengan lebih baik dan memberikan bimbingan selama proses belajar.',
  },
  {
    icon: '🎖️',
    judul: 'Sertifikat Resmi',
    deskripsi: 'EduSmart memberikan sertifikat resmi setelah menyelesaikan kursus, yang dapat meningkatkan kualifikasi dan peluang karier Anda.',
  },
  {
    icon: '📈',
    judul: 'Pemantauan Progres',
    deskripsi: 'EduSmart menyediakan fitur pemantauan progres belajar yang memungkinkan Anda melacak kemajuan dan mencapai tujuan pembelajaran Anda.',
  },
  {
    icon: '🌐',
    judul: 'Akses Kapanpun',
    deskripsi: 'EduSmart dapat diakses kapan saja dan di mana saja, memungkinkan Anda belajar sesuai jadwal dan kemampuan Anda.',
  },
  {
    icon: '🫱🏻‍🫲🏻',
    judul: 'Komunitas Belajar',
    deskripsi: 'EduSmart menyediakan komunitas belajar di mana Anda dapat berinteraksi dengan sesama pelajar, bertukar pengetahuan, dan saling mendukung dalam proses belajar.',
  }
]

function Card(){
  return (
    <section className="bg-background px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 border-b-4 border-primary pt-6 pb-8">
          <h2 className="text-4xl font-bold">Fitur Unggulan <span className="text-secondary">EduSmart</span></h2>
          <p className="text-gray-600 mt-4">Temukan berbagai fitur yang membuat pembelajaran online lebih efektif dan menyenangkan bersama EduSmart.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fitur.map((f) => (
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition flex flex-col" key={f.judul}>
            <div className="text-5xl mb-5">{f.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{f.judul}</h3>
            <p className="text-gray-700 mb-4">{f.deskripsi}</p>
            <div className="mt-auto">
              <Button label="Selengkapnya" variant="primary" />
            </div>
          </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

function Footer(){
  return (
    <footer className="bg-primary text-white py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="mb-3">
              <img src={logo} alt="logo" className="h-20 w-auto object-contain"/>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Platform pembelajaran digital terpercaya untuk generasi Indonesia yang ingin
              berkembang dan bersaing di era global.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wider text-sm">KURSUS</h4>
            <ul className="space-y-2 text-gray-400 ">
              <li className=""><a href="#" className="hover:text-secondary transition">Web Development</a></li>
              <li className=""><a href="#" className="hover:text-secondary transition">Data Science</a></li>
              <li className=""><a href="#" className="hover:text-secondary transition">UI/UX Design</a></li>
              <li className=""><a href="#" className="hover:text-secondary transition">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Perusahaan</h4>
            <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-secondary transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-secondary transition">Blog</a></li>
                <li><a href="#" className="hover:text-secondary transition">Karir</a></li>
                <li><a href="#" className="hover:text-secondary transition">Hubungi Kami</a></li>
            </ul>
          </div>
          <div>
              <h4 className="text-white mb-4">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4">Dapatkan info kursus terbaru</p>
              <div className="flex gap-1">
                <input 
                  type="email" 
                  placeholder="Email Anda" 
                  className="w-10 flex-1 px-4 py-2 rounded-lg bg-blue-950 border border-gray-700 focus:outline-none text-sm"
                />
                <Button label="Kirim" variant="secondary" />
              </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; 2026 EduSmart. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition">Kebijakan Privasi</a>
            <a href="#" className="hover:text-secondary transition">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Hover />
      <Card />
      <Footer />
    </>
  )
}

export default App
