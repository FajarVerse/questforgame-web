import axios from "axios";

export const getDetailGame = (id, callback) => {
  axios
    .get(
      `https://api.rawg.io/api/games/${id}?key=69dce11161584a0ab6592137c5091871`
    )
    .then((response) => {
      callback(response.data || []);
    })
    .catch((error) => {
      callback(error.data);
    });
};

export const getScreenshotGame = (id, callback) => {
  axios
    .get(
      `https://api.rawg.io/api/games/${id}/screenshots?key=69dce11161584a0ab6592137c5091871`
    )
    .then((response) => {
      callback(response.data || {});
    })
    .catch((error) => {
      callback(error.data);
    });
};
