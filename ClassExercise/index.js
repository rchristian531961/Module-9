const express = require("express");
const app = express();

require("dotenv").config();
const dbConnect=require('./dbConnect')
// parse requests of content-type - application/json

app.use(express.json());

const userRoutes=require('./routes/userRoutes')
app.use(userRoutes);

app.get("/", (req, res) => {res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}.`);
});