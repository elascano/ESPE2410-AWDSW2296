import React from 'react';

const ShippingCost = ({ cost }) => {
    return (
        <div className="shipping-cost">
            {cost !== null ? (
                <h2>Calculated Shipping Cost: ${cost.toFixed(2)}</h2>
            ) : (
                <h2>Please enter weight and distance to calculate the shipping cost.</h2>
            )}
        </div>
    );
};

export default ShippingCost;