const express = require('express');
const app = express();
// Define a route (endpoint)
app.get('/', (req, res) => {
res.send('Hello DevSecOps 🚀');
});
// Start server on port 8080
app.listen(8080, () => console.log('Running on port 8080'));

// test