import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';
import PurchasedShoe from '../components/PurchasedShoe';
import AuthContext from '../context/AuthContext'; // Corrected the import name to AuthContext

const AdminPage = () => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate(); // Hook for programmatic navigation

    useEffect(() => {
        if (!token) {
            navigate('/login'); // Redirect to login page if no token is found
        }
    }, [token, navigate]);

    // If token is not available, return null or a loading spinner
    if (!token) {
        return null; // Or you can show a loading spinner here
    }

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-12">
                    <AddItem />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 col-md-6 mb-4">
                    <ItemList />
                </div>
                <div className="col-12 col-md-6">
                    <PurchasedShoe />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;


