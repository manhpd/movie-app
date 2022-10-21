import React, { useState } from 'react'
import { Link, useNavigate, createSearchParams } from 'react-router-dom';
import Logo from '../assets/logo.png';
import SearchBox from './SearchBox';

export const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/search/${searchValue}` );
  }

  return (
    <div className='header fixed w-full h-10 d-flex justify-content-between align-items-center px-4 text-light bg-dark'>
      <div className='h-100 d-flex justify-content-between align-items-center'>
        <img className='h-75' src={Logo} alt="Logo"></img>

        <ul className='nav'>
          <li className='nav-item'>
            <Link className='nav-link text-light' to="/movies">Movies</Link>
          </li>
        </ul>
      </div>
      <div className='d-flex w-full justify-content-end'>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} handleSubmit={handleSubmit}/>
      </div>
    </div>);
}