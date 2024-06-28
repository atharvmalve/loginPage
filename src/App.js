import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import starx91 from './assets/starx91.png'
import bck from './assets/bck.jpg'

const App = () => {
  return (
    <Router>
      <div className='bg-black min-[320px]:h-full sm:w-full sm:h-screen lg:h-screen lg:w-full'>
      <div className='flex justify-center content-center pt-4 '>
      <img src={starx91} className='w-28 h-8 px-5 bg-white rounded-full'/>
      </div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
