// src/components/Table.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch data from your Express.js server
    axios.get('/fetch-data').then((response) => {
      if (response.data && response.data.message === 'Data fetched and stored successfully') {
        // Data fetched successfully, now fetch and display it
        axios.get('api/products').then((response) => {
          setProducts(response.data);
        });
      }
    });
  }, []);

  useEffect(() => {
    // Filter products based on the search term
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
