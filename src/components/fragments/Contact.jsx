import { GitHub, Instagram, Mail, Twitter } from "react-feather";
import FormContact from "../elements/ContactForm/Form";
import Description from "../elements/Description";
import Headers from "../elements/Headers";
import Links from "../elements/Links";

const Contact = () => {
  return (
    <>
      <div className="contact-content">
        <div className="form-content">
          <header>
            <Headers className="contact-title">
              Contact <span>Us</span>
            </Headers>
            <Description className="contact-desc">
              Contact us if you find a problem
            </Description>
          </header>
          <div className="form">
            <FormContact />
          </div>
          <div className="sosmed">
            <Links url="https://www.instagram.com/fajar.3072/">
              <Instagram width={37} height={37} />
            </Links>

            <Links url="">
              <Mail width={37} height={37} />
            </Links>

            <Links url="">
              <Twitter width={37} height={37} />
            </Links>

            <Links url="https://github.com/Gifarfajar321">
              <GitHub width={37} height={37} />
            </Links>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
