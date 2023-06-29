# BOND MOVIES API

This project is a CRUD (Create, Read, Update, Delete) API, handeling Bond movies written with Node.js and uses Express.js as a server.

## Installation

1. Install [Node.js](https://nodejs.org/en/download), if you haven't already.
2. Run `npm install` to install the projects dependencies.
3. Run `npm run dev` to start the server.

Use http://localhost:3001 on your web browser or via [Postman](https://www.postman.com/downloads/).

<sub>(Note that you are required to add the [API-key](#api-key) to access the list of movies.)</sub>

## API Endpoints
---
### GET all movies

Metod: `GET`<br>
URL: `/movies`<br>
Example: `http://localhost:3001/movies`

### GET specific movie based on ID
 
Metod: `GET`<br>
URL: `/movies/:id`<br>
Example: `http://localhost:3001/movies/tt0867211`

### POST a new movie 

Metod: `POST`<br>
URL: `/movies`<br>
Body:
```
{ 
  "Title": "New Title",
  "Year": "New Year",
  "Rated": "N/A",
  "Released": "New Date"
}
```

### PUT updated movie based on ID

Metod: `PUT`<br>
URL: `/characters/:id`<br>
Example: `http://localhost:3001/movies/tt0867211`<br>
Body: 
```
{ 
  "Title": "Welcome to Japan, Mr. Bond",
  "Year": "1967",
  "Rated": "N/A",
  "Released": "02 Jun 1967",
  "Runtime": "50 min",
  "Genre": "Action, Adventure, Drama",
  "Director": "Daniel Davis",
  "Writer": "Edwin Apfel",
  "Actors": "Patrick Allen, Desmond Llewelyn, Lois Maxwell"
  "imdbID": "tt0867211"
}
```

### DELETE movie based on ID

Metod: `DELETE`<br>
URL: `/characters/:id`<br>
Example: `http://localhost:3001/movies/tt0867211`

## How to use the API with Postman
---
1. Download and install [Postman](https://www.postman.com/downloads/).
2. Create a new "Collection" in Postman.
3. For each API endpoint, create a new "Request" in your collection and configure it with the right method and URL (as seen above).
4. To use `POST` and `PUT` requests, go to the `Body`-tab within your request and choose the "raw" and "JSON" format. Then input the JSON-data for your movie.
5. Send your requests and explore!

## API Key
---
To get access to the list of movies you need to add the API-key (in this case **?apiKey=5**) to the URL, as such: `http://localhost:3001/movies?apiKey=5`

Example of specific movie ID: `http://localhost:3001/movies/tt0867211?apiKey=5`

If the apikey seems to be invalid, this error message occurs in the `Body`:  
```
{
    "message": "Invalid API key."
}
```