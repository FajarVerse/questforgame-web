import Input from "./Input";
import Label from "./Label";

const InputGroup = (props) => {
  const { type, id, placeHolder, children } = props;

  return (
    <>
      <div className="input-group">
        <Label id={id}>{children}</Label>
        <Input type={type} id={id} name={id} placeHolder={placeHolder} />
      </div>
    </>
  );
};

export default InputGroup;
