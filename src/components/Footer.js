import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="mt-8 text-center">
      <h1>Copyright &copy; 2021 Zatec </h1>
      <Link to="/about" className="underline text-blue-500">
        About
      </Link>
    </div>
  );
};

export default Footer;
