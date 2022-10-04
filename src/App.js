import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css'; 

import Header from './Components/Header';
import FixedContainer from './Components/Container';
import Container2 from './Components/Container2';
import Container3 from './Components/Container3';
import Card from './Components/Card';
import Footer from './Components/Footer';

import {Routes,Route } from 'react-router-dom';
import  Home from './Pages/Home';
import About from  './Pages/About';
import Testimonials from './Pages/Testimonials';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import Social from './Pages/Social';



function App() {
  return (
    <>
    <Header/>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='#about' element={<About/>}/>
    <Route path='/testimonials' element={<Testimonials/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/social' element={<Social/>}/>
   </Routes>

   {/* <FixedContainer/>  */}
   <Container2/>
   <Container3/>
    <Card/>

   
   <Footer/>

   

   </>
   


   
  );
}

export default App;
