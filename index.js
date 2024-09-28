const express = require("express");
const app = express();
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
const path = require('path');
const dotenv = require("dotenv").config();
const connectDB = require("./connection/connectDB");
connectDB();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'FrontEnd')));

const voterRoute = require("./routes/voterRoute");
const partyRoute = require("./routes/partyRoute");

app.use('/voter',voterRoute);
app.use('/party',partyRoute);


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});
 


