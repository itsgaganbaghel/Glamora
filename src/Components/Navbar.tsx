import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-2 z-50 flex justify-between items-center bg-[#2c4441d8] text-white rounded-full px-10 py-3 border border-white/20 mt-4 max-w-[20rem] sm:max-w-xl  md:max-w-3xl lg:max-w-5xl backdrop-blur-md">
      {/* Logo */}
      <p className="text-2xl font-serif tracking-widest font-extrabold  ">
      Glamora
      </p>

      {/* Links */}
      <nav className="space-x-10 font-mono text-xl">
        <NavLink
          to={"/"}
          className={
            " border border-[#2c4441d8] hover:border-white  py-1 px-5 rounded-md"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"shop"}
          className={
            " border border-[#2c4441d8] hover:border-white  py-1  px-5 rounded-md"
          }
        >
          Shop
        </NavLink>
      </nav>
    </nav>
  );
};

export default Navbar;
