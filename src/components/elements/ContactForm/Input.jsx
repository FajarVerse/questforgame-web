const Input = (props) => {
  const { type, id, placeHolder } = props;

  return (
    <>
      <input type={type} name={id} id={id} placeholder={placeHolder} />
    </>
  );
};


export default Input