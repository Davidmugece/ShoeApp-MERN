import axios from 'axios';
import Cookies from 'js-cookie';
import { AUTH_URL } from '../utils/backend_services';

export const login = async( loginData) => {
    const now = new Date();
    const threeHoursLater = new Date(now.getTime() + 3 * 60 * 60 * 1000); // 3 hours in milliseconds
    
    try {
        const response = await axios.post(`${AUTH_URL}/login`, loginData);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            Cookies.set('token', data.token, { expires: threeHoursLater }); // Set the token to expire in 3 hours
            
          } else {
            alert(`Please confirm your email and password then try again.`);
          }
        } catch (error) {
          console.log(`Login failed: ${error.message}`);
          alert('An error occurred during login. Please try again later.');
        }
      };

export const register = async( registerData) => {
    try {
        const response = await axios.post(`${AUTH_URL}/register`, registerData);
        if(response.ok){
            const data = await response.json();
            return data;
        } else{
            console.log('Failed to signup');
        }
    } catch (error) {
        console.log(error.message);
    }
};



/* // Example usage in a React component for login
const handleLogin = async () => {
    try {
      const tokenData = await login(email, password);
      console.log('Login successful:', tokenData);
      // Save token to cookies or state here
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  // Example usage in a React component for registration
  const handleRegister = async () => {
    try {
      const registerData = await register({ name, email, password, role: 'customer' });
      console.log('Registration successful:', registerData);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }; */