const express = require('express');
const mongoose = require('mongoose')
const port = 3000;
const app = express();

const uri =
  "mongodb+srv://<username>:<password>@<cluster-name>.frbqx.mongodb.net/<database-name>?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});