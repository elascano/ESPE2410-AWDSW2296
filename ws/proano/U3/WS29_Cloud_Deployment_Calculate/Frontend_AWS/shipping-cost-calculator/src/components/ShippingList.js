import React, { useEffect, useState } from 'react';
import { getShippingCosts } from '../services/shippingService';

const ShippingList = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await getShippingCosts();
                if (response && response.length > 0) {
                    setPackages(response);
                } else {
                    setError('No packages found');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Shipping Packages</h2>
            <ul>
                {packages.map(pkg => (
                    <li key={pkg.packageId}>
                        Weight: {pkg.weight} kg, Distance: {pkg.distance} km, Shipping Cost: ${pkg.shippingCost.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShippingList;