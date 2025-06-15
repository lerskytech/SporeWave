import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GitHubBlock from './components/GitHubBlock';
import TikTokVoices from './components/TikTokVoices';
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
        <GitHubBlock />
        <TikTokVoices />
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
