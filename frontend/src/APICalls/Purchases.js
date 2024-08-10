import axios from 'axios';
import { PURCHASES_URL,token } from '../utils/backend_services';

// Add a purchased shoe
export const addPurchasedShoe = async (purchasedShoeData) => {
  try {
    const response = await axios.post(`${PURCHASES_URL}`, purchasedShoeData, {
      headers: {
        Authorization: token, // Authorization header with token
      },
    });
   if(response.ok){
    const data = await response.json();
    console.log(data);
    return data;
   }else{
    console.log(response);
    throw new Error('Failed to add purchased shoe');
   }
  } catch (error) {
    console.error('Error adding purchased shoe:', error);
    throw error;
  }
};

// Get purchased shoes
export const getPurchasedShoes = async () => {
  try {
    
    const response = await axios.get(`${PURCHASES_URL}`, {
      headers: {
        Authorization: token, // Authorization header with token
      },
    });
    if(response.ok){
        const data = await response.json();
        console.log(data);
        return data;
       }else{
        console.log(response);
        console.log('Failed to get purchased shoes');
       }
  } catch (error) {
    console.error('Error fetching purchased shoes:', error);
    throw error;
  }
};

// Update a purchased shoe
export const updatePurchasedShoe = async (id, updatedData) => {
  try {
    
    const response = await axios.put(`${PURCHASES_URL}/${id}`, updatedData, {
      headers: {
        Authorization: token, // Authorization header with token
      },
    });
    if(response.ok){
        const data = await response.json();
        console.log(data);
        return data;
       }else{
        console.log(response);
        console.log('Failed to update purchased shoes');
       }
  } catch (error) {
    console.error(`Error updating purchased shoe with id ${id}:`, error);
    throw error;
  }
};

// Delete a purchased shoe
export const deletePurchasedShoe = async (id) => {
  try {
    
    const response = await axios.delete(`${PURCHASES_URL}/${id}`, {
      headers: {
        Authorization: token, // Authorization header with token
      },
    });
    if(response.ok){
        const data = await response.json();
        console.log(data);
        return data;
       }else{
        console.log(response);
        console.log('Failed to delete purchased shoes');
       }
  } catch (error) {
    console.error(`Error deleting purchased shoe with id ${id}:`, error);
    throw error;
  }
};
