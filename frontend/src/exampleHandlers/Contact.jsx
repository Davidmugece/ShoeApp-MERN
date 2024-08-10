import { createContact } from '../APICalls/Contact';

// Example usage in a React component
const handleCreateContact = async () => {
  try {
    const contactData = {
      name: 'John Doe',
      emailAddress: 'john.doe@example.com',
      message: 'Hello, I have a question.',
    };
    const response = await createContact(contactData);
    console.log('Contact created successfully:', response);
  } catch (error) {
    console.error('Failed to create contact:', error);
  }
};
