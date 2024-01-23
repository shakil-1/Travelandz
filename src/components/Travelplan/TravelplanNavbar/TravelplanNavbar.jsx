import { useState } from "react";
import { AiOutlineMenu, AiOutlineUser ,AiOutlineClose} from 'react-icons/ai';
import { Link } from "react-router-dom";
import logo from "../../../assets/icon/Travelandzlogo.svg";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";



const TravelplanNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  const handleNav = () => {
    setNavbar(!navbar);
  };
  const navItems = <>
  <li><Link to="/">
    <div className="py-3 px-4">
    <IoIosNotifications className="w-6 h-6 text-[#292D32]" />
    </div></Link></li>
   <li><Link to="/">
    <div className="flex gap-x-2 items-center  py-3 px-4">
    <h1 className="text-black text-base font-medium">USD</h1>
    <IoIosArrowDown className="w-4 h-4 text-[#292D32]"  />
    </div></Link></li>
  <li><Link to="/">
    <div className="flex items-center border-1 rounded-[100px] py-3 px-4 border-[#EAEAEA]  mx-4">
    <FaUser className="mr-2 w-5 h-5 text-[#1B1B1E]"  />
    <h3 className="mr-[10px] text-[#1B1B1E] text-base font-medium">John doe</h3>
    <IoIosArrowDown className="w-4 h-4 text-[#292D32]"  />
    </div>
    </Link></li>
  </>


    return (
      <div className='max-w-mxWidth text-gray-500 flex justify-between  items-center h-[90px]   mx-auto px-5'>
      <Link to="/"><img className="h-[35px]" src={logo}  alt="logo" /></Link>
      <ul className='hidden md:flex flex-grow justify-end gap-x-8 '>
        {navItems}
      </ul>
      <div onClick={handleNav} className='md:hidden'>
        {navbar ? <AiOutlineClose size={20} className='text-black' /> : <AiOutlineMenu size={20} className='text-black' />}
      </div>
      <ul
        className={
            navbar
            ? 'fixed md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-900 border-none p-4 bg-[#FFF] ease-in-out duration-500'
            : 'ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <Link to="/"><img className="h-[35px]" src={logo}  alt="logo" /></Link>
     {/* mobille  */}
        {navItems}
      </ul>
    </div>
    );
};

export default TravelplanNavbar;