import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BsCopy } from "react-icons/bs";
import mid from "../assets/common.png";
import orion from "../assets/orion_health.svg";
import toyota from "../assets/toyota.svg";
import engine from "../assets/Logo_engie.svg";
import walmart from "../assets/walmart.svg";
import deliver from "../assets/Delivery_NB.svg";
import nasa from "../assets/NASA_NB.svg";
import soc from "../assets/societe_generale.svg";
import acc from "../assets/Accenture.svg";
import ibm from "../assets/ibm.svg";
import ebay from "../assets/ebay.svg";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Elements from "./Elements";

const Midcontent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  }, [controls, inView]);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // Adjust the duration as needed
    });
  };

  return (
    <div className="mt-4">
      <div className="flex justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-2 py-[2px] ml-[-8px] w-[60px] text-white bg-purple-600 flex justify-center rounded-[7px] cursor-default font-semibold">
          <ScrollLink to="section1" smooth={true} duration={500}>
            CLOUD
          </ScrollLink>
        </motion.div>

        <div>
          <span className="ml-7 text-gray-700 cursor-pointer">
            Try Strapi Cloud for 14 days Deploy your app!
          </span>
        </div>
      </div>

      <div className="flex flex-col ml-[28%] mt-[50px] font-extrabold text-6xl ">
        Manage Any Content.
        <span className="ml-[139px]">Anywhere.</span>
      </div>

      <div className="flex justify-center mt-[36px] text-gray-400 font-semibold">
        <div className="flex flex-col justify-center">
          <span className="ml-[40px]">
            The leading open-source headless CMS.
          </span>
          100% JavaScript / TypeScript and fully customizable.
        </div>
      </div>

      <div className="flex  justify-center mt-10">
        <div className=" items-center text-white max-w-[27rem] w-[90%] py-3 backdrop-blur-lg bg-opacity-70 border border-gray-500 border-opacity-90 bg-[#4e59ec] rounded-[10px] px-4 ">
          <div className="flex flex-row justify-between items-center font-semibold text-sm">
            npx create-strapi-app@latest my-project
            <BsCopy />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <button className="py-4 px-7 text-white font-semibold bg-[#9335E0] rounded-[10px] ml-[20px]  mr-[30px] hover:transition-transform hover:transform hover:scale-105 hover:bg-purple-700">
          Get Started
        </button>

        <button className="py-4 px-7 text-[#9335E0] font-semibold bg-[#fff] rounded-[10px]  mr-[30px] hover:transition-transform hover:transform hover:scale-105 shadow-md hover:shadow-2xl">
          Try the live demo
        </button>
      </div>
      <div className="flex justify-center p-5 mt-5">
        <img src={mid} alt="" className="w-[90%] h-[70%]" />
      </div>

      <motion.div
        ref={ref}
        className="mt-[6.5rem] justify-center flex mb-20 flex-wrap items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        exit={{ opacity: 0, y: -50 }}>
        <img src={orion} alt="" className="w-[120px] ml-14 mx-10" />
        <img src={toyota} alt="" className="w-[110px] mx-10" />
        <img src={engine} alt="" className="w-[110px] mx-10" />
        <img src={walmart} alt="" className="w-[110px] mx-10" />
        <img src={deliver} alt="" className="w-[110px] mx-10" />
        <img src={nasa} alt="" className="w-[110px] mx-10" />
        <div className="mt-8 flex">
          <img src={soc} alt="" className="w-[110px] mx-10" />
          <img src={acc} alt="" className="w-[110px] mx-10" />
          <img src={ibm} alt="" className="w-[110px] mx-10" />
          <img src={ebay} alt="" className="w-[110px]" />
        </div>
      </motion.div>

      <div className="flex flex-row items-center right-[20px] ">
        <div className="w-8 h-8 bg-[#80EBFF] opacity-90 absolute top-[209%] right-[112px] shadow-2xl"></div>
        <div className="w-8 h-8 bg-[#00ACCD] opacity-90 absolute top-[214%] right-[112px]"></div>
        <div className="w-8 h-8 bg-[#00ACCD] opacity-90 absolute top-[219%] right-[143px]"></div>
        <div className="w-8 h-8 bg-[#00ACCD] opacity-90 absolute top-[209%] right-[80px]"></div>
      </div>

      <div className="flex justify-center   bg-[#F0F7FE] w-[80vw]  ml-[10%] h-[160vh]  ">
        <div className="mb-12">
          <div className="text-[#6861FF] font-semibold mt-[6rem] ml-[16rem] ">
            FOR DEVELOPERS
          </div>
          <div className="text-[#1D1B84] text-5xl font-extrabold mt-[2rem] ml-[10rem]">
            Build apps fast.
          </div>
          <div className="text-[#566A96] mt-[3rem] leading-relaxed font-sans text-2xl">
            
            <span className="ml-[1.9rem]">
              Get your backend done in minutes instead of weeks.
            </span>
            <br />
            <span>
              
              Easily build customizable content API and use them with a
            </span>
            <br /> <span className="ml-[13rem] "> modern tech stack.</span>
          </div>
        </div>

        
       <Elements />


      </div>
    </div>
  );
};

export default Midcontent;
