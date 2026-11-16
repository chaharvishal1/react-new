import React from 'react';
import { Link, Outlet } from 'react-router';
import logo from '../assets/hero.png';

const Layout = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <img src={logo} alt="Logo" className="inline-block mr-2" style={{ height: '100px', width: '100px' }} />
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/author/1">Author 1</Link></li>
            <li><Link to="/author/2">Author 2</Link></li>
          </ul>
        </nav>
      </header>
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;