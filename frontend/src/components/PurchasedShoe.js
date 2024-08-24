import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { BASE_URL } from '../utils/config';

const PurchasedShoe = () => {
    const [purchases, setPurchases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/purchaseshoes`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPurchases(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="flex-fill">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Purchase Date</th>
                    </tr>
                </thead>
                <tbody>
                   
                        <tr>
                            <td>NIKE</td>
                            <td>345</td>
                            <td>67</td>
                            <td>908</td>
                        </tr>
                 
                </tbody>
            </Table>
        </div>
    );
};

export default PurchasedShoe;
