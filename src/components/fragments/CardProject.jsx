import SubHeader from "../elements/SubHeader";

const CardProject = (props) => {
  const { children } = props;

  return (
    <>
      <div className="w-full h-56 rounded-md shadow-md shadow-slate-500 overflow-hidden">
        {children}
      </div>
    </>
  );
};

const CardImage = (props) => {
  const { image, imageTitle } = props;

  return (
    <>
      <div className="w-full h-4/5 bg-red-700 overflow-hidden">
        <img src={image} alt={imageTitle} className="object-center" />
      </div>
    </>
  );
};

const CardBody = (props) => {
  const { children } = props;

  return (
    <>
      <div className="w-full h-1/5 px-6 flex bg-light justify-between items-center">
        <SubHeader className="text-dark">{children}</SubHeader>
        <SubHeader className="text-primary relative before:content-[''] before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-accent hover:text-accent transition duration-300 ease-in-out hover:before:bg-primary hover:before:transition before:duration-300 before:ease-out">
          See More
        </SubHeader>
      </div>
    </>
  );
};

CardProject.CardImage = CardImage;
CardProject.CardBody = CardBody;

export default CardProject;
