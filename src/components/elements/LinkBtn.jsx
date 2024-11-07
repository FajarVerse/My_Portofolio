import { Link } from "react-router-dom";

const LinkBtn = (props) => {
  const { link, className, children } = props;

  return (
    <>
      <Link to={link} target="_blank" className={`${className} btn-card `}>
        {children}
      </Link>
    </>
  );
};

export default LinkBtn;
