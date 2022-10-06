import React from 'react';
import './style.css';
import Navbar from './snacks/homemade-granola-bars/Navbar';
import InfoCard from './snacks/homemade-granola-bars/InfoCard';
import Footer from './snacks/homemade-granola-bars/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <InfoCard />
      <Footer />
    </div>
  );
}
