const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('coinbase-commerce-node');
const { Charge } = require('coinbase-commerce-node');

const app = express();
app.use(bodyParser.json());

const API_KEY = 'your_coinbase_commerce_api_key';
Client.init(API_KEY);

app.post('/create-charge', async (req, res) => {
  const { name, description, amount } = req.body;
  const chargeData = {
    name,
    description,
    local_price: {
      amount,
      currency: 'USD',
    },
    pricing_type: 'fixed_price',
  };

  try {
    const charge = await Charge.create(chargeData);
    res.json(charge);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
