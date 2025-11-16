import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import FreeBoard from "./pages/FreeBoard";
import WritePost from "./pages/WritePost";
import PartyBoard from "./pages/PartyBoard";
import WriteParty from "./pages/WriteParty";
import Login from "./pages/Login";  // ⭐ 추가

function App() {
  return (
    <BrowserRouter>
      {/* ✅ 항상 상단에 고정되는 헤더 */}
      <Header />

      {/* ✅ 페이지 라우팅 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<FreeBoard />} /> 
        <Route path="/write" element={<WritePost />} /> 
        <Route path="/party" element={<PartyBoard />} /> 
        <Route path="/party/write" element={<WriteParty />} />

        <Route path="/login" element={<Login />} /> {/* ⭐ 로그인 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
