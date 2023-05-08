import React from 'react';
// import FixedNavbar from './Component/FixedNavbar';
// import FullScreenCarousel from './Component/FullScreenCarousel';
// import ResponsiveCards from './Component/ResponsiveCards';
// import ServicesCards from './Component/ServicesCards';
// import ContactForm from './Component/ContactForm';
// import Footer from './Component/Footer';
// import Vehicles from './pages/Vehicles';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';


const App = () => {
  return (
    <BrowserRouter> 
      <div className="App">
        {/* <FixedNavbar />
        <FullScreenCarousel />
        <ResponsiveCards />
        <ServicesCards />
        <ContactForm />
        <Footer /> */}
        <Routes />
        {/* <Vehicles /> */}

        {/* El resto de tu contenido de aplicación */}
      </div>
    </BrowserRouter>
 
  );
};

export default App;
