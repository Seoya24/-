import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "../assets/styles/mypage-edit.css";
// import axios from "axios"; // 나중에 백엔드 연결할 때 사용

export default function MyPageEdit() {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();

  const [nickname, setNickname] = useState(user.nickname || "");
  const [profileImage, setProfileImage] = useState(user.profileImage || "");
  const [uploadFile, setUploadFile] = useState(null);

  // 🔥 이미지 업로드 준비 함수
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadFile(file);

    // 미리보기 URL 생성
    const preview = URL.createObjectURL(file);
    setProfileImage(preview);
  };

  const handleSave = async () => {
    if (!nickname.trim()) {
      alert("닉네임은 필수 입력입니다!");
      return;
    }

    // 🔥 1) 이미지가 변경되었다면 FormData 생성 (백엔드 준비)
    let finalImageURL = user.profileImage; // 기본값

    if (uploadFile) {
      const formData = new FormData();
      formData.append("image", uploadFile);

      try {
        console.log("📤 (준비단계) 이미지 업로드 FormData:", formData);

        // 🔥 실제 백엔드 연결 시 이렇게 사용:
        // const response = await axios.post("/api/upload", formData, {
        //   headers: { "Content-Type": "multipart/form-data" }
        // });
        // finalImageURL = response.data.imageUrl;

        // 🔥 지금은 프론트 테스트이므로 미리보기 값 사용
        finalImageURL = profileImage;
      } catch (err) {
        console.error("업로드 실패:", err);
      }
    }

    // 🔥 2) UserContext 업데이트 (이미지 포함)
    updateUser({
      nickname,
      profileImage: finalImageURL,
    });

    navigate("/mypage");
  };

  return (
    <div className="edit-container">
      <h2 className="edit-title">프로필 수정</h2>

      <div className="edit-profile-img-box">
        <label className="edit-profile-img">
          {profileImage ? (
            <img src={profileImage} alt="profile" />
          ) : (
            <span className="edit-placeholder">사진 업로드</span>
          )}
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>
      </div>

      <div className="edit-form">
        <label className="edit-label">닉네임</label>
        <input
          type="text"
          className="edit-input"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>

      <button className="edit-save-btn" onClick={handleSave}>
        저장하기
      </button>
    </div>
  );
}
