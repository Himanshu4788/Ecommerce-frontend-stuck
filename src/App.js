import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/layout/Header';
import Footer from './component/layout/footer';
import Home from './component/Home/Home';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
