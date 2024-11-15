import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import ServicesSection from './components/ServicesSection';
import GlobalReachSection from './components/GlobalReachSection';
import CorporateResponsibilitySection from './components/CorporateResponsibilitySection';
import InvestorInformationSection from './components/InvestorInformationSection';
import LatestNewsSection from './components/LatestNewsSection';
import Footer from './components/Footer';
import ChatbotPage from './components/ChatbotPage';
import './App.css'; // Assuming you have some global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Page Route */}
          <Route path="/" element={
            <>
              <Header />
              <MainBanner />
              <ServicesSection />
              <GlobalReachSection />
              <CorporateResponsibilitySection />
              <InvestorInformationSection />
              <LatestNewsSection />
              <Footer />
            </>
          } />

          {/* Chatbot Page Route */}
          <Route path="/chatbot" element={<ChatbotPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
