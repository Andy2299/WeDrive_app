// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Suppliers from './pages/Suppliers';
import Admi from './pages/Admi';
import Login from './pages/Login'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import CreateBlog from './pages/CreateBlog'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/vehiculos" element={<Vehicles />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/admi" element={<Admi />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/blog" element={<Blog />} />    
      <Route path="/createBlog" element={<CreateBlog />} />   

    </Routes>
  );
};

export default AppRoutes;
