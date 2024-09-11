import Label from "./Label";

const InputMessage = (props) => {
  const { id, placeHolder, children } = props;

  return (
    <>
      <div className="input-group">
        <Label id={id}>{children}</Label>
        <textarea name={id} id={id} placeholder={placeHolder}></textarea>
      </div>
    </>
  );
};

export default InputMessage;
