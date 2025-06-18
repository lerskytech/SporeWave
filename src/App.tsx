import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// GitHub section removed per user request
import TwitterFeed from './components/TwitterFeed';
import Research from './components/Research';
import SonicHealing from './components/SonicHealing';
import Donation from './components/Donation';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TwitterFeed />
        <Research />
        <SonicHealing />
        <Donation />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
