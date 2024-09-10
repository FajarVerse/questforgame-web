import { Bookmark, Calendar, Cpu, PlayCircle, Tag, Users } from "react-feather";

const DetailGames = ({ children }) => {
  return (
    <>
      <div className="row-content">{children}</div>
    </>
  );
};

const Top = (props) => {
  const { children, img } = props;
  return (
    <>
      <div className="top">
        <h1>{children}</h1>
        <img src={img} alt="" />
      </div>
    </>
  );
};

const BodyLeftContent = (props) => {
  const { img, children, rating, ratingGood, ratingBad } = props;

  return (
    <>
      <div className="left-content">
        <div className="screenshot">{img}</div>

        <article className="description">
          <p>{children}</p>
        </article>

        <div className="rating">
          <div className="rate">
            <div
              className="layer-one"
              style={{ "--rating": (rating / 5) * 10 }}
            >
              <div className="layer-two">
                <p>{rating}</p>
              </div>
            </div>
          </div>
          <div className="good-rate">
            <ul>
              <h3>Good</h3>
              {""}
              {ratingGood}
            </ul>
          </div>
          <div className="bad-rate">
            <ul>
              <h3>Bad </h3>
              {ratingBad}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const BodyRightContent = (props) => {
  const { date, tag } = props;

  return (
    <div className="right-content">
      <div className="content">
        <div className="last-up">
          <h3>
            <Calendar width={20} height={20} /> Last Update
          </h3>
          <ul>
            <li>{date}</li>
          </ul>
        </div>
        <div className="tags">
          <h3>
            <Tag width={20} height={20} /> Tags
          </h3>
          <ul>{tag}</ul>
        </div>
      </div>
    </div>
  );
};

const Bottom = (props) => {
  const { gameName, publishers, released, genre, added, link } = props;

  return (
    <>
      <div className="bottom">
        <div className="title-bottom">
          <p>
            <Bookmark width={15} height={15} /> <span>{gameName}</span>
          </p>
        </div>
        <div className="info">
          <p>
            <Users width={15} height={15} /> Publisher :{" "}
            <span>{publishers}</span>
          </p>
          <p>
            <Calendar width={15} height={15} /> Realeased :{" "}
            <span>{released}</span>
          </p>
          <p>
            <Cpu width={15} height={15} /> Catagories : {genre}
          </p>
          <p>
            <PlayCircle width={15} height={15} /> Played : <span>{added}</span>
          </p>
        </div>
        <div className="platform">{link}</div>
      </div>
    </>
  );
};

DetailGames.Top = Top;
DetailGames.BodyLeftContent = BodyLeftContent;
DetailGames.BodyRightContent = BodyRightContent;
DetailGames.Bottom = Bottom;

export default DetailGames
