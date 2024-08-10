import { addShoe, getShoeById, editShoe, deleteShoe } from '../APICalls/Shoes';
import { useContext } from 'react';
import { ShoeContext } from './context/ShoeContext';

// Example usage in a React component
const handleAddShoe = async () => {
  try {
    const shoeData = {
      type: 'Sneaker',
      quantity: 10,
      price: 100,
      image: 'https://i.pinimg.com/564x/db/10/79/db1079dacc98ef91c442ed1b65d5467b.jpg', // Assuming you have a file input for the image
    };
    const response = await addShoe(shoeData);
    console.log('Shoe added successfully:', response);
  } catch (error) {
    console.error('Failed to add shoe:', error);
  }
};

// Example usage for viewing all shoes
const ShoeList = () => {
  const { shoes, loading, error } = useContext(ShoeContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {shoes.map(shoe => (
        <li key={shoe._id}>{shoe.type} - {shoe.price}</li>
      ))}
    </ul>
  );
};

export default ShoeList;
