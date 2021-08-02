console.log("this is a mesage form fetch.js");

fetch("https://v2.jokeapi.dev/joke/Programming?type=single").then(
  (response) => {
    response.json().then((data) => {
      console.log(data.joke);
    });
  }
);
