import { Link } from "react-router-dom";

const GameCard = (props) => {
  const { children, id } = props;

  return (
    <>
      <Link to={`/detail-game/${id}`}>
        <div className="card">{children}</div>
      </Link>
    </>
  );
};

const Header = (props) => {
  const { img, alt } = props;

  return <img src={img} alt={alt} />;
};

const Body = (props) => {
  const { rating, children } = props;

  return (
    <>
      <div className="title_and_rate">
        <h2>{children}</h2>
        <div className="rating">
          <div className="layer-one" style={{ "--rating": (rating / 5) * 10 }}>
            <div className="layer-two">
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

GameCard.Header = Header;
GameCard.Body = Body;

export default GameCard;
