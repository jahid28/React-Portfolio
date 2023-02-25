import './App.css';
import { useLocation } from 'react-router-dom';
import { useEffect,memo,useCallback } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {

  let loc = useLocation()
  let locpath = loc.pathname

  useEffect(() => {
    
    document.querySelector('.navContact').style.color = 'white'
    document.querySelector('.navHome').style.color = 'white'
    document.querySelector('.navAbout').style.color = 'white'

    switch (locpath) {
      case '/':
        document.querySelector('.navHome').style.color = 'rgb(235, 194, 95)'
        break;
      case '/about':
        document.querySelector('.navAbout').style.color = 'rgb(235, 194, 95)'
        break;
      case '/contact':
        document.querySelector('.navContact').style.color = 'rgb(235, 194, 95)'
        break;

    }

    // if (locpath == '/') {
    // }
    // else if (locpath == '/about') {
    //   document.querySelector('.navAbout').style.color = 'rgb(235, 194, 95)'
    // }
    // else if (locpath == '/contact') {
    //   document.querySelector('.navContact').style.color = 'rgb(235, 194, 95)'
    // }

  }, [locpath])


  return (
    <div id='appBody' className='appBody'>
      <Navbar />

      <AnimatePresence exitBeforeEnter>

        <Routes location={loc} key={locpath}>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </AnimatePresence>




    </div>
  );
}

export default memo(App);
