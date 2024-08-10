import axios from 'axios';
import { ORDERS_URL, token } from '../utils/backend_services';

// Get all orders
export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${ORDERS_URL}`, {
        headers: {
          Authorization: token ,
        },
      });
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Create a new order
export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${ORDERS_URL}`, orderData, {
        headers: {
          Authorization: token ,
        },
      });
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Get order by ID
export const getOrderById = async (orderId) => {
  try {
    const response = await axios.get(`${ORDERS_URL}/${orderId}`, {
        headers: {
          Authorization: token ,
        },
      });
    return response.data;
  } catch (error) {
    console.error(`Error fetching order with id ${orderId}:`, error);
    throw error;
  }
};

// Update an order
export const updateOrder = async (orderId, updatedData) => {
  try {
    const response = await axios.put(`${ORDERS_URL}/${orderId}`, updatedData, {
        headers: {
          Authorization: token ,
        },
      });
    return response.data;
  } catch (error) {
    console.error(`Error updating order with id ${orderId}:`, error);
    throw error;
  }
};

// Delete an order
export const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`${ORDERS_URL}/${orderId}`, {
        headers: {
          Authorization: token ,
        },
      });
    return response.data;
  } catch (error) {
    console.error(`Error deleting order with id ${orderId}:`, error);
    throw error;
  }
};
