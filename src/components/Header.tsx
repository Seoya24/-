import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import { useUser } from "../context/UserContext";   // ⭐ 추가

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { unreadCount } = useUser();   // ⭐ 읽지 않은 알림 수 가져오기

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* 왼쪽 로고 */}
        <div className="header-left">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="logo" />
          </Link>
        </div>

        {/* 가운데 메뉴 */}
        <nav className="header-center">
          {/* Talk & Find */}
          <div
            className="menu-wrapper"
            onMouseEnter={() => handleMouseEnter("talk")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="menu-item">Talk & Find</span>
            {activeMenu === "talk" && (
              <div className="dropdown">
                <Link to="/party" className="dropdown-item">팟 구하기</Link>
                <Link to="/board" className="dropdown-item">자유게시판</Link>
              </div>
            )}
          </div>

          {/* Stage Manager */}
          <div
            className="menu-wrapper"
            onMouseEnter={() => handleMouseEnter("stage")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="menu-item">Stage Manager</span>

            {activeMenu === "stage" && (
              <div className="dropdown">
                <Link to="/rental" className="dropdown-item">대관</Link>
                <Link to="/posting/apply" className="dropdown-item">포스팅신청</Link>
              </div>
            )}
          </div>
        </nav>

        {/* 오른쪽 영역 */}
        <div className="header-right">
          <div className="search-area">
            <button className="search-btn">🔍</button>
            <input type="text" placeholder="Search…" className="search-input" />
          </div>

          <Link to="/login" className="login-btn">
            로그인
          </Link>

          {/* ⭐ 마이페이지 아이콘 + 알림 뱃지 */}
          <Link to="/mypage" className="mypage-wrapper">
            <img src="/icon.png" alt="my page" className="right-icon" />

            {unreadCount > 0 && (
              <span className="noti-badge">{unreadCount}</span>
            )}
          </Link>
        </div>

      </div>
    </header>
  );
}
