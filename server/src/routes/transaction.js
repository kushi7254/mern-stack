// routes/transactions.js

const express = require('express');
const router = express.Router();
const Transaction = require('../models/TransactionSchema.js'); // Create a Mongoose model for transactions

// Get transactions by month
router.get('/transactions', async (req, res) => {
  try {
    const { month, search, page, pageSize } = req.query;
    const skip = (page - 1) * pageSize;
    
    let query = {};
    if (month) {
      query.date = { $regex: `^${month}`, $options: 'i' };
    }
    if (search) {
      query.description = { $regex: search, $options: 'i' };
    }

    const totalTransactions = await Transaction.countDocuments(query);
    const transactions = await Transaction.find(query)
      .skip(skip)
      .limit(parseInt(pageSize))
      .sort({ date: 'desc' });

    res.json({ transactions, totalTransactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export {router as transactionRouter}
