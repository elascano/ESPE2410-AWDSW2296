import axios from 'axios';

const API_URL = 'http://ec2-54-89-107-144.compute-1.amazonaws.com:3015/api/shipping';

export const getShippingCosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/calculate-shipping-cost`);
        return response.data;
    } catch (error) {
        console.error('Error fetching shipping costs:', error);
        throw error;
    }
};

export const addShippingPackage = async (packageData) => {
    try {
        const response = await axios.post(`${API_URL}/add-shipping-package`, packageData);
        return response.data;
    } catch (error) {
        console.error('Error adding shipping package:', error);
        throw error;
    }
};

export const updateShippingPackage = async (id, packageData) => {
    try {
        const response = await axios.put(`${API_URL}/update-shipping-package/${id}`, packageData);
        return response.data;
    } catch (error) {
        console.error('Error updating shipping package:', error);
        throw error;
    }
};

export const deleteShippingPackage = async (id) => {
    try {
        await axios.delete(`${API_URL}/delete-shipping-package/${id}`);
    } catch (error) {
        console.error('Error deleting shipping package:', error);
        throw error;
    }
};