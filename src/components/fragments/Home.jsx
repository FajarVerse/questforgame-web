import Description from "../elements/Description";
import Headers from "../elements/Headers";
import SubHeaders from "../elements/SubHeaders";
import "../../style/PageStyle/home.css";

const Home = () => {
  return (
    <header className="header-home">
      <Headers className="home-title">QuestForGame</Headers>
      <SubHeaders className="slogan-teks">
        Level Up <span>Your Game Experience</span>{" "}
      </SubHeaders>
      <Description className="description-home">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        veritatis a assumenda nisi cum omnis autem magni sequi, deleniti iusto!
        Distinctio unde
      </Description>
      <button className="btn-home">Explore Now!!</button>
    </header>
  );
};

export default Home;
