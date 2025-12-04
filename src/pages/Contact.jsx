import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container py-5" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      {/* Inject Style Khusus untuk Animasi Button */}
      <style>
        {`
          @keyframes spin-border {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }

          .btn-magic-border {
            position: relative;
            display: inline-block;
            padding: 3px; /* Ketebalan Border Gradasi */
            border-radius: 50px;
            overflow: hidden;
            text-decoration: none;
            width: 100%;
            background: transparent;
            box-shadow: 0 0 20px rgba(121, 80, 242, 0.3); /* Glow Awal */
            transition: box-shadow 0.3s ease;
          }
          
          /* Layer Gradasi (Di belakang) */
          .btn-magic-border::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 400%; /* Ukuran besar agar saat putar cover semua sudut */
            height: 400%;
            /* Warna Gradasi Ungu - Pink */
            background: conic-gradient(from 0deg, #7950f2, #f783ac, #7950f2);
            transform: translate(-50%, -50%);
            z-index: 0;
            /* Default: Diam (Static) */
          }

          /* Efek Hover: Jalankan Animasi Muter */
          .btn-magic-border:hover::before {
            animation: spin-border 2s linear infinite;
          }
          
          .btn-magic-border:hover {
            box-shadow: 0 0 30px rgba(247, 131, 172, 0.6); /* Glow makin terang saat hover */
          }

          /* Konten Dalam (Hitam untuk menutupi tengah gradasi) */
          .btn-magic-inner {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0f1014; /* Samakan dengan warna Card */
            color: white;
            border-radius: 47px; /* Sedikit lebih kecil dari wrapper */
            width: 100%;
            height: 100%;
            padding: 12px 20px;
            z-index: 1;
            font-weight: bold;
            transition: background 0.3s;
          }

          .btn-magic-border:hover .btn-magic-inner {
            background: #161616; /* Sedikit lebih terang saat hover */
          }
        `}
      </style>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            
            {/* Judul dengan Gradient */}
            <h1 className="display-4 fw-bold mb-4 text-white">
              CONTACT <span className="text-gradient">ME</span>
            </h1>
            
            {/* Deskripsi */}
            <p className="text-light mb-5 fs-5 opacity-75">
              Saya terbuka untuk project baru. <br />
              Mari kita diskusikan kebutuhan Anda!
            </p>

            {/* Card Kontak */}
            <div className="card-dark p-5 d-inline-block mx-auto" style={{ maxWidth: '600px', width: '100%' }}>
              
              <h3 className="text-white mb-3 fw-bold">Drop me an email</h3>
              <p className="text-white-50 mb-5">
                Apakah Anda memiliki pertanyaan atau ide proyek? Kirimkan saya pesan!
              </p>
              
              {/* Tombol Email dengan Efek Gradasi Muter */}
              <a 
                href="mailto:dindaramadani054@gmail.com" 
                className="btn-magic-border"
              >
                <span className="btn-magic-inner">
                  <i className="bi bi-send-fill me-2"></i> Contact Me
                </span>
              </a>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;