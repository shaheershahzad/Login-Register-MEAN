const User = require("./auth.dao");
const jwt = require("jsonwebtoken"); //Encriptar la contraseña
const bcrypt = require("bcryptjs");
const SECRET_KEY = "secretkey123456";

exports.createUser = (req, res, next) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    User.create
}