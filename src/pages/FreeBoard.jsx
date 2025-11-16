import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/board.css";

export default function FreeBoard() {
  // ✅ 더미 게시글 (디자인 확인용)
  const samplePosts = [
    { id: 1, title: "오늘 공연 정말 감동이었어요", content: "배우님들 연기가 너무 좋았어요.", date: "2025-11-03" },
    { id: 2, title: "무대 디자인이 너무 멋졌어요", content: "조명과 음악이 완벽했어요.", date: "2025-11-03" },
    { id: 3, title: "음향이 살짝 아쉬웠지만 전체적으로 최고!", content: "다음에도 또 보고 싶어요.", date: "2025-11-03" },
  ];

  return (
    <div className="board-container">
      <h2 className="board-title">자유게시판</h2>
      <p className="board-sub">공연 관람자들의 이야기를 자유롭게 나누는 공간입니다</p>

      {/* ✅ 작성 버튼 */}
      <div className="board-top">
        <Link to="/write" className="write-btn">
          작성하기
        </Link>
      </div>

      {/* ✅ 게시글 리스트 */}
      <div className="post-list">
        {samplePosts.map((post) => (
          <div key={post.id} className="post-item">
            <div className="post-info">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.content}</p>
              <p className="post-date">{post.date}</p>
            </div>
            <div className="post-thumbnail">사진</div>
          </div>
        ))}
      </div>
    </div>
  );
}
