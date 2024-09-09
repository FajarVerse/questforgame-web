const Headers = (props) => {
  const { className, children } = props;
  return (
    <>
      <h1 className={className}>{children}</h1>
    </>
  );
};

export default Headers;
