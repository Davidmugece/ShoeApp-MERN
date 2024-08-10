import { getAllOrders, createOrder, getOrderById, updateOrder, deleteOrder } from '../APICalls/Orders';

// Example usage in a React component
const fetchOrders = async () => {
  const orders = await getAllOrders();
  console.log(orders);
};

