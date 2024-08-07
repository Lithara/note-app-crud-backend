const express = require("express");
const mongoose = require("mongoose");
const app = express();
const noteRoute = require("./routes/note.route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/notes", noteRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://admin:WmuzxNhozikxUVgp@backenddb.91beg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
