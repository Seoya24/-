import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  const handlePosterClick = () => {
    navigate("/booking");
  };

  return (
    <div className="home-container">
      {/* ✅ 메인 포스터 */}
      <div className="poster-wrapper">
        <img
          src="/poster.jpg"
          alt="뮤지컬 포스터"
          className="poster-image"
          onClick={handlePosterClick}
        />
      </div>

      {/* ✅ 학부별 콘텐츠 섹션 */}
      <section className="content-section">
        <h2 className="section-title">학부별 콘텐츠</h2>

        {/* 🎭 문화예술학부 */}
        <div className="department">
          <h3 className="dept-title">문화예술학부</h3>
          <div className="poster-grid">
            <img src="/poster1.jpg" alt="빛, 나잖아" className="dept-poster" />
            <img src="/poster2.jpg" alt="To The Light" className="dept-poster" />
            <img src="/poster3.jpg" alt="도시" className="dept-poster" />
          </div>
        </div>

        {/* 🎨 디자인영상학부 */}
        <div className="department">
          <h3 className="dept-title">디자인영상학부</h3>
          <div className="poster-grid">
            <div className="poster-placeholder"></div>
            <div className="poster-placeholder"></div>
            <div className="poster-placeholder"></div>
          </div>
        </div>

        {/* 🏃‍♀️ 스포츠과학부 */}
        <div className="department">
          <h3 className="dept-title">스포츠과학부</h3>
          <div className="poster-grid">
            <div className="poster-placeholder"></div>
            <div className="poster-placeholder"></div>
            <div className="poster-placeholder"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
