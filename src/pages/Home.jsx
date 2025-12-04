import React from 'react';

const Home = () => {
  return (
    <div className="home-container pt-5">
      
      {/* --- STYLE KHUSUS UNTUK ANIMASI (Tombol, Tech Badges, & Floating) --- */}
      <style>
        {`
          /* 1. Animasi Putaran Border (Untuk Tombol & Badge) */
          @keyframes spin-border {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }

          /* 2. Animasi Melayang (Floating) - Untuk Foto & Card */
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); } /* Naik 15px */
            100% { transform: translateY(0px); }
          }

          /* 3. Animasi Berdenyut (Glow Pulse) - Untuk Border Card */
          @keyframes glow-pulse {
            0% { box-shadow: 0 0 15px rgba(121, 80, 242, 0.2); border-color: rgba(121, 80, 242, 0.3); }
            50% { box-shadow: 0 0 30px rgba(247, 131, 172, 0.4); border-color: rgba(247, 131, 172, 0.6); }
            100% { box-shadow: 0 0 15px rgba(121, 80, 242, 0.2); border-color: rgba(121, 80, 242, 0.3); }
          }

          /* --- Class Utility Animasi --- */
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .animate-float-delay {
            animation: float 5s ease-in-out infinite reverse; /* Gerak berlawanan arah */
          }
          .card-glow-pulse {
            animation: glow-pulse 3s infinite;
          }

          /* --- 1. Style Tombol Utama (Lihat Project) --- */
          .btn-magic-border {
            position: relative;
            display: inline-block;
            padding: 3px;
            border-radius: 50px;
            overflow: hidden;
            text-decoration: none;
            background: transparent;
            box-shadow: 0 0 20px rgba(121, 80, 242, 0.3);
            transition: all 0.3s ease;
          }
          .btn-magic-border::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 400%;
            height: 400%;
            background: conic-gradient(from 0deg, #7950f2, #f783ac, #7950f2);
            transform: translate(-50%, -50%);
            z-index: 0;
            animation: spin-border 4s linear infinite; /* Muter pelan constant */
          }
          .btn-magic-border:hover::before {
            animation: spin-border 1.5s linear infinite; /* Muter cepat pas hover */
          }
          .btn-magic-border:hover {
            box-shadow: 0 0 40px rgba(247, 131, 172, 0.6);
            transform: translateY(-5px);
          }
          .btn-magic-inner {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0f1014;
            color: white;
            border-radius: 47px; 
            width: 100%;
            height: 100%;
            padding: 12px 30px;
            z-index: 1;
            font-weight: bold;
            transition: background 0.3s;
          }
          .btn-magic-border:hover .btn-magic-inner {
            background: #161616;
            color: white;
          }

          /* --- 2. Style Tombol Kedua (Hubungi Saya) - BARU --- */
          .btn-magic-secondary {
            position: relative;
            display: inline-block;
            padding: 2px; /* Border tipis */
            border-radius: 50px;
            overflow: hidden;
            text-decoration: none;
            background: transparent;
            transition: all 0.3s ease;
            box-shadow: 0 0 0 1px rgba(255,255,255,0.2); /* Outline awal */
          }
          
          /* Layer Gradasi (Awalnya sembunyi/diam) */
          .btn-magic-secondary::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 400%;
            height: 400%;
            background: conic-gradient(from 0deg, transparent, #7950f2, #f783ac, #7950f2, transparent); /* Gradasi dengan ekor transparan */
            transform: translate(-50%, -50%);
            z-index: 0;
            opacity: 0;
            transition: opacity 0.3s;
          }

          /* Efek Hover & Active (Ditekan) */
          .btn-magic-secondary:hover::before, 
          .btn-magic-secondary:active::before {
            opacity: 1;
            animation: spin-border 1.5s linear infinite; /* Muter saat disentuh */
          }

          .btn-magic-secondary:hover {
            box-shadow: 0 0 20px rgba(121, 80, 242, 0.4);
            transform: translateY(-2px);
            border: none;
          }
          
          .btn-magic-secondary-inner {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #050505; /* Hitam pekat */
            color: #ccc;
            border-radius: 48px;
            width: 100%;
            height: 100%;
            padding: 12px 30px;
            z-index: 1;
            font-weight: 600;
            transition: all 0.3s;
          }
          .btn-magic-secondary:hover .btn-magic-secondary-inner {
            color: white;
            background: #111;
          }

          /* --- Style Tech Badges (Kecil) --- */
          .tech-badge-magic {
            position: relative;
            display: inline-block;
            padding: 2px;
            border-radius: 50px;
            overflow: hidden;
            background: transparent;
            transition: transform 0.3s ease;
            cursor: default;
          }
          .tech-badge-magic::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300%;
            height: 300%;
            background: conic-gradient(from 0deg, #7950f2, #f783ac, #7950f2);
            transform: translate(-50%, -50%);
            z-index: 0;
            opacity: 0.7; /* Lebih terang dari sebelumnya */
          }
          .tech-badge-magic:hover::before {
            animation: spin-border 2s linear infinite;
            opacity: 1;
          }
          .tech-badge-magic:hover {
            transform: scale(1.1); 
            box-shadow: 0 0 20px rgba(121, 80, 242, 0.5);
          }
          .tech-badge-inner {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #1a1a1a; /* Background badge lebih terang sedikit */
            color: #fff; /* Teks putih terang */
            border-radius: 48px;
            padding: 8px 20px;
            z-index: 1;
            font-size: 0.95rem;
            font-weight: 500;
          }

          /* --- Card Section Style --- */
          .card-glass {
            background: rgba(25, 25, 30, 0.6); /* Lebih terang & transparan */
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px;
          }
        `}
      </style>

      {/* --- HERO SECTION --- */}
      <section className="hero-section text-center d-flex flex-column align-items-center justify-content-center pt-5 mt-5">
        <div className="container">
          
          {/* FOTO PROFIL (ANIMASI MELAYANG) */}
          <div className="mb-4 d-flex justify-content-center animate-float">
             <div className="rounded-circle overflow-hidden bg-dark border border-secondary position-relative" style={{width: '160px', height: '160px', boxShadow: '0 0 50px rgba(121, 80, 242, 0.5)'}}>
                <img 
                  src="/Profil.png" 
                  alt="Profile" 
                  className="w-100 h-100 object-fit-cover"
                /> 
             </div>
          </div>

          {/* Judul Besar */}
          <h1 className="display-4 fw-bold mb-4 text-white" style={{ lineHeight: '1.2' }}>
            Hi, I'm <br />
            <span className="text-gradient">ADINDA DWI RAMADHANI</span>
          </h1>
          
          {/* Deskripsi Singkat (TEXT LEBIH TERANG) */}
          <p className="text-white-50 mb-5 mx-auto fs-3 fw-light" style={{ maxWidth: '800px', textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>
            Saya seorang <span className="text-white fw-normal">Junior Developer</span>
          </p>
          
          {/* --- TOMBOL AKSI --- */}
          <div className="d-flex justify-content-center gap-4 mb-5">
            {/* Tombol 1: Lihat Project (Selalu Muter Pelan, Cepat pas Hover) */}
            <a href="#projects" className="btn-magic-border">
               <span className="btn-magic-inner">Lihat Project Saya</span>
            </a>
            
            {/* Tombol 2: Hubungi Saya (Muter HANYA saat Di-teken/Hover) */}
            <a href="#contact" className="btn-magic-secondary">
               <span className="btn-magic-secondary-inner">Hubungi Saya</span>
            </a>
          </div>

          {/* Tech Stack Visual (ANIMASI MELAYANG & DENYUT) */}
          <div className="dashboard-mockup mx-auto position-relative animate-float-delay" style={{ maxWidth: '900px' }}>
             
             {/* Glow Effect Background */}
             <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '70%', height: '70%', background: '#7950f2', filter: 'blur(90px)', opacity: 0.4, zIndex: -1
             }}></div>
             
             {/* Card Container */}
             <div className="card-glass card-glow-pulse" style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
                <h5 className="text-white text-uppercase fw-bold mb-4 small" style={{ letterSpacing: '2px' }}>Technical Arsenal</h5>
                
                {/* LIST TECH STACK */}
                <div className="d-flex flex-wrap justify-content-center gap-4 px-4">
                   <div className="tech-badge-magic"><span className="tech-badge-inner">⚛️ React.js</span></div>
                   <div className="tech-badge-magic"><span className="tech-badge-inner">🟢 Node.js</span></div>
                   <div className="tech-badge-magic"><span className="tech-badge-inner">🎮 Unity</span></div>
                   <div className="tech-badge-magic"><span className="tech-badge-inner">🐬 MySQL</span></div>
                   <div className="tech-badge-magic"><span className="tech-badge-inner">🎩 Red Hat</span></div>
                   <div className="tech-badge-magic"><span className="tech-badge-inner">🐍 Python</span></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: TECHNICAL EXPERTISE --- */}
      <section className="py-5 my-5">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Teks Kiri */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-3 text-white">
                Lebih dari Sekadar Coding, <br />
                <span className="text-gradient">-Saya Membangun Solusi.</span>
              </h2>
              {/* Text diperterang */}
              <p className="text-light opacity-75 mb-4 fs-5">
                Menghubungkan kesenjangan antara media interaktif, sistem web yang handal, dan pemrosesan data cerdas.
              </p>
              
              <ul className="list-unstyled">
                {/* Skill Group 1: Web Dev */}
                <li className="mb-4 d-flex align-items-start">
                  <span className="badge rounded-circle bg-primary p-2 me-3 shadow-lg"><i className="bi bi-code-slash"></i></span> 
                  <div>
                    <strong className="text-white d-block fs-5">Full Stack Development</strong>
                    <span className="text-light opacity-75 small">Frontend menggunakan React, Backend dengan Node.js, dan manajemen Database dengan MySQL.</span>
                  </div>
                </li>
                
                {/* Skill Group 2: Game Dev */}
                <li className="mb-4 d-flex align-items-start">
                  <span className="badge rounded-circle bg-success p-2 me-3 shadow-lg"><i className="bi bi-controller"></i></span> 
                  <div>
                    <strong className="text-white d-block fs-5">Game Development</strong>
                    <span className="text-light opacity-75 small">Menciptakan pengalaman imersif menggunakan Unity Engine.</span>
                  </div>
                </li>

                {/* Skill Group 3: Data Science & ML */}
                <li className="mb-4 d-flex align-items-start">
                  <span className="badge rounded-circle bg-danger p-2 me-3 shadow-lg"><i className="bi bi-graph-up"></i></span> 
                  <div>
                    <strong className="text-white d-block fs-5">Data Science & AI</strong>
                    <span className="text-light opacity-75 small">
                      Memproses data dengan Pandas, NumPy, Matplotlib. Implementasi ML dengan Scikit-Learn & OpenCV. 
                      Berpengalaman menggunakan lingkungan Google Colab.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Gambar Kanan (Visual) - DIPERBARUI */}
            <div className="col-lg-6">
              {/* Card visual diberi efek glass dan glow + Gambar */}
              <div className="card-glass position-relative overflow-hidden" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                
                {/* Background Glow di belakang gambar */}
                <div style={{
                   position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                   width: '60%', height: '60%', background: '#7950f2', filter: 'blur(80px)', opacity: 0.3, zIndex: 0
                }}></div>

                {/* Gambar Ilustrasi (Ganti src dengan gambar coding/setup kamu sendiri nanti) */}
                <img 
                  src="/Wordcloud.png" 
                  alt="Coding Illustration" 
                  className="img-fluid rounded-3 animate-float position-relative"
                  style={{ 
                    maxWidth: '85%', 
                    zIndex: 1,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                />

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;