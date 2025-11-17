import React from "react";
import "../assets/styles/party.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function PartyBoard() {
  const navigate = useNavigate();
  const { user, addNotification } = useUser();

  const sampleParties = [
    {
      id: 1,
      writerId: "user123", // 내가 쓴 글
      title: "같이 보실 분",
      date: "2025-11-15 (토) 19:00",
      members: "2 / 4",
      tags: "간단소개, 정보, 자유문구",
    },
    {
      id: 2,
      writerId: "user999", // 다른 사람
      title: "볼새럼",
      date: "2025-11-18 (화) 18:30",
      members: "1 / 3",
      tags: "자유문구",
    },
    {
      id: 3,
      writerId: "user888", // 다른 사람
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

            {/* ⭐ 참여하기 버튼 조건부 렌더링 */}
            {party.writerId !== user.id ? (
              <button
                className="join-btn"
                onClick={() =>
                  addNotification(`"${party.title}" 팟에 참여 요청이 도착했습니다.`)
                }
              >
                참여하기
              </button>
            ) : (
              <button className="join-btn disabled" disabled>
                내가 쓴 글
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
