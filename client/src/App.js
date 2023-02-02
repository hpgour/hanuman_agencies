import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from './Home';
import Navbar from "./Navbar";
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import {Routes,Route,Navigate} from 'react-router-dom';


const App=()=>{
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
    <Footer/>
    </>
  );
};

export default App;
