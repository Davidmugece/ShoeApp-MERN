import { login, register } from '../APICalls/Auth';

// Example usage in a React component for login
const handleLogin = async () => {
    const email = `violetwayoa@gmail.com`;
    const password = `123456`;
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
    const name = 'Violet Wayne';
    const email = `violetwayoa@gmail.com`;
    const password = `123456`;
  try {
    const registerData = await register({ name, email, password, role: 'customer' });
    console.log('Registration successful:', registerData);
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
