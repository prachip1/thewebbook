<<<<<<< HEAD

=======
import logo from './logo.svg';
>>>>>>> ede7066c0f7919e8594afa0b993f20400a5ac122
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
<<<<<<< HEAD
import HowToPublish from './Components/HowToPublish';
import Books from './Components/Books';

=======
>>>>>>> ede7066c0f7919e8594afa0b993f20400a5ac122

function App() {

  const location = useLocation();

  return (
  <>
  <Navbar />
  <AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    <Route index element={<Home/>} />
    <Route path='/about' element={<About />} />
<<<<<<< HEAD
    <Route path='/how-to-publish' element={<HowToPublish />} />
    <Route path='/books' element={<Books />} />
=======
>>>>>>> ede7066c0f7919e8594afa0b993f20400a5ac122
    <Route path='/contact' element={<Contact />} />
  </Routes>
  </AnimatePresence>
  </>
  );
}

export default App;
