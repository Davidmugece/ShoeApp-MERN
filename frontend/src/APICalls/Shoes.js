import axios from 'axios';
import { SHOES_URL, token } from "../utils/backend_services";




// Add a new shoe
export const addShoe = async (shoeData) => {
  try {
    
    const formData = new FormData();
    formData.append('type', shoeData.type);
    formData.append('quantity', shoeData.quantity);
    formData.append('price', shoeData.price);
    formData.append('image', shoeData.image);

    const response = await axios.post(`${SHOES_URL}`, formData, {
      headers: {
        Authorization: token, // Authorization header with token
        'Accept': '*',
      },
    });
    if (response.ok) {
          const data = await response.json();
          console.log(data);
          return data;
        } else {
          console.log(response);
          throw new Error("Failed to create shoes");
        }
  } catch (error) {
    console.error('Error adding shoe:', error);
    throw error;
  }
};

// Get a shoe by ID
export const getShoeById = async (id) => {
  try {
    
    const response = await axios.get(`${SHOES_URL}/${id}`, {
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
          throw new Error("Failed to get shoe");
        }
  } catch (error) {
    console.error(`Error fetching shoe with id ${id}:`, error);
    throw error;
  }
};

// Edit a shoe
export const editShoe = async (id, updatedData) => {
  try {
    
    const response = await axios.put(`${SHOES_URL}/${id}`, updatedData, {
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
          throw new Error("Failed to update shoes");
        }
  } catch (error) {
    console.error(`Error editing shoe with id ${id}:`, error);
    throw error;
  }
};

// Delete a shoe
export const deleteShoe = async (id) => {
  try {
    
    const response = await axios.delete(`${SHOES_URL}/${id}`, {
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
          throw new Error("Failed to delete shoes");
        }
  } catch (error) {
    console.error(`Error deleting shoe with id ${id}:`, error);
    throw error;
  }
};
