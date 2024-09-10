import { useEffect, useState } from "react";
import { getAllGame, getGameGenre } from "../../services/listgame.service";
import NavGenre from "../elements/NavbarGenre/NavbarGenre";
import GameCard from "../elements/GameCards";

const Review = () => {
  const [allGame, setAllGame] = useState([]);
  const [gameGenre, setGameGenre] = useState([]);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    getAllGame((data) => {
      setAllGame(data.results);
    });
  }, [allGame]);

  useEffect(() => {
    getGameGenre(genre, (data) => {
      setGameGenre(data.results);
    });
  }, [genre]);

  return (
    <>
      <div className="row-content">
        <NavGenre onSelectGenre={setGenre} />
        <div className="card-row">
          {genre === ""
            ? allGame.map((game) => (
                <GameCard key={game.id} id={game.id}>
                  <GameCard.Header
                    img={game.background_image}
                    alt={game.background_image}
                  />
                  <GameCard.Body rating={game.rating}>
                    {game.name}
                  </GameCard.Body>
                </GameCard>
              ))
            : gameGenre.map((game) => (
                <GameCard key={game.id} id={game.id}>
                  <GameCard.Header
                    img={game.background_image}
                    alt={game.background_image}
                  />
                  <GameCard.Body rating={game.rating}>
                    {game.name}
                  </GameCard.Body>
                </GameCard>
              ))}
        </div>
      </div>
    </>
  );
};

export default Review;
