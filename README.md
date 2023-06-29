# BOND MOVIES API
--
This project is a CRUD (Create, Read, Update, Delete) API, handeling Bond movies written with Node.js and uses Express.js as a server.

## Installation
--
1. Install [Node.js](https://nodejs.org/en/download), if you haven't already.
2. Run `npm install` to install the projects dependencies.
3. Run `npm run dev` to start the server.

Use http://localhost:3001 on your web browser or via [Postman](#postman)

(Note that you are required to add the [API Keys](#apikeys) to access the list of movies.)

## API Endpoints
--

### GET all movies

Metod: `GET`
URL: `/movies`
Example: `http://localhost:3001/movies`

### GET specific movie based on ID
 
Metod: `GET`
URL: `/movies/:id`
Example: `http://localhost:3001/movies/tt0867211`

### POST a new movie 

Metod: `POST`
URL: `/movies`
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

Metod: `PUT`
URL: `/characters/:id`
Example: `http://localhost:3001/movies/tt0867211`
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

Metod: `DELETE`
URL: `/characters/:id`

## How to use the API with Postman
> **POST** /postman
--
1. Download and install [Postman](https://www.postman.com/downloads/).
2. Create a new "Collection" in Postman.
3. For each API endpoint, create a new "Request" in your collection and configure it with the right method and URL (as seen above).
4. To use `POST` and `PUT` requests, go to the `Body`-tab within your request and choose the "raw" and "JSON" format. Then input the JSON-data for your movie.
5. Send your requests and explore!

## Implementing an API key
> **POST** /apikeys
--
To get access to the list of movies you need to add the API-key (in this case ?apiKey=5) to the URL, as such: `http://localhost:3001/movies?apiKey=5`

Example of specific movie ID: `http://localhost:3001/movies/tt0867211?apiKey=5`

If the apikey seems to be invalid, this error message occurs in the `Body`:  
```
{
    "message": "Invalid API key."
}
```