const express = require("express");
const data = require("./notes/data");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const { notFound } = require("./middleware/errorHandles");
const jwtVeify = require("./middleware/auth");


dotenv.config();
app.use(cors());
connectDB();
app.use(express.urlencoded());
app.use(express.json()) //to accept the data in json format from the user // All comments are commented by vineet tiwari

app.get("/",jwtVeify, (req, res) => {
  res.send("welcome user");
});
app.get("/api/data", (req, res) => {
  res.json(data);
});

//User Routes
app.use('/api/users', userRoutes)


app.use(notFound)

const PORT = process.env.PORT || 5000 || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ` + PORT);
});
