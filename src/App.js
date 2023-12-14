import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import HappyPage from './hp';
import Culture from './Culture';
import Destinations from './Destinations';
import Food from './Food';
import History from './History';
import Header from './Header';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/happyPage" element={<HappyPage />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/food" element={<Food />} />
        <Route path="/history" element={<History />} />
        </Routes>
    </Router>
    
  );
}

export default App;
