import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Space, Typography, Layout } from 'antd';
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from './components';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main bk-c-245">
        <Layout className="pyx-20">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ textAlign: 'center', color: 'white' }}
          >
            © {new Date().getFullYear()} - All Rights Reserved by Cryptoverse
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
