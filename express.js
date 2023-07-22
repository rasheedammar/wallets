import threeCommasAPI from '3commas-api-node';
import express from 'express';
import favicon from 'express-favicon';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Initialize your API keys and secrets
const apiKey1 = '35c1fd4032924b3aad132a6d135294f8192816f541da44039dcea439f3e6cce3';
const apiSecret1 = '25d7622eb5df82eace388295ab8872cdd6b6ea89dfb66bd31dde8ae26cd904c9f32511bdb166baa5b3ac8ddfb181d79e838636ec6baf929a454ad1e96d67e5ffa8d98091d9d51b044122c43638ea0a473688e48832d3a28ba81777bf965a23c5d37b1825';
const apiKey2 = '4d92b7d77e504372aa71127afca240acf546cf35d70a4dc79d8cc97b85a397c2';
const apiSecret2 = '43c7fe02916ed459d08b03ef3b45315168a2487e15eedbb34a6fc6a7cd37923c7cfc5d59f120daf2d351e9869bfcef2bc49e40828306f21c1179c229d799afde6862d16d255baca141d36ec3619e37963c66b2e72c3ca0555c3b040b4efee9dccd6d430a';

const api1 = new threeCommasAPI({
  apiKey: apiKey1,
  apiSecret: apiSecret1,
});

const api2 = new threeCommasAPI({
  apiKey: apiKey2,
  apiSecret: apiSecret2,
  // url: 'https://api.3commas.io' // this is optional in case of defining other endpoint
  // forcedMode: 'real' // this is optional in case of defining account mode, 'real' or 'paper'
});

const app = express();

// Serve the favicon
app.use(favicon(join(__dirname, 'favicon.ico')));

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// Define a route for the /api1/balances endpoint
app.get('/api1/balances', async (req, res) => {
  const ids = [32101201, 31876293, 32103676, 32178454, 32427154, 32427107, 32428979, 32433201, 32427159, 31814867];
  const results = await Promise.all(ids.map(async (id) => {
    const account = await api1.accountLoadBalances(id);
    return {
      name: account?.name,
      balance: Math.floor(account?.primary_display_currency_amount?.amount),
    };
  }));

  res.json(results.sort((account1, account2) => account2.balance - account1.balance));
});

// Define a route for the /api2/balances endpoint
app.get('/api2/balances', async (req, res) => {
  const ids = [32208556, 32268993, 32423648, 32244363, 32244371, 32423630, 32435532];
  const results = await Promise.all(ids.map(async (id) => {
    const account = await api2.accountLoadBalances(id);
    return {
      name: account?.name,
      balance: Math.floor(account?.primary_display_currency_amount?.amount),
    };
  }));

  res.json(results.sort((account1, account2) => account2.balance - account1.balance));
});

// Add your other routes here
// ...

app.get('/api1/account/:id', async (req, res) => {
  const accountId = req.params.id;
  try {
    const account = await api1.accountLoadBalances(accountId);
    if (account) {
      res.json({
        name: account?.name,
        balance: Math.floor(account?.primary_display_currency_amount?.amount),
      });
    } else {
      res.status(404).json({ error: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching account data' });
  }
});

app.get('/api2/account/:id', async (req, res) => {
  const accountId = req.params.id;
  try {
    const account = await api2.accountLoadBalances(accountId);
    if (account) {
      res.json({
        name: account?.name,
        balance: Math.floor(account?.primary_display_currency_amount?.amount),
      });
    } else {
      res.status(404).json({ error: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching account data' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
