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