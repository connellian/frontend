// Set up express server
const express = require('express');
const app = express();

// Serve static files from public directory
app.use(express.static('public'));

// Start server
const PORT = process.env.PORT || 8081 
app.listen(8081, () => {
  console.log('Server is listening on port 3000');
});