import React, { useState, useRef } from 'react';
import atom from '../assets/atom.svg';
import './nav.css';
import { FaChevronDown } from 'react-icons/fa';
import Button from './Button';
import Button2 from './Button2';
import Products from './Products';

const Navbar = () => {
  const Dropdown = () => {
    return (
      <div
        className="absolute mt-[30rem] w-[65rem] rounded-[12px] left-[-10rem] py-4 px-[45px] border-[1px] border-gray-200 bg-[#EDF2F4]"
        onMouseEnter={() => setDropdownVisible(true)}
        onMouseLeave={() => {
          clearTimeout(hideDropdownTimer.current);
          hideDropdownTimer.current = setTimeout(() => setDropdownVisible(false), 500);
        }}
      >
        <Products />
      </div>
    );
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const hideDropdownTimer = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(hideDropdownTimer.current);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    hideDropdownTimer.current = setTimeout(() => setDropdownVisible(false), 500);
  };

  return (
    <div className="h-[20%] w-full fixed">
      <div className="flex flex-row justify-between px-12 items-center">
        <div className="py-[20px] flex flex-row items-center ml-[20px] text-4xl font-bold">
          <div className="svg-icon">
            <img src={atom} alt="" className="" />
          </div>
          Strapi
        </div>
        <div className="mr-5 relative">
          <div>
            <ul className="flex flex-row items-center">
              <div className="flex flex-row font-semibold">
                <li
                  className={`mr-4 flex flex-row items-center`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Product <FaChevronDown className="ml-2 text-xs" />
                  {isDropdownVisible && <Dropdown />}
                </li>
                {/* Add similar onMouseEnter and onMouseLeave handlers for other items */}
                
                <li className="mr-4 flex flex-row items-center">Solutions <FaChevronDown className="ml-2 text-xs" /></li>
                    <li className="mr-4 flex flex-row items-center">Community <FaChevronDown className="ml-2 text-xs" /></li>
                    <li className="mr-4 flex flex-row items-center">Docs <FaChevronDown className="ml-2 text-xs" /></li>
                    <li className="mr-4 flex flex-row items-center">Pricing <FaChevronDown className="ml-2 text-xs" /></li>
                    <li className="mr-4 flex flex-row items-center">Cloud <FaChevronDown className="ml-2 text-xs" /></li>
                {/* ... */}
              </div>
            </ul>
          </div>
        </div>
        <div>
          <Button />
        </div>
        <div>
          <Button2 />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
