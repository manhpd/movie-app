import React from 'react'
import Logo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <div className='header fixed w-full h-10 d-flex justify-content-start align-items-center px-4 text-light bg-dark mb-3'>
      <img className='h-75' src={Logo} alt="Logo" />
      {/* menu */}
      <ul className='nav'>
        <li calssName='nav-item'>
          <span className='nav-link text-light'>
            Movies
          </span>
        </li>
      </ul>
    </div>
  )
}

