import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {

  const location = useLocation();

  return (
  <>
  <Navbar />
  <AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    <Route index element={<Home/>} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
  </AnimatePresence>
  </>
  );
}

export default App;
