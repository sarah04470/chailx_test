import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '@header/Header';
import Home from '@pages/Home';
import Footer from '@footer/Footer';
// import PresentationPage from '@pages/PresentationPage'; // 발표논문 페이지 추가

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Home />} />

        {/* 발표논문 페이지 */}
        {/* <Route path="/board/presentation" element={<PresentationPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
