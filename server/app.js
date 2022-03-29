const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const routes = require("./routes");

app.use("/", routes);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port 8000");
});
