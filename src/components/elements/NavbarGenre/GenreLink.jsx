import { Link } from "react-router-dom";

const GenreLink = (props) => {
  const { onSelectGenre, children } = props;

  return (
    <>
      <Link to={"#"} onClick={onSelectGenre}>
        <span>{children}</span>
      </Link>
    </>
  );
};

export default GenreLink;
