"use strict"
const express = require("express");
const app = express();

// Settings -> Configuración del servidor
app.set("port", process.env.PORT || 3000);

// Starting the server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});