import logo from "../assets/logo.png";
import facebook from "../assets/facebook.svg";
import linin from "../assets/linkin.svg";
import twiter from "../assets/twiter.svg";
import instagram from "../assets/Instagram.svg";
const Footer = () => {
  return (
    <div className="bg-[#ECECED] mx-auto ">
      <div className="py-[60px] flex justify-center items-center mx-auto">
        <div>
          <img src={logo} alt="" />
          <div className="flex gap-x-[30px] mt-[33px] mb-[40.94px] ">
            <img className="w-[16px] h-[16.06px]" src={facebook} alt="" />
            <img className="w-[16px] h-[16.06px]" src={linin} alt="" />
            <img className="w-[16px] h-[16.06px]" src={twiter} alt="" />
            <img className="w-[16px] h-[16.06px]" src={instagram} alt="" />
          </div>
          <p>© 2023, made with by Travelandz</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
