import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import "../assets/styles/booking.css";

export default function Booking() {
  const { showId } = useParams();
  const navigate = useNavigate();

  const [showInfo, setShowInfo] = useState(null);
  const [peopleCount, setPeopleCount] = useState(1);

  useEffect(() => {
    setShowInfo({
      id: showId,
      title: "빛, 나잖아",
      place: "백석 아트홀",
      period: "2025.01.01 ~ 2025.01.05",
      host: "백석대학교 예술학부",
      poster: "/poster1.jpg",
    });
  }, [showId]);

  const handleDecrease = () => {
    setPeopleCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setPeopleCount((prev) => prev + 1);
  };

  // ⭐ 예매 버튼 클릭 → 티켓 페이지 이동
  const handleBooking = () => {
    const ticketId = Math.floor(Math.random() * 100000);
    navigate(`/ticket/${ticketId}`);
  };

  if (!showInfo) {
    return (
      <div className="booking-container" style={{ paddingTop: "150px" }}>
        불러오는 중...
      </div>
    );
  }

  return (
    <div className="booking-container">
      <div className="booking-content">

        <div className="booking-top">
          <div className="booking-poster-box">
            <img
              src={showInfo.poster}
              alt={showInfo.title}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="booking-info">
            <h2 className="booking-title">[{showInfo.title}]</h2>
            <p><strong>장소 :</strong> {showInfo.place}</p>
            <p><strong>기간 :</strong> {showInfo.period}</p>
            <p><strong>주최 :</strong> {showInfo.host}</p>
          </div>
        </div>

        <hr className="booking-divider" />

        {/* 날짜 선택 */}
        <div className="booking-row">
          <label className="booking-label">날짜 선택</label>
          <input type="date" className="booking-date" />
        </div>

        {/* 인원 선택 */}
        <div className="booking-row">
          <label className="booking-label">인원</label>
          <div className="booking-count">
            <button onClick={handleDecrease}>-</button>
            <span>{peopleCount}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>

        {/* ⭐ 예매 버튼 */}
        <button className="booking-btn" onClick={handleBooking}>
          예매하기
        </button>
      </div>
    </div>
  );
}

