"use strict"
const authRoutes = require("./auth/auth.routes");
const express = require("express");
const properties = require("./config/properties");
const DB = require("./config/db");

// Init MongoDB
DB();

const app = express();
const router = express.Router();

router.get("/", (req,  res){
    res.send("Hello from home");
});

app.use(router);

// Starting the server
app.listen(properties.PORT, () => {
    console.log("Server on port", properties.PORT);
});