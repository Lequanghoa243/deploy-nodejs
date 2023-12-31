
// Import required modules
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send a "Hello, World!" response
  res.end('Hello, World!\n');
});

// Define the port to listen on (typically 3000)
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
