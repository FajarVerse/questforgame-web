import axios from "axios";

export const getGameGenre = (genre, callback) => {
  axios
    .get(
      `https://api.rawg.io/api/games?genres=${genre}&dates=2020-01-01,2024-07-31&ordering=-rating&ordering=-added&page_size=50&key=69dce11161584a0ab6592137c5091871`
    )
    .then((response) => {
      callback(response.data || []);
    })
    .catch((error) => {
      callback(error.data);
    });
};



export const getAllGame = (callback) => {
  axios
    .get(
      "https://api.rawg.io/api/games?dates=2020-01-01,2024-07-31&ordering=-rating&ordering=-added&page_size=50&key=69dce11161584a0ab6592137c5091871"
    )
    .then((response) => {
      callback(response.data || []);
    })
    .catch((error) => {
      callback(error.data);
    });
};

