import { Link } from "react-router-dom";

const HeroSosmedLink = (props) => {
  const { link, children } = props;

  return (
    <>
      <Link to={`/${link}`} className="sosmed-icon">
        {children}
      </Link>
    </>
  );
};

export default HeroSosmedLink;
