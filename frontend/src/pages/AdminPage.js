import React from 'react';
import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';
import PurchasedShoe from '../components/PurchasedShoe';

const AdminPage = () => {
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

