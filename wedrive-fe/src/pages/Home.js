// src/pages/Home.js
import React from 'react';
import FixedNavbar from '../Component/Navbar';
import FullScreenCarousel from '../Component/FullScreenCarousel';
import ResponsiveCards from '../Component/ResponsiveCards';
import ServicesCards from '../Component/ServicesCards';
import ContactForm from '../Component/ContactForm';
import Footer from '../Component/Footer';


const Home = () => {
  return (
    <div>
        <FixedNavbar />
        <FullScreenCarousel />
        <ResponsiveCards />
        <ServicesCards />
        <ContactForm />
        <Footer />
    </div>
  );
};

export default Home;
