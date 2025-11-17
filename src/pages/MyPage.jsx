import React from "react";
import { useUser } from "../context/UserContext";
import "../assets/styles/mypage.css";
import { Link } from "react-router-dom";

export default function MyPage() {
  const { user } = useUser();

  return (
    <div className="mypage-container">

      {/* ================================
          프로필 영역
      ================================= */}
      <div className="mypage-profile-center">
        <div className="mypage-profile-img">
          {user?.profileImage && <img src={user.profileImage} alt="profile" />}
        </div>

        <h2 className="mypage-nickname">{user?.nickname || "닉네임"}</h2>
        <p className="mypage-email">{user?.email || "email@example.com"}</p>

        <Link to="/mypage/edit">
          <button className="mypage-edit-btn">정보 수정</button>
        </Link>
      </div>

      {/* ================================
          학부생 인증 카드
      ================================= */}
      <div className="mypage-verify-card">
        <div className="verify-row">
          <span className="verify-label">학부생 인증</span>
          <span className="verify-dot green"></span>
        </div>

        <p className="verify-info">학번 : 20213416</p>
        <p className="verify-info">전공 : 컴퓨터공학부</p>
      </div>

      <hr className="mypage-divider" />

      {/* ================================
          알림 목록
      ================================= */}
      {user.notifications?.length > 0 && (
        <>
          <h2 className="mypage-section-title">알림</h2>

          <div className="mypage-notification-list">
            {user.notifications.map((msg, index) => (
              <div key={index} className="notification-item">
                <span className="notification-dot"></span>
                <p className="notification-text">{msg.message}</p>
              </div>
            ))}
          </div>

          <hr className="mypage-divider" />
        </>
      )}

      {/* ================================
          예매 내역
      ================================= */}
      <h2 className="mypage-section-title">예매 내역</h2>

      <div className="mypage-ticket-box">
        <div className="ticket-thumb"></div>
        <div className="ticket-info">
          <h3 className="ticket-title">공연명</h3>
          <p className="ticket-place">백석 아트홀</p>
          <p className="ticket-date">2025-11-16 15:00</p>
          <p className="ticket-people">2명</p>
        </div>
      </div>

    </div>
  );
}
