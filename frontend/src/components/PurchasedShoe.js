import React from 'react';
import { Table } from 'react-bootstrap';

const PurchasedShoe = () => {
    return (
        <div className="flex-fill">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Purchase Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example rows */}
                    <tr>
                        <td>12345</td>
                        <td>Sneakers</td>
                        <td>2</td>
                        <td>$200</td>
                        <td>2024-08-14</td>
                    </tr>
                    {/* Additional rows can be added here */}
                </tbody>
            </Table>
        </div>
    );
};

export default PurchasedShoe;
