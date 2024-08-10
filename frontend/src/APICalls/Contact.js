import axios from 'axios';
import { CONTACTS_URL,token } from '../utils/backend_services';

// Create a new contact
export const createContact = async (contactData) => {
    try {
      const response = await axios.post(`${CONTACTS_URL}`, contactData, {
        headers: {
          Authorization: token,  // Authorization header with token
        },
      });
      if(response.ok){
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error('Error creating contact:', error);
      throw error;
    }
  };