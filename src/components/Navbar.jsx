import React from "react";
import atom from "../assets/atom.svg";
import "./nav.css";
import { FaChevronDown } from "react-icons/fa";
import Button from "./Button"
import Button2 from "./Button2";


const Navbar = () => {
  return (
    <div className="h-[20%] w-full ">
      <div className="flex flex-row justify-between px-12 items-center">
        <div className="py-[20px] flex flex-row items-center ml-[30px] text-4xl font-bold">
          <div className="svg-icon">
            <img src={atom} alt="" className="" />
          </div>
          Strapi
        </div>
        {/* items */}
        <div className="mr-5">
            {/* list */}
            <div>
                <ul className="flex flex-row items-center">
                    <div className="flex flex-row font-semibold">
                    <li className="mr-4 flex flex-row items-center">Product <FaChevronDown className="ml-2 text-xs" /> </li>
                    <li className="mr-4 flex flex-row items-center">Solutions <FaChevronDown className="ml-2 text-xs" /></li>
                    <li className="mr-4 flex flex-row items-center">Community <FaChevronDown className="ml-2 text-xs" /></li>
                    <li className="mr-4 flex flex-row items-center">Docs <FaChevronDown className="ml-2 text-xs" /></li>
                    <li className="mr-4 flex flex-row items-center">Pricing <FaChevronDown className="ml-2 text-xs" /></li>
                    <li className="mr-4 flex flex-row items-center">Cloud <FaChevronDown className="ml-2 text-xs" /></li>
                    </div>
                </ul>
            </div>
            {/*  Cards*/}
            

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
