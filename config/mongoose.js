const mongoose = require('mongoose');
const connectDB = async function(){
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Connected to the DB of PollingApi");
    }catch (error) {
        console.log("Error in connecting to the database");
        return;
    }
}
connectDB();