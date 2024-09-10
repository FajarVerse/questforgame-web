import GenreLink from "./GenreLink";

const NavGenre = (props) => {
  const { onSelectGenre } = props;

  return (
    <>
      <nav className="nav genre-nav">
        <GenreLink onSelectGenre={() => onSelectGenre("")}>All</GenreLink>
        <GenreLink onSelectGenre={() => onSelectGenre("action")}>
          Action
        </GenreLink>
        <GenreLink onSelectGenre={() => onSelectGenre("indie")}>
          Indie
        </GenreLink>
        <GenreLink onSelectGenre={() => onSelectGenre("adventure")}>
          Adventure
        </GenreLink>
        <GenreLink
          onSelectGenre={() => onSelectGenre("role-playing-games-rpg")}
        >
          RPG
        </GenreLink>
        <GenreLink onSelectGenre={() => onSelectGenre("strategy")}>
          Strategy
        </GenreLink>
        <GenreLink onSelectGenre={() => onSelectGenre("shooter")}>
          FPS
        </GenreLink>
        <GenreLink onSelectGenre={() => onSelectGenre("fighting")}>
          Fighting
        </GenreLink>
        <GenreLink onSelectGenre={() => onSelectGenre("racing")}>
          Racing
        </GenreLink>
        <GenreLink onSelectGenre={() => onSelectGenre("sports")}>
          Sports
        </GenreLink>
      </nav>
    </>
  );
};

export default NavGenre;
