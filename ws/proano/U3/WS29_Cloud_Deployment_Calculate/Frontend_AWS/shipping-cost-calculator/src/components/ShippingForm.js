import React, { useState } from 'react';
import { getShippingCosts } from '../services/shippingService';

const ShippingForm = () => {
    const [weight, setWeight] = useState('');
    const [distance, setDistance] = useState('');
    const [shippingCost, setShippingCost] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setShippingCost(null);

        if (!weight || !distance) {
            setError('Please enter both weight and distance.');
            return;
        }

        try {
            const response = await getShippingCosts();
            const packageCost = response.find(pkg => pkg.weight === parseFloat(weight) && pkg.distance === parseFloat(distance));
            setShippingCost(packageCost ? packageCost.shippingCost : 'No cost found for the given weight and distance');
        } catch (err) {
            setError('Error calculating shipping cost. Please try again.');
        }
    };

    return (
        <div>
            <h2>Calculate Shipping Cost</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Weight (kg):</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Distance (km):</label>
                    <input
                        type="number"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Calculate</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {shippingCost !== null && (
                <div>
                    <h3>Shipping Cost: ${shippingCost}</h3>
                </div>
            )}
        </div>
    );
};

export default ShippingForm;