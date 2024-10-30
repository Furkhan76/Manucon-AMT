import React from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import ServicesSection from './components/ServicesSection';
import GlobalReachSection from './components/GlobalReachSection';
import CorporateResponsibilitySection from './components/CorporateResponsibilitySection';
import InvestorInformationSection from './components/InvestorInformationSection';
import LatestNewsSection from './components/LatestNewsSection';
import Footer from './components/Footer';
import './App.css'; // Assuming you have some global styles

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <ServicesSection />
      <GlobalReachSection />
      <CorporateResponsibilitySection />
      <InvestorInformationSection/>
      <LatestNewsSection />
      <Footer />
    </div>
  );
}

export default App;
