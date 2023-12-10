import React, { useState, useRef } from 'react';
import atom from '../assets/atom.svg';
import './nav.css';
import { FaChevronDown } from 'react-icons/fa';
import Button from './Button';
import Button2 from './Button2';
import Products from './Products';
import Solutions from "./Solutions"

const Navbar = () => {
    const Dropdown = () => {
        return (
          <div className="absolute mt-[32rem] w-[65rem] rounded-[12px] left-[-10rem] py-4 px-[45px] border-[1px] border-gray-200 bg-[#EDF2F4] z-[10000]">
            <Products />
          </div>
        );
      };
    
      const Dropdown2 = () => {
        return (
          <div className="absolute mt-[32rem] w-[65rem] rounded-[12px] left-[-10rem] py-4 px-[45px] border-[1px] border-gray-200 bg-[#EDF2F4] z-[999] ">
            <Solutions />
          </div>
        );
      };
    
      const [isDropdownVisible1, setDropdownVisible1] = useState(false);
      const [isDropdownVisible2, setDropdownVisible2] = useState(false);
      const hideDropdownTimer1 = useRef(null);
      const hideDropdownTimer2 = useRef(null);
    
      const handleMouseEnter1 = () => {
        clearTimeout(hideDropdownTimer1.current);
        setDropdownVisible1(true);
      };
    
      const handleMouseLeave1 = () => {
        hideDropdownTimer1.current = setTimeout(() => setDropdownVisible1(false), 500);
      };
    
      const handleMouseEnter2 = () => {
        clearTimeout(hideDropdownTimer2.current);
        setDropdownVisible2(true);
      };
    
      const handleMouseLeave2 = () => {
        hideDropdownTimer2.current = setTimeout(() => setDropdownVisible2(false), 500);
      };

  return (
    <div className="h-[20%] w-full">
      <div className="flex flex-row justify-between px-12 items-center">
        <div className="py-[20px] flex flex-row items-center ml-[20px] text-4xl font-bold">
          <div className="svg-icon">
            <img src={atom} alt="" className="" />
          </div>
          Strapi
        </div>
        <div className="mr-5 relative">
          <div>
            <ul className="flex flex-row items-center cursor-pointer">
              <div className="flex flex-row font-semibold">
              <li
          className={`mr-4 flex flex-row items-center`}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          Product <FaChevronDown className="ml-2 text-xs" />
          {isDropdownVisible1 && <Dropdown />}
        </li>
                {/* Add similar onMouseEnter and onMouseLeave handlers for other items */}
                
                <li
          className={`mr-4 flex flex-row items-center`}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          Solutions <FaChevronDown className="ml-2 text-xs" />
          {isDropdownVisible2 && <Dropdown2 />}
        </li>




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
