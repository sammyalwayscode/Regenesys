const express = require("express");
const app = express();
const PORT = 2033;

app.get("/", (req, res) => {
  res.send("Server up and Running 🚀🚀🚀");
});

app.use(express.json());

const userData = [
  {
    id: 1,
    name: "Sammy",
    email: "sam@gmail.com",
    bio: "I love coding",
  },
  {
    id: 2,
    name: "John",
    email: "john@gmail.com",
    bio: "This is a good day",
  },
  {
    id: 3,
    name: "Mary",
    email: "mary@gmail.com",
    bio: "The Day is bright",
  },
];

app.get("/users", (req, res) => {
  res.json(userData);
});

app.post("/newuser", (req, res) => {
  const { name, email, bio } = req.body;
  const newUser = { id: userData.length + 1, name, email, bio };
  userData.push(newUser);
  res.json(newUser);
});

app.listen(PORT, () => {
  console.log("Server running on PORT");
});
