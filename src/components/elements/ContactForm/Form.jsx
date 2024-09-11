import Button from "../Button";
import InputGroup from "./InputGroup";
import InputMessage from "./InputMessage";

const FormContact = () => {
  return (
    <>
      <form action="">
        <InputGroup type="text" id="text" placeHolder="Name"></InputGroup>
        <InputGroup
          type="number"
          id="number"
          placeHolder="No. Handphone"
        ></InputGroup>
        <InputGroup type="email" id="email" placeHolder="Email  "></InputGroup>
        <InputMessage id="message" placeHolder="Your Message" />
        <Button className="btn-form">Send message</Button>
      </form>
    </>
  );
};

export default FormContact;
