import Header from "../../elements/Header";
import my_photo_about from "../../../assets/image/my_photo/photo_4.jpg";

const AboutHeader = () => {
  return (
    <>
      <div className="w-full mb-5 lg:w-2/4 lg:absolute">
        <Header className="lg:text-7xl lg:text-left lg:text-pretty lg:tracking-wide xl:text-8xl">
          Get to Know Me Better
        </Header>
      </div>
      <div className="w-full mx-auto mb-5">
        <div className="w-11/12 mx-auto rounded-sm shadow-md shadow-slate-300 md:w-5/6 lg:w-[70%] lg:mr-0 lg:rounded-md xl:w-4/6 xl:h-[29rem] 2xl:w-3/5">
          <img
            src={my_photo_about}
            alt="Gifar Fajar Maulana"
            className="w-full h-full lg:object-cover lg:object-top"
          />
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
