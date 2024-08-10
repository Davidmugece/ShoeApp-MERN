import { getUserProfile, updateUserProfile } from '../APICalls/UserProfile';

// Example usage in a React component
const fetchUserProfile = async () => {
  try {
    const profile = await getUserProfile();
    console.log('User profile:', profile);
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
  }
};

const changeUserProfile = async (updates) => {
  try {
    const updatedProfile = await updateUserProfile(updates);
    console.log('Updated user profile:', updatedProfile);
  } catch (error) {
    console.error('Failed to update user profile:', error);
  }
};
