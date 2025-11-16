import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

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

          <div
            className="menu-wrapper"
            onMouseEnter={() => handleMouseEnter("stage")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="menu-item">Stage Manager</span>
            {activeMenu === "stage" && (
              <div className="dropdown">
                <a className="dropdown-item" href="#">대관</a>
                <a className="dropdown-item" href="#">포스팅신청</a>
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

          {/* 로그인 버튼 → Link로 변경 */}
          <Link to="/login" className="login-btn">
            로그인
          </Link>

          <img src="/icon.png" alt="icon" className="right-icon" />
        </div>

      </div>
    </header>
  );
}
