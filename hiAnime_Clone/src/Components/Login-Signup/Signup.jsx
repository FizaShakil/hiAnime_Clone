import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Registration data:', formData);
      navigate('/login'); // Redirect to login after successful registration
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/imagesm/bg2.jpg')" }}
    >
      <div className="w-full max-w-md p-6 sm:p-8 bg-white bg-opacity-90 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">YOUR NAME</label>
            <input 
              type="text"
              name="name"
              placeholder="Name"
              className={`w-full px-3 py-2 sm:px-4 sm:py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">EMAIL ADDRESS</label>
            <input 
              type="email"
              name="email"
              placeholder="name@email.com"
              className={`w-full px-3 py-2 sm:px-4 sm:py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PASSWORD</label>
            <input 
              type="password"
              name="password"
              placeholder="Password"
              className={`w-full px-3 py-2 sm:px-4 sm:py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CONFIRM PASSWORD</label>
            <input 
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`w-full px-3 py-2 sm:px-4 sm:py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium rounded-md transition duration-200 flex justify-center items-center`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : 'Register'}
          </button>
        </form>
        
        <div className="text-center text-sm mt-4">
          <p className="text-gray-600">
            Have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;