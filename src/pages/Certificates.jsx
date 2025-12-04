import React, { useState } from 'react';


import aiImg from '../assets/AI.jpeg';
import aimlImg from '../assets/AIML.jpeg'; 
import Huawei from '../assets/Huawei.jpeg';
import excel from '../assets/MsExcel.jpeg';
const Certificates = () => {
  // State untuk menyimpan gambar yang sedang dibuka (Modal)
  const [selectedImg, setSelectedImg] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Chatbot AI",
      issuer: "Udemy",
      status: "Verified",
      color: "success",
      imgUrl:aiImg,
    },
    {
      id: 2,
      title: "Machine Learning Operation",
      issuer: "Udemy",
      status: "Verified",
      color: "success",
      imgUrl: aimlImg,
    },
    {
      id: 3,
      title: "Huawei ",
      issuer: "Huawei",
        status: "Verified",
      color: "warning",
      imgUrl:Huawei,
    },
    {
      id: 4,
      title: "Ms Excel",
      issuer: "Udemy",
      status: "Verified",
      color: "success",
      imgUrl:excel,
    }
  ];

  return (
    <div className="certificates-container py-5">
      
      {/* --- STYLE KHUSUS --- */}
      <style>
        {`
          /* Card Style */
          .cert-card {
            background: rgba(20, 20, 25, 0.6);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            overflow: hidden;
            transition: all 0.4s ease;
            height: 100%;
          }
          .cert-card:hover {
            transform: translateY(-5px);
            border-color: rgba(121, 80, 242, 0.5);
            box-shadow: 0 10px 30px rgba(121, 80, 242, 0.2);
          }

          /* Container Gambar di Card */
          .cert-img-wrapper {
            position: relative;
            width: 100%;
            height: 220px;
            overflow: hidden;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            background-color: #000; /* Background hitam agar rapi jika gambar beda rasio */
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* Gambar di dalam Card (Thumbnail) */
          .cert-img {
            width: 100%;
            height: 100%;
            object-fit: contain; /* PENTING: Agar gambar TIDAK TERPOTONG/CROP */
            transition: transform 0.5s ease;
          }

          .cert-card:hover .cert-img {
            transform: scale(1.05);
          }

          /* Badge Status */
          .cert-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 2;
            box-shadow: 0 2px 5px rgba(0,0,0,0.5);
          }
          
          /* Tombol View */
          .btn-view-cert {
             background: rgba(255,255,255,0.05);
             border: 1px solid rgba(255,255,255,0.1);
             color: white;
             width: 100%;
             padding: 10px;
             border-radius: 8px;
             transition: all 0.3s;
             cursor: pointer;
          }
          .btn-view-cert:hover {
             background: #7950f2;
             border-color: #7950f2;
          }

          /* --- MODAL (POPUP GAMBAR) --- */
          .cert-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: fadeIn 0.3s ease;
          }
          
          .cert-modal-content {
            position: relative;
            max-width: 90%;
            max-height: 90vh;
            border-radius: 8px;
            box-shadow: 0 0 50px rgba(121, 80, 242, 0.3);
            animation: zoomIn 0.3s ease;
          }

          .cert-modal-img {
            max-width: 100%;
            max-height: 85vh;
            border-radius: 8px;
            border: 2px solid rgba(255, 255, 255, 0.1);
          }

          .btn-close-modal {
            position: absolute;
            top: -40px;
            right: 0;
            background: transparent;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            transition: color 0.3s;
          }
          .btn-close-modal:hover { color: #f783ac; }

          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes zoomIn { from { transform: scale(0.9); } to { transform: scale(1); } }
        `}
      </style>

      <div className="container mt-5 pt-4">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-white mb-3">
            My <span className="text-gradient">Certificates</span>
          </h1>
          <p className="text-white-50 fs-5">
            Bukti kompetensi dan sertifikasi profesional yang telah saya raih.
          </p>
        </div>

        {/* Grid Layout Card */}
        <div className="row g-4">
          {certificates.map((cert) => (
            <div className="col-md-6 col-lg-4" key={cert.id}>
              <div className="cert-card d-flex flex-column">
                
                {/* Bagian Gambar Sertifikat (Thumbnail) */}
                <div 
                  className="cert-img-wrapper" 
                  role="button" 
                  onClick={() => setSelectedImg(cert.imgUrl)} // Klik gambar juga buka modal
                >
                  <span className={`badge rounded-pill cert-badge bg-${cert.color} text-white`}>
                    {cert.status === 'Verified' ? <i className="bi bi-patch-check-fill me-1"></i> : <i className="bi bi-hourglass-split me-1"></i>}
                    {cert.status}
                  </span>
                  
                  <img src={cert.imgUrl} alt={cert.title} className="cert-img" />
                </div>

                {/* Konten Text */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h5 className="fw-bold text-white mb-2">{cert.title}</h5>
                  <p className="text-light opacity-75 mb-1 small text-uppercase fw-semibold" style={{letterSpacing: '1px', color: '#f783ac !important'}}>
                    {cert.issuer}
                  </p>
                  <p className="text-white-50 small mb-4">
                    <i className="bi bi-calendar-event me-2"></i>
                    {cert.date}
                  </p>

                  {/* Tombol Aksi (Bawah) */}
                  <div className="mt-auto">
                    <button 
                      className="btn-view-cert small fw-bold"
                      onClick={() => setSelectedImg(cert.imgUrl)} // Tombol buka modal
                    >
                       <i className="bi bi-eye-fill me-2"></i> Lihat Detail
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- MODAL POPUP (Overlay) --- */}
      {selectedImg && (
        <div className="cert-modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close-modal" onClick={() => setSelectedImg(null)}>
              <i className="bi bi-x"></i>
            </button>
            <img src={selectedImg} alt="Certificate Detail" className="cert-modal-img" />
          </div>
        </div>
      )}

    </div>
  );
}

export default Certificates;