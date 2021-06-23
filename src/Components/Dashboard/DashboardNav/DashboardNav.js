import React from "react";
import { Link } from "react-router-dom";
import useToggle from "../../../Hooks/useToggle";

const DashboardNav = () => {
  const [toggle, setToggle, ref] = useToggle();

  const hoverEffect =
    "block py-2.5 px-4 rounded transition duration-200 bg-gradient-to-r hover:from-purple-800 hover:to-purple-500 hover:text-white";

  return (
    <div className="relative min-h-screen md:flex">
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <Link to="/" className="block p-4 text-white font-press-start">
          Retro Blogger
        </Link>

        <button
          onClick={() => setToggle(!toggle)}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        ref={ref}
        className="sidebar bg-gray-800 text-gray-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out -translate-x-full"
      >
        <Link to="/" className="text-white flex items-center space-x-2 px-4">
          <span className="text-2xl font-press-start">Retro Blogger</span>
        </Link>

        <nav className="font-press-start">
          <Link to="/" className={`${hoverEffect}`}>
            Home
          </Link>

          <Link to="/dashboard/addBlog" className={`${hoverEffect}`}>
            Add Blog
          </Link>

          <Link to="/login" className={`${hoverEffect}`}>
            Logout
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNav;
