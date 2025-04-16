import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 bg-cover bg-center" style={{ backgroundImage: 'url(/imagesm/bg.jpg)' }}>
      {/* Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Login card */}
      <div className="relative w-full max-w-md px-6 py-8 sm:px-8 sm:py-10 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Welcome back!</h1>
        
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">EMAIL ADDRESS</label>
            <input 
              type="email"
              name="email"
              placeholder="name@email.com"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PASSWORD</label>
            <input 
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
            </div>
            
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">Forgot password?</Link>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        
        <div className="mt-4 sm:mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;