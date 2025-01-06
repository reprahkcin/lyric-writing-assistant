const express = require("express");

const app = express();
const port = 3000;

// Define any other necessary endpoints here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
