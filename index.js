const express = require("express");
const mongoose = require("mongoose");
const app = express();
const noteRoute = require("./routes/note.route.js");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// routes
app.use("/api/notes", noteRoute);

app.get("/", (req, res) => {
  res.send("Node API Server Updated");
});

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}` );
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
