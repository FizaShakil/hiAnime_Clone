<<<<<<< HEAD
import React from 'react';
import NewAnime from './Components/NewAnime';
=======
<<<<<<< HEAD
import React from "react";
import Slider from './Components/Slider/Slider'// Import Slider component

const App = () => {
  return (
    <div className="App">
      {/* Just use the Slider component */}
      <Slider />
    </div>
  );
};

export default App

=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './Components/Login-Signup/Login';
import Signup from './Components/Login-Signup/Signup';
>>>>>>> d2a15be189ccd6c328c9aa3e022ef0219ad40cf4

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <NewAnime />
    </div>
  );
}

export default App;
>>>>>>> 2b9c3dce83d8894a0e88a9f620d87bf41da77996
