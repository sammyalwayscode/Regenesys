const roleModel = require("../model/role.model");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

const register = (req, res) => {
  const { username, password, role } = req.body;
  const exist = roleModel.find((u) => u.username === username);
  if (exist) return res.status(400).json({ message: "User already exist" });

  const newUser = {
    id: roleModel.length + 1,
    username,
    password,
    role: role || "user",
  };
  roleModel.push(newUser);
  res.status(201).json({ message: "User registered", data: newUser });
};

const login = (req, res) => {
  const { username, password, role } = req.body;
  const user = roleModel.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    "sEcReAtKeY",
    { expiresIn: "1h" }
  );
  res.status(200).json({
    message: "Login successful",
    data: token,
  });

  //mIDDLEWARE TO AUTHENTICATE TOKEN
  function authtenticateToken(req, res, next) {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Token required" });

    jwt.verify(token, "sEcReAtKeY", (err, decoded) => {
      if (err) return res.status(401).json({ message: "Invalid Token" });
      req.user = decoded;
      next();
    });
  }

  //Middleware to autorize role
  function authorizeRole(...allowedRoles) {
    return (req, res, next) => {
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: "Access denied, Invalid Role" });
      }
      next();
    };
  }
};

//Procted route, accessable to all authetenticated users
app.get("/profile", authtenticateToken, (req, res) => {
  res.json({ message: "Welcome Onboard", data: req.user });
});



module.exports = { login, register };
