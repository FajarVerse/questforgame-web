const Description = (props) => {
  const { className, children } = props;

  return (
    <>
      <p className={className}>{children}</p>
    </>
  );
};

export default Description;
