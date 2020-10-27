const express = require("express");
const app = express();
const geoHash = require("./geoHash/geo");

app.get("/", (req, res) => {
  res.json({ message: "Geo Hash Code" });
});
app.get("/geoHash", geoHash.getGeoHash);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
