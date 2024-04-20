require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const jokesRoute = require("./routes/jokes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/jokes", jokesRoute);

// connect to database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to database and listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log("Failed to connect to database...");
    console.log(error);
  });
