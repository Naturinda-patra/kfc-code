import { useState } from "react";
import { Link } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px- bg-yellow-600 ">
          <div className=" flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className=" text-xl font-semibold" style={{ color: "red" }}>
              KFC
            </h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>

            <div className="relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Starter Menu
                </Link>

                <BiChevronDown className="cursor-pointer" size={25} />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5"></ul>
            </div>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Menu
            </Link>

            <Link
              to="Cart"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Cart
            </Link>
            
             
              <Link
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Logout
            </Link>
            
            
            

            {isAuthenticated ? (
              <button
                title="Logout"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            ) : (
              <button title="Login" onClick={() => loginWithRedirect()}>
                Login
              </button>
            )}
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Dishes
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Reviews
          </Link>

          {isAuthenticated ? (
            <button
              title="Logout"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          ) : (
            <button title="Login" onClick={() => loginWithRedirect()}>
              Login
            </button>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
