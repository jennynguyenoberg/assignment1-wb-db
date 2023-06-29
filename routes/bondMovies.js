const express = require("express");
const router = express.Router();
const mockData = require("../mockData");

let movies = mockData;

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:id", (req, res) => {
  const imdbID = req.params.id;
  const movie = movies.find((movie) => movie.imdbID === imdbID);

  if(!movie) {
    return res
      .status(404)
      .json({ message: "No movies found." });
  }

  res.json(movie);
});

let nextId = 20323;

router.post("/", (req, res) => {
  const movie = req.body.movie;
  const newMovie = {
    ...movie,
    imdbID: nextId,
  }

  nextId++;

  movies.push(newMovie);
  res.json(newMovie);
});

router.put("/:id", (req, res) => {
  const imdbID = req.params.id;
  const movie = req.body.movie;

  const index = movies.findIndex(movie => movie.imdbID === imdbID);

  if(index === -1) {
    return res
      .status(404)
      .json({ message: "Movie not found." });
  }

  const updatedMovie = { ...movies[index], ...movie };
  movies[index] = updatedMovie;

  res.json(updatedMovie);
});

router.delete("/:id", (req, res) => {
  const imdbID = req.params.id;
  
  const movie = movies.find((movie) => movie.imdbID === imdbID);
  
  if(!movie) {
    return res
      .status(404)
      .json({ message: "No movies with that ID could be found." });
  }
  
  const newData = movies.filter((movie) => movie.imdbID !== imdbID);
  movies = newData;
  
  res.json({ message: "Movie had been deleted." });
});

module.exports = router;