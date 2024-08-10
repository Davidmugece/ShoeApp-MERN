import { updateUser, getUser, getUsers } from '../APICalls/User';

// Example usage in a React component
const handleUpdateUser = async (userId, updates) => {
  try {
    const response = await updateUser(userId, updates);
    console.log('User updated successfully:', response);
  } catch (error) {
    console.error('Failed to update user:', error);
  }
};

const handleGetUser = async (userId) => {
  try {
    const user = await getUser(userId);
    console.log('Fetched user:', user);
  } catch (error) {
    console.error('Failed to fetch user:', error);
  }
};

const handleGetUsers = async () => {
  try {
    const users = await getUsers();
    console.log('Fetched users:', users);
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
};
