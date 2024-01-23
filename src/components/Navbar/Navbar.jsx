import { useState } from "react";
import { AiOutlineMenu, AiOutlineUser ,AiOutlineClose} from 'react-icons/ai';
import logo from "../../assets/icon/Travelandzlogo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const handleNav = () => {
    setNavbar(!navbar);
  };
  const navItems = <>
  <li><Link to="/">About</Link></li>
  <li><Link to="/travelplan">Travelandz</Link></li>
  <li><Link to="/">Famous destinations</Link></li>
  <li><Link to="/">Contact us</Link></li>
  </>

  return (
    <div className='max-w-mxWidth text-gray-500 flex justify-between  items-center h-[80px] mx-auto '>
      <Link to="/"><img className="h-[35px]" src={logo}  alt="logo" /></Link>
      <ul className='hidden md:flex flex-grow justify-center items-center gap-x-8 '>
        {navItems}
      </ul>
      <div className='hidden md:flex items-center'>
        <AiOutlineUser className='text-2xl w-11 h-11 rounded-[100px] border-1 border-[#EAEAEA] p-3 bg-transparent text-black mr-2' />
      </div>
      <div onClick={handleNav} className='md:hidden'>
        {navbar ? <AiOutlineClose  size={20} className='text-black' /> : <AiOutlineMenu size={20} className='text-black' />}
      </div>
      <ul
        className={
            navbar
            ? 'fixed md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-900 border-none bg-[#FFF] ease-in-out duration-500 p-5'
            : 'ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%] '
        } 
      >
        <Link to="/"><img className="h-[35px]" src={logo}  alt="logo" /></Link>
        {navItems}
        <li className='p-4 rounded-xl hover:bg-duration-300 hover:text-black cursor-pointer border-gray-600'>
        <AiOutlineUser className='text-2xl w-11 h-11 rounded-[100px] border-1 border-[#EAEAEA] p-3 bg-transparent text-black ' />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
