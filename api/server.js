const express = require("express");

const Cheese = require("../cheese/cheeseModel.js");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors())

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
    const cheeseData = req.body;
    Cheese.insert(cheeseData)
    .then(cheese => {
        res.status(201).json({message:"Cheese added successfully",cheese});
    })
    .catch (err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store cheese data" });
    });
  });

  server.delete('/:id', (req, res) => {
    Cheese.remove(req.params.id)
    .then(cheese => {
      if (cheese.length == 0) {
        res.status(404).json({
          message: "No cheese Found"
        });
      } else {
        res.status(200).json({
          message: "cheese deleted"
        });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error removing the cheese',
      });
    });
  });

module.exports = server;
