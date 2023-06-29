const express = require("express");
const movies = require("./routes/bondMovies");
const cors = require("cors");

const app = express();
const port = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

const validApiKey = "5";

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.query.apiKey;
  console.log(req.query);

  if(!apiKey) {
    return res
      .status(401)
      .json({ message: "No movies with that ID could be found! Your API key is missing." });
  }

  if(apiKey !== validApiKey) {
    return res
      .status(403)
      .json({ message: "Invalid API key." });
  }
  
  next();
}

app.use((req, res, next) => {
  authenticateApiKey(req, res, next);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/movies", movies);
  
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});