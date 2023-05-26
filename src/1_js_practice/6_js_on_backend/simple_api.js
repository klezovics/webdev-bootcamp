const express = require("express");
const app = express();
const port = 3000;

// Endpoint for handling GET requests
app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "Anonymous";
  const greeting = `Hello, ${name}!`;

  res.json({ greeting });
});

// Start the server
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
