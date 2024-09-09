import { Link } from "react-router-dom";

const Links = ({ url, children }) => {
  return (
    <>
      <Link to={url}>{children}</Link>
    </>
  );
};

export default Links;
