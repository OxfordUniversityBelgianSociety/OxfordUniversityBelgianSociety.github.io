import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Membership from './components/Membership';
import Committee from './components/Committee';
import TermCard from './components/TermCard';
import Socials from './components/Socials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Membership />
        <Committee />
        <TermCard />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
