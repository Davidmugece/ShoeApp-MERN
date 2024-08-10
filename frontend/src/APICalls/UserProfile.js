import axios from 'axios';
import { PROFILES_URL, token } from '../utils/backend_services';

// Get the user profile
export const getUserProfile = async () => {
  try {
    
    const response = await axios.get(`${PROFILES_URL}`, {
      headers: {
        Authorization: token, // Authorization header with token
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Update the user profile
export const updateUserProfile = async ( updates) => {
  try {
    
    const response = await axios.put(`${PROFILES_URL}`, updates, {
      headers: {
        Authorization: token, // Authorization header with token
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};
