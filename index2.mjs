
import express from 'express';
const app = express();

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello, this is your Express.js app running on Heroku!');
});

// Add your other routes here
// ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});


//