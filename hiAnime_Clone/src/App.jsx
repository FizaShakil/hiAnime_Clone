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

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
>>>>>>> 2b9c3dce83d8894a0e88a9f620d87bf41da77996
