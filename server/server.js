const express = require("express");
const app = express();
const PORT = 5050;
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./apiRoutes"));

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
