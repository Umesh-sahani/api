const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectToMongo = require('./Config/Database');


const app = express();
const port = process.env.PORT;
const db_uri = process.env.DB_URI;

// const db_uri = "mongodb://localhost:27017/api?readPreference=primary&appname=MongoDB%20Compass&ssl=false"


app.use(cors());
app.use(express.json());

// Database connection
connectToMongo(db_uri);


// Available routes
app.use("/api/user", require("./routes/user"));

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})


