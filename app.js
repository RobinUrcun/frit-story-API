const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const carteRoute = require("./routes/carte");
const userRoute = require("./routes/user");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Myadministrator:1nCoZ2n377eEtzXI@fritstoryapi.gwzfqhy.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(bodyParser.json());
app.use("/api/carte", carteRoute);
app.use("/api/user", userRoute);

module.exports = app;
