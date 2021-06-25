import React from "react";
import { Link } from "react-router-dom";
import useToggle from "../../Hooks/useToggle";

const NavigationBar = () => {
  const [toggle, setToggle, ref] = useToggle();

  const hoverEffect =
    "block py-2.5 px-4 rounded transition duration-200 bg-gradient-to-r hover:bg-hover hover:text-white";

  const headerFont =
    "text-transparent bg-clip-text bg-heading font-press-start";

  return (
    <React.Fragment>
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <Link to="/" className={`${headerFont} block p-4`}>
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
        <Link to="/" className="flex items-center space-x-2 px-4">
          <span className={`${headerFont} text-2xl`}>Retro Blogger</span>
        </Link>

        <nav className="font-press-start">
          <Link to="/" className={`${hoverEffect}`}>
            Home
          </Link>

          <Link to="/dashboard" href="" className={`${hoverEffect}`}>
            Dashboard
          </Link>
          <Link to="/login" className={`${hoverEffect}`}>
            Login
          </Link>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavigationBar;
