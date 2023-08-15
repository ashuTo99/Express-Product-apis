const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const port = 3000
const cors = require("cors");

dotenv.config()

// mongoose connect
mongoose.connect(process.env.DB_CONNECT, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('establish')
}).catch((e) => {
    console.log('no connection')
})

const product_route = require('./routes/product');

// Middlewares
app.use(express.json());
app.use(cors());

app.use("/api", product_route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})