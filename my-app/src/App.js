import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import Body from './components/Body';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Detail from './components/Detail';
import SiteSection from './components/SiteSection';
import HowItWork from './components/HowItWork';
import About from './components/About';
import Service from './components/Service';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Detail />
      <SiteSection />
      <HowItWork />
      <About />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
