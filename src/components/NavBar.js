import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl capitalize">itinerary tracker</h1>
        <button
          type="button"
          onClick={handleMenu}
          className="bg-indigo-500 inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg
              className="block h-6 w-6 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      {/* menu */}
      <ul className={`mt-4 ${isOpen ? '' : 'hidden'}`}>
        <Link onClick={handleMenu} to="/">
          <li className="nav-link">Home</li>
        </Link>
        <Link onClick={handleMenu} to="/add">
          <li className="nav-link">Add</li>
        </Link>
        <Link onClick={handleMenu} to="/contact">
          <li className="nav-link">Contact</li>
        </Link>
        <Link onClick={handleMenu} to="/about">
          <li className="nav-link">About</li>
        </Link>
      </ul>
    </>
  );
};

export default NavBar;
