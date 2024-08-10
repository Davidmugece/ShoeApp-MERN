import { addPurchasedShoe, getPurchasedShoes, updatePurchasedShoe, deletePurchasedShoe } from '../APICalls/Purchases';

// Example usage in a React component
const handleAddPurchasedShoe = async () => {
  try {
    const purchasedShoeData = {
      type: 'shoe_id',
      quantity: 2,
      price: 100,
      purchaseDate: new Date(),
    };
    const response = await addPurchasedShoe(purchasedShoeData);
    console.log('Purchased shoe added successfully:', response);
  } catch (error) {
    console.error('Failed to add purchased shoe:', error);
  }
};

const fetchPurchasedShoes = async () => {
  try {
    const purchasedShoes = await getPurchasedShoes();
    console.log('Fetched purchased shoes:', purchasedShoes);
  } catch (error) {
    console.error('Failed to fetch purchased shoes:', error);
  }
};
