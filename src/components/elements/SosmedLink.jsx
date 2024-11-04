import { Link } from "react-router-dom";

const SosmedLink = (props) => {
  const { link, platform, username, children } = props;

  return (
    <>
      <Link to={`/${link}`} className="sosmed-icon group flex">
        <span>{children}</span>
        <span className="sosmed-username">{username}</span>
      </Link>
    </>
  );
};

export default SosmedLink;
