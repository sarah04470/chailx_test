import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '@header/Header';
import Home from '@pages/Home';
import Footer from '@footer/Footer';
import Presentation from '@pages/board/Presentation';
import TopButton from '@components/fixed-button/TopButton';

export default function App() {
  return (
    <Router>
      <Header />
      <TopButton />
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Home />} />

        {/* 발표논문 페이지 */}
        <Route path="/board/presentation" element={<Presentation />} />
      </Routes>
      <Footer />
    </Router>
  );
}
