var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
const app = express();
const port = 3000;

let reviews = require("./routes/reviews");

// Variables

//Choose option 1 for local storage on computer or option 2 for storing data in the cloud
//Option 1
//var mongoURI = "mongodb://localhost:27017/beerDevelopmentDB";
//Option 2, Replace username, password and Database with your information
//var mongoURI = "mongodb+srv://<username>:<password>@cluster0.gokmr.mongodb.net/<Database>?retryWrites=true&w=majority"

// Connect to MongoDB
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      console.error(`Failed to connect to MongoDB with URI: ${mongoURI}`);
      console.error(err.stack);
      process.exit(1);
    }
    console.log(`Connected to MongoDB with URI: ${mongoURI}`);
  }
);

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.options("*", cors());
app.use(cors());

//Blogs
app.use("/reviews", reviews);

// Catch all non-error handler for api (i.e., 404 Not Found)
app.use("/*", function (req, res) {
  res.status(404).json({ message: "Not Found" });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
