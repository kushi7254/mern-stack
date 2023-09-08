
import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
   id: ObjectId, 
  title: String,
  description: String,
  price: Number,
  category: String,
  sold: Boolean,
  image : String

});

export const TransactionModel = mongoose.model('Transaction', TransactionSchema);