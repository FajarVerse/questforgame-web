import Description from "../elements/Description";
import Headers from "../elements/Headers";

const About = (props) => {
  const { slideIndexClass, spanText, headerText, children } = props;

  return (
    <>
      <div className={`slide ${slideIndexClass}`}>
        <div className="slide-content">
          <Headers className="about-title">
            <span>{spanText}</span> {headerText}{" "}
          </Headers>
          <Description className="about-description">{children}</Description>
        </div>
      </div>
    </>
  );
};

export default About;
