import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <div className='header fixed w-full h-10 d-flex justify-content-start align-items-center px-4 text-light bg-dark '>
      <img className='h-75' src={Logo} alt="Logo" />
      {/* menu */}
      <ul className='nav'>
        <li className='nav-item'>
          <Link className='nav-link text-light' to="/movies">Movies</Link>
        </li>
      </ul>
    </div>
  )
}

