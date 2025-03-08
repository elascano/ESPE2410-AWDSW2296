import React, { useState, useEffect } from 'react';
import ShippingForm from './components/ShippingForm';
import ShippingList from './components/ShippingList';
import './App.css';

function App() {
    const [shippingData, setShippingData] = useState([]);

    useEffect(() => {
        fetchShippingData();
    }, []);

    const fetchShippingData = async () => {
        try {
            const response = await fetch('/api/shipping/calculate-shipping-cost');
            const data = await response.json();
            setShippingData(data);
        } catch (error) {
            console.error('Error fetching shipping data:', error);
        }
    };

    return (
        <div className="App">
            <h1>Shipping Cost Calculator</h1>
            <ShippingForm fetchShippingData={fetchShippingData} />
            <ShippingList shippingData={shippingData} />
        </div>
    );
}

export default App;