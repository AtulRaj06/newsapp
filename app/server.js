require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const compression = require("compression");
const v1Routes = require("./api/v1/routes.index.js");
const PORT = process.env.PORT || 8090;
const app = express();

// set security HTTP headers
app.use(helmet());
// added cross origin request support
app.use(cors());
// View engine
app.set("view engine", "ejs");
// parse json request body
app.use(express.json({ limit: "500mb" }));
// parse urlencoded request body
app.use(express.urlencoded({ limit: "500mb", extended: true }));
// sanitize request data
app.use(xss());
// compress all responses
app.use(compression());
// remove whitespaces from request body
// app.use(requestTrimmer);
// static file path
app.use(express.static("public"));

//routes
app.get("/", (req, res) => {
  res.send("i am server");
});
app.use("/api/v1/", v1Routes);
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  console.log("Not Found");
  res.status(404).send({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running at the port : ${PORT}`);
});
