import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.jpg";

const Header = () => {
  const navLink = (
    <>
      <li className="mr-5">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          Home
        </NavLink>
      </li>
      <li className="mr-5">
        <NavLink
          to="/allToys"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          All Toys
        </NavLink>
      </li>
      <li className="mr-5">
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>

        {/* Website logo and name */}
        <Link to="/" className="flex justify-center items-center">
          <img
            src={logo}
            alt="logo of Kid Kingdom"
            className="w-8 lg:w-20 h-8 lg:h-20"
            loading="lazy"
          />
          <h3 className="text-primary font-extrabold text-sm lg:text-3xl">
            TOY KINGDOM
          </h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
