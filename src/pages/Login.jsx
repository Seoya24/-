import React from "react";
import "../App.css";

export default function Login() {
  return (
    <div className="login-container">
      {/* 로고 */}
      <img src="/logo.png" alt="logo" className="login-logo" />

      {/* 로그인 버튼 영역 */}
      <div className="login-buttons">
        {/* 카카오 */}
        <button className="login-btn-kakao">
          <img src="/kakao.png" className="login-icon" alt="Kakao" />
          <span>카카오로 시작하기</span>
        </button>

        {/* 구글 */}
        <button className="login-btn-google">
          <img src="/google.png" className="login-icon" alt="Google" />
          <span>구글로 시작하기</span>
        </button>
      </div>
    </div>
  );
}

