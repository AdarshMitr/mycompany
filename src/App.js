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


function App() {
  return (
    <>
    <Header/>

   <FixedContainer/>
   <Container2/>

   <Container3/>
   <Card/>
   <Footer/>
   
    </>
   
  );
}

export default App;
