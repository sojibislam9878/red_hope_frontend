import { NavLink } from "react-router-dom"

const Navbar = () => {
  const normalLink = "lg:font-bold lg:text-lg lg:mr-2 mt-2 lg:mt-0";
  const activeLink = `bg-gradient-to-r from-[#B18B5E] to-[#d6aa76] border border-blure-500 text-white border-none hover:bg-transparent focus:bg-transparent focus:text-white ${normalLink}`;
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        about
      </NavLink>
    </div>
  );
}

export default Navbar
