import { NavLink, useLocation } from "react-router-dom";
import { useFilter } from "../contexts/FilterContext";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  let { isSideBarOpen, setIsSideBarOpen } = useFilter();
  let { pathname } = useLocation();
  console.log(pathname);
  return (
    <nav className="w-full fixed top-2 z-50 flex justify-between items-center bg-[#2c4441d8] text-white rounded-full md:px-10 px-4 py-3 border border-white/20 mt-4 max-w-[20rem] sm:max-w-xl  md:max-w-3xl lg:max-w-5xl backdrop-blur-md">
      {/* Logo */}
      <p className=" hidden lg:block text-2xl font-serif tracking-widest font-extrabold  ">
        Glamora
      </p>

      {pathname === "/" && (
        <p
          className={`lg:hidden text-2xl font-serif tracking-widest font-extrabold  `}
        >
          Glamora
        </p>
      )}

      {pathname === "/shop" && (
        <p
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          className="lg:hidden cursor-pointer"
        >
          {isSideBarOpen ? <IconX /> : <IconMenu2 />}
        </p>
      )}

      {/* ! screen bigger than mobile */}
      <nav className="md:space-x-10 md:block hidden  space-x-2 font-mono text-xl">
        <NavLink
          to={"/"}
          className={
            " border border-transparent  hover:border-white/30  py-1 px-5 rounded-md"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"shop"}
          className={
            " border border-transparent  hover:border-white/30  py-1  px-5 rounded-md"
          }
        >
          Shop
        </NavLink>
      </nav>

      {/* ! for mobile  */}
      <nav className=" md:hidden  font-mono text-xl">
        <NavLink
          to={"/"}
          className={"   hover:border-white  py-2 px-2 rounded-md"}
        >
          🏠
        </NavLink>
        <NavLink
          to={"shop"}
          className={"   hover:border-white  py-2  px-2 rounded-md"}
        >
          🛒
        </NavLink>
      </nav>
    </nav>
  );
};

export default Navbar;
