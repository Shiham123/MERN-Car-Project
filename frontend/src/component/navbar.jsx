import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill, BsSearch } from 'react-icons/bs';
import { AiOutlineShopping } from 'react-icons/ai';
import themes from '../Hooks/themes';
import { Link } from 'react-router-dom';

const HomeNavbar = () => {
  const { changeTheme, mode } = themes();
  return (
    <div>
      <div className="navbar my-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52"
            >
              <Link to="/">
                <li className="font-inter text-[18px] font-bold px-4 my-4">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="font-inter text-[18px] font-bold px-4 my-4">
                  About
                </li>
              </Link>
              <Link to="/services">
                <li className="font-inter text-[18px] font-bold px-4 my-4 ">
                  Services
                </li>
              </Link>
              <Link to="/blog">
                <li className="font-inter text-[18px] font-bold px-4 my-4">
                  Blog
                </li>
              </Link>
              <Link to="/contact">
                <li className="font-inter text-[18px] font-bold px-4 my-4">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="btn btn-ghost normal-case text-xl">
            <img
              src="https://raw.githubusercontent.com/Shiham123/Img_for_All/b6876ea76b4f5a82bee3c1f01a1d1cb9d7afce5e/logo.svg"
              alt=""
              width="100px"
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              <li className="font-inter text-[18px] font-bold px-4">Home</li>
            </Link>
            <Link to="/about">
              <li className="font-inter text-[18px] font-bold px-4">About</li>
            </Link>
            <Link to="/services">
              <li className="font-inter text-[18px] font-bold px-4">
                Services
              </li>
            </Link>
            <Link to="/blog">
              <li className="font-inter text-[18px] font-bold px-4">Blog</li>
            </Link>
            <Link to="/contact">
              <li className="font-inter text-[18px] font-bold px-4">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <AiOutlineShopping
            size={40}
            className="text-fontColor cursor-pointer mx-4"
          />
          <BsSearch size={40} className="text-fontColor cursor-pointer" />
          {mode == 'light' ? (
            <MdDarkMode
              size={50}
              className="text-fontColor cursor-pointer duration-300 mx-4"
              onClick={changeTheme}
            />
          ) : (
            <BsFillSunFill
              size={50}
              className="text-fontColor cursor-pointer duration-300 mx-4"
              onClick={changeTheme}
            />
          )}
          <button className="border-2 rounded-lg border-fontColor mx-4 px-8 py-4 font-inter text-fontColor font-bold text-[18px] hover:bg-fontColor hover:text-white duration-150">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
