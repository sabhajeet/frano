const express = require("express");
const app = express();

app.use(express.static("public"));

// Use Azure-provided port or fallback to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
