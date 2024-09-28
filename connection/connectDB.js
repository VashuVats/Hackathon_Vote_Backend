const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_URL);
        console.log("Data base has been sucessfully connected",connect.connection.host,connect.connection.name)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;