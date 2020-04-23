const express = require("express");

const Cheese = require("../cheese/cheeseModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/cheese", (req, res) => {
  Cheese.getAll()
    .then(cheese => {
      res.status(200).json(cheese);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/cheese", (req, res) => {
      res.status(201).json({message:"Cheese created successfully"}); 
});


module.exports = server;
