import { recordSale } from '../APICalls/Sales';

// Example usage in a React component
const handleRecordSale = async () => {
  try {
    const saleData = {
      shoeId: 'shoe_id',
      customerId: 'customer_id',
    };
    const response = await recordSale(saleData);
    console.log('Sale recorded successfully:', response);
  } catch (error) {
    console.error('Failed to record sale:', error);
  }
};
