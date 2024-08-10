import axios from 'axios';
import { SALES_URL, token } from '../utils/backend_services';



// Record a sale
export const recordSale = async (saleData) => {
  try {
    
    const response = await axios.post(`${SALES_URL}`, saleData, {
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
      throw new Error('Failed to add sold shoe');
     }
  } catch (error) {
    console.error('Error recording sale:', error);
    throw error;
  }
};
