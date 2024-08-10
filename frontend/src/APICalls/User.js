import axios from 'axios';
import { USERS_URL, token} from '../utils/backend_services';
// Update user information
export const updateUser = async (userId, updatedData) => {
  try {
    
    const response = await axios.put(`/${USERS_URL}/${userId}`, updatedData, {
      headers: {
        Authorization: token, // Authorization header with token
      },
    });
   if (response.ok) {
          const data = await response.json();
          console.log(data);
          return data;
        } else {
          console.log(response);
          throw new Error("Failed to update user");
        }
  } catch (error) {
    console.error(`Error updating user with id ${userId}:`, error);
    throw error;
  }
};

// Get a user by ID
export const getUser = async (userId) => {
  try {
    
    const response = await axios.get(`/${USERS_URL}/${userId}`, {
      headers: {
        Authorization: token, // Authorization header with token
      },
    });
   if (response.ok) {
          const data = await response.json();
          console.log(data);
          return data;
        } else {
          console.log(response);
          throw new Error("Failed to get user");
        }
  } catch (error) {
    console.error(`Error fetching user with id ${userId}:`, error);
    throw error;
  }
};

// Get all users
export const getUsers = async () => {
  try {
    
    const response = await axios.get(`/${USERS_URL}`, {
      headers: {
        Authorization: token, // Authorization header with token
      },
    });
   if (response.ok) {
          const data = await response.json();
          console.log(data);
          return data;
        } else {
          console.log(response);
          throw new Error("Failed to get users");
        }
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
