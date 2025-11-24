import React from "react";
import "../assets/styles/mypage.css";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function MyPage() {
  const { user, updateUser } = useUser();

  if (!user) return null;

  return (
    <div className="mypage-container">

      {/* ================================ 프로필 영역 ================================ */}
      <div className="mypage-profile-center">
        <div className="mypage-profile-img">
          {user.profileImage && <img src={user.profileImage} alt="profile" />}
        </div>

        <h2 className="mypage-nickname">{user.nickname}</h2>
        <p className="mypage-email">{user.email}</p>

        <Link to="/mypage/edit">
          <button className="mypage-edit-btn">정보 수정</button>
        </Link>
      </div>

      {/* ================================ 학부생 인증 ================================ */}
      <div className="mypage-verify-card">
        <div className="verify-row">
          <span className="verify-label">학부생 인증</span>
          <span className={`verify-dot ${user.verified ? "green" : "red"}`}></span>
        </div>

        {user.verified && (
          <>
            <p className="verify-info">학번 : {user.studentId}</p>
            <p className="verify-info">전공 : {user.major}</p>
          </>
        )}

        {!user.verified ? (
          <button className="verify-btn" onClick={() => updateUser({ verified: true })}>
            인증하기
          </button>
        ) : (
          <button className="verify-btn verified" onClick={() => updateUser({ verified: false })}>
            인증 취소
          </button>
        )}
      </div>

      {/* ================================ 알림 목록 ================================ */}
      {user.notifications.length > 0 && (
        <>
          <h2 className="mypage-section-title">알림</h2>
          <div className="mypage-notification-list">
            {user.notifications.map((n) => (
              <div key={n.id} className="notification-item">
                <span className="notification-dot"></span>
                <p className="notification-text">{n.message}</p>
              </div>
            ))}
          </div>
          <hr className="mypage-divider" />
        </>
      )}

      {/* ================================ 예매 내역 ================================ */}
      <h2 className="mypage-section-title">예매 내역</h2>

      {user.tickets.length === 0 ? (
        <p className="no-ticket-text">예매 내역이 없습니다.</p>
      ) : (
        user.tickets.map((t) => (
          <div key={t.id} className="mypage-ticket-box">
            <div className="ticket-thumb"></div>

            <div className="ticket-info">
              <h3 className="ticket-title">{t.title}</h3>
              <p className="ticket-place">{t.place}</p>
              <p className="ticket-date">{t.date} {t.time}</p>
              <p className="ticket-people">{t.people}명</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
