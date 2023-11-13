const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/search/movie?query=spiderman&include_adult=false&language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjdlYTU2YjU1OTEzMTE3MGUxNWQwNDUwYjA4Yzg3OSIsInN1YiI6IjY1NGUxMzM2ZmQ0ZjgwMDEzY2VjMTVkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WSFGN8FG2m5CpTo7qvjq4Lv65nUc984uBc9F-F5PNzY'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));