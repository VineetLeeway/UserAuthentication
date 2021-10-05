const mongoose = require('mongoose')
const MONGO_URI = "mongodb+srv://vineet:Vineet8010@cluster0.kf1ci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit();
    }
}

module.exports = connectDB; 