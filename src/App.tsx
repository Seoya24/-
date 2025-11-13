import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import FreeBoard from "./pages/FreeBoard";
import WritePost from "./pages/WritePost";
import PartyBoard from "./pages/PartyBoard";
import WriteParty from "./pages/WriteParty"; // ✅ 추가

function App() {
  return (
    <BrowserRouter>
      {/* ✅ 항상 상단에 고정되는 헤더 */}
      <Header />

      {/* ✅ 페이지 라우팅 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<FreeBoard />} /> {/* 자유게시판 */}
        <Route path="/write" element={<WritePost />} /> {/* 게시글 작성 */}
        <Route path="/party" element={<PartyBoard />} /> {/* 팟 구하기 */}
        <Route path="/party/write" element={<WriteParty />} /> {/* 팟 작성 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
