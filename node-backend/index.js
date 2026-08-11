const express = require("express");

const app = express();

app.use(express.json());

// Temporary users data
let users = [
  {
    id: 1,
    name: "Sneha",
    email: "sneha@gmail.com"
  },
  {
    id: 2,
    name: "Rahul",
    email: "rahul@gmail.com"
  }
];

// GET - Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET - Get one user
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json(user);
});

// POST - Create a user
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name: name,
    email: email
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});

// PUT - Update a user
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  const { name, email } = req.body;

  user.name = name;
  user.email = email;

  res.json({
    message: "User updated successfully",
    user: user
  });
});

// DELETE - Delete a user
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const userExists = users.some(user => user.id === id);

  if (!userExists) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  users = users.filter(user => user.id !== id);

  res.json({
    message: "User deleted successfully"
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});