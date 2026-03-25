import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Functions from './components/Functions';
import History from './components/History';
import OsTypes from './components/OsTypes';
import Trends from './components/Trends';
import Quiz from './components/Quiz';
import VideoSection from './components/VideoSection';
import Reporters from './components/Reporters';
import Footer from './components/Footer';
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Functions />
        <History />
        <OsTypes />
        <Trends />
        <Quiz />
        <VideoSection />
        <Reporters />
      </main>
      <Footer />
    </>
  );
}
