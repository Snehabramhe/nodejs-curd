const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const userRoute = require("./routes/user.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

mongoose
  .connect(
    "mongodb+srv://haris2iftikhar:GClTzr15XhkjvN6k@backenddb.nrurtot.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
