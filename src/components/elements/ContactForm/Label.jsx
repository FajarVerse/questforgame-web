const Label = (props) => {
  const { id, children } = props;

  return (
    <>
      <label htmlFor={id}>{children}</label>
    </>
  );
};

export default Label;
