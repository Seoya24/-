import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/global.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import FreeBoard from "./pages/FreeBoard";
import WritePost from "./pages/WritePost";
import PartyBoard from "./pages/PartyBoard";
import WriteParty from "./pages/WriteParty";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Ticket from "./pages/Ticket";
import MyPage from "./pages/MyPage";
import MyPageEdit from "./pages/MyPageEdit";
import { UserProvider } from "./context/UserContext";
import PostApply from "./pages/PostApply";
import Rental from "./pages/Rental";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <BrowserRouter>
      {/* UserProvider로 감싸기 → useUser 정상 작동 */}
      <UserProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<FreeBoard />} />
          <Route path="/board/:id" element={<PostDetail />} />   
          <Route path="/write" element={<WritePost />} />
          <Route path="/party" element={<PartyBoard />} />
          <Route path="/party/write" element={<WriteParty />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking/:showId" element={<Booking />} />
          <Route path="/ticket/:ticketId" element={<Ticket />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/edit" element={<MyPageEdit />} />
          <Route path="/posting/apply" element={<PostApply />} />
          <Route path="/rental" element={<Rental />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
