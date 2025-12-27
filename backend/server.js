const express = require('express');
const cors = require('cors');
const Item = require('./db/models/item.js'); 
const connectDB = require('./db/dbConnection.js');

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// POST - Add item
app.post('/api/items', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).json(item);
});

// GET - Get all items
app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Run server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
