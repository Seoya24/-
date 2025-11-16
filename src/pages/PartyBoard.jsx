import React from "react";
import "../assets/styles/party.css";
import { useNavigate } from "react-router-dom"; // ✅ 페이지 이동용

export default function PartyBoard() {
  const navigate = useNavigate(); // ✅ 이동 기능 초기화

  const sampleParties = [
    {
      id: 1,
      title: "같이 보실 분",
      date: "2025-11-15 (토) 19:00",
      members: "2 / 4",
      tags: "간단소개, 정보, 자유문구",
    },
    {
      id: 2,
      title: "볼새럼",
      date: "2025-11-18 (화) 18:30",
      members: "1 / 3",
      tags: "자유문구",
    },
    {
      id: 3,
      title: "같이 보실",
      date: "2025-11-20 (목) 20:00",
      members: "3 / 5",
      tags: "간단소개",
    },
  ];

  return (
    <div className="board-container">
      <h2 className="board-title">팟 구하기</h2>
      <p className="board-sub">오늘의 관람메이트를 찾아보세요</p>

      <div className="board-top">
        {/* ✅ 클릭 시 작성 페이지로 이동 */}
        <button className="write-btn" onClick={() => navigate("/party/write")}>
          작성하기
        </button>
      </div>

      <div className="party-list">
        {sampleParties.map((party) => (
          <div key={party.id} className="party-item">
            <div className="party-info">
              <h3 className="party-title">{party.title}</h3>
              <p className="party-content">
                📅 {party.date} &nbsp;&nbsp; 👥 {party.members}
              </p>
              <p className="party-tags">{party.tags}</p>
            </div>
            <button className="join-btn">참여하기</button>
          </div>
        ))}
      </div>
    </div>
  );
}
