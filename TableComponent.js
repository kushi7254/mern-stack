import React, { useEffect, useState } from 'react';
import "../css/home.css";
import MonthDropdown from './MonthsSearch';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

function TableComponent() {
  const [transaction, setTransaction] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://s3.amazonaws.com/roxiler.com/product_transaction.json';

    // Make a GET request to the API
    axios.get(apiUrl)
      .then((response) => {
        setTransaction(response.data);
        setIsLoading(false); // Set loading state to false
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false); // Set loading state to false
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className='row'>
        <div>
          <input type='text' placeholder='search transaction' /><button><FaSearch /></button>
        </div>
        <div>
          <MonthDropdown />
        </div>
      </div>
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Sold</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {transaction.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.description}</td>
                <td>{d.price}</td>
                <td>{d.category}</td>
                <td>{d.sold}</td>
                <td>{d.image}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableComponent;
