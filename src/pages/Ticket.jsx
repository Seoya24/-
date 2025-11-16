import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/styles/ticket.css";

export default function Ticket() {
  const { ticketId } = useParams();
  const navigate = useNavigate();

  // 임시 데이터임
  const ticket = {
    title: "빛, 나잖아",
    place: "백석 아트홀",
    date: "2025-11-16",
    people: 2,
  };

  return (
    <div className="ticket-container">
      <div className="ticket-card">
        <h2 className="ticket-title">예매 완료</h2>

        <div className="ticket-section">
          <p className="ticket-label">공연명</p>
          <p className="ticket-value">{ticket.title}</p>

          <p className="ticket-label">장소</p>
          <p className="ticket-value">{ticket.place}</p>

          <p className="ticket-label">날짜</p>
          <p className="ticket-value">{ticket.date}</p>

          <p className="ticket-label">인원</p>
          <p className="ticket-value">{ticket.people}명</p>
        </div>

        {/* 티켓절취선 */}
        <div className="ticket-divider">
          <span className="ticket-hole left-hole"></span>
          <hr className="ticket-dashed" />
          <span className="ticket-hole right-hole"></span>
        </div>

        <p className="ticket-id">TICKET #{ticketId}</p>

        <button className="ticket-btn" onClick={() => navigate("/")}>
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}
