import express from "express";
import { prisma } from "./lib/prisma.js";

const app = express();

app.use(express.json());

// HOME
app.get("/", (req, res) => {
  res.json({
    message: "Node + Express + PostgreSQL + Prisma API"
  });
});

// READ
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message
    });
  }
});

// CREATE
app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    });

    res.status(201).json({
      message: "User created successfully",
      user
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const deleteUser = await prisma.user.delete({
      where: {
        id:id
      }
    });

    res.json({
      message: "User deleted successfully",
      user: deleteUser
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete user",
      error: error.message
    });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const { name, email } = req.body;

    const updatedUser = await prisma.user.update({
      where: {
        id: id
      },
      data: {
        name: name,
        email: email
      }
    });

    res.json({
      message: "User updated successfully",
      user: updatedUser
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to update user",
      error: error.message
    });
  }
});