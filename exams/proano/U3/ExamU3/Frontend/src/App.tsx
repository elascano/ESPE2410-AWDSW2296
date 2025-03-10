import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';

const App: React.FC = () => {
  const [shopperId, setShopperId] = useState<string>('');
  const [shoppers, setShoppers] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    fetchTotalAmount();
  }, []);

  const fetchTotalAmount = async () => {
    try {
      const response = await axios.get('https://examu3-backend.vercel.app/api/shoppers/shoppers_total');
      setShoppers(response.data.shoppers);
      setTotal(response.data.totalAmount);
    } catch (error) {
      console.error('Error fetching total amount:', error);
    }
  };

  const fetchShopperTotal = async (id: string) => {
    try {
      const response = await axios.get(`https://examu3-backend.vercel.app/api/shoppers/${id}/shopper_total`);
      setShoppers(response.data.shoppers);
      setTotal(response.data.totalAmount);
    } catch (error) {
      console.error('Error fetching shopper total:', error);
    }
  };

  const handleSearch = () => {
    if (shopperId) {
      fetchShopperTotal(shopperId);
    } else {
      fetchTotalAmount();
    }
  };

  return (
    <div className="App">
      <h1>Shoppers Total</h1>
      <input
        type="text"
        value={shopperId}
        onChange={(e) => setShopperId(e.target.value)}
        placeholder="Enter Shopper ID"
      />
      <button onClick={handleSearch}>Search</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {shoppers.map((shopper) => (
            <tr key={`${shopper.shopper_id}-${shopper.toy_name}`}>
              <td>{shopper.shopper_id}</td>
              <td>{shopper.shopper_name}</td>
              <td>
                {shopper.toy_name} - {shopper.toy_quantity} x ${shopper.toy_price}
              </td>
              <td>${shopper.total}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Total</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default App;