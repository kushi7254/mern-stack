// app.js

const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB

mongoose
  .connect("mongodb+srv://amrutha:amrutha121@mern.uth63pu.mongodb.net/mern?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });


// Fetch data from the third-party API and store it in MongoDB
app.get('/fetch-data', async (req, res) => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const data = response.data;

    // Store the data in the MongoDB collection
    await Product.insertMany(data);

    res.json({ message: 'Data fetched and stored successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch and store data' });
  }
});

// Define API endpoints for filtering and searching

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

  

