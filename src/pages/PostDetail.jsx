import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "../assets/styles/post-detail.css";

export default function PostDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  // FreeBoard에서 넘어온 데이터
  const postFromList = location.state?.post;

  // 기본값(직접 URL로 접근했을 때 대비)
  const [post] = useState(
    postFromList || {
      id,
      title: "게시글 제목",
      content: "게시글 내용이 여기에 표시됩니다.",
      date: "2025-11-03",
      image: null,
    }
  );

  // ⭐ 좋아요 기능
  const [likeCount, setLikeCount] = useState(0);
  const handleLike = () => setLikeCount((prev) => prev + 1);

  // ⭐ 댓글 기능
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (!commentInput.trim()) return;

    const newComment = {
      id: Date.now(),
      writer: "익명", // 추후 user.nickname으로 교체 가능
      content: commentInput,
      createdAt: new Date().toLocaleString(),
    };

    setComments((prev) => [newComment, ...prev]);
    setCommentInput("");
  };

  return (
    <div className="post-detail-container">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← 목록으로
      </button>

      <div className="post-detail-card">
        <h2 className="detail-title">{post.title}</h2>
        <p className="detail-date">{post.date}</p>

        <div className="detail-content">{post.content}</div>

        {/* 이미지가 있다면 표시 */}
        {post.image && (
          <img src={post.image} alt="post" className="detail-image" />
        )}

        {/* ⭐ 좋아요 */}
        <div className="detail-like-row">
          <button className="like-btn" onClick={handleLike}>❤️ 좋아요</button>
          <span className="like-count">좋아요 {likeCount}개</span>
        </div>

        <hr className="detail-divider" />

        {/* ⭐ 댓글 */}
        <h3 className="comment-title">댓글</h3>

        <div className="comment-input-box">
          <textarea
            className="comment-textarea"
            placeholder="댓글을 입력하세요"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button className="comment-submit-btn" onClick={handleAddComment}>
            등록
          </button>
        </div>

        {/* 댓글 리스트 */}
        <div className="comment-list">
          {comments.length === 0 && (
            <p className="comment-empty">아직 댓글이 없습니다.</p>
          )}

          {comments.map((c) => (
            <div key={c.id} className="comment-item">
              <div className="comment-header">
                <span className="comment-writer">{c.writer}</span>
                <span className="comment-date">{c.createdAt}</span>
              </div>
              <p className="comment-content">{c.content}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
