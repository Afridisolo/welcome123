import React from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/Body';
import Brands from './components/Brands';
import Read from './components/Read';
import Final from './components/Final';
import Footer from './components/Footer';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App(){
  return(
   <>
  {/* <Router>
    <Header ></Header> 
    <Routes>
          <Route path="/product" element={<Body />}></Route>
          <Route path="/drivemore" element={<Brands />}></Route>
          <Route path="/readmore" element={<Read />}></Route>
          <Route path="/unlock" element={<Final />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
      </Routes>

    </Router> */}
    <Header />
    <Body />
    <Brands />
    <Final />
    <Footer />
   </>
  );
};
export default App;
