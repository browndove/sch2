import React from 'react';
import strapi from "../assets/strapi.jpg"
import { motion } from 'framer-motion';
import cloud from "../assets/cloud.svg"
import coding from "../assets/coding.svg"
import content from "../assets/content.svg"
import teams from "../assets/user.svg"
import come from "../assets/ecommerce.svg"
import corp from "../assets/corporate.svg"
import app from "../assets/app.svg"
import study from "../assets/book.svg"

const Products = () => {

    const fadeAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
      };



  return (
    <motion.div className=''>
    <motion.div className='flex flex-row justify-between items-center'>
      <motion.div className='flex flex-col ' variants={fadeAnimation} initial="hidden" animate="visible">
          <div className='text-gray-400 text-sm'>Terms</div>
          <div className='flex-col'>
            <ul className='pr-3 cursor-pointer'>
              <li >
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center '>
                    <img src={coding} alt="" className='w-7' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Developers</span>
                      <p className='text-sm text-gray-400 hover:text-white '>The leading Open-Source <br /> Headless CMS</p>
                    </div>
                  </div>
                </div>
              </li>

              {/* Repeat the above <li> for other items as needed */}
              <li>
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={content} alt="" className='w-7' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Content Mangers</span>
                      <p className='text-sm text-gray-400 hover:text-white'>A self-hosted  <br />and Enterprise-ready Edition</p>
                    </div>
                  </div>
                </div>

              </li>

              <li>
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={teams} alt="" className='w-7' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Business Teams</span>
                      <p className='text-sm text-gray-400 hover:text-white'>A Marketplace of plugins to  <br /> add features or integrations.</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={cloud} alt="" className='w-9' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Cloud</span>
                      <p className='text-sm text-gray-400 hover:text-white'>A fully managed platform for <br />your Strapi apps </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          </motion.div>

        {/* FEATURES */}
        <motion.div className='flex flex-col absolute mt-[-80px] left-[23rem] ' variants={fadeAnimation} initial="hidden" animate="visible">
        <div className='text-gray-400 text-sm '>USE CASES</div>
        <div className='flex-col '>
            <ul className='px-3'>
              <li>
                <div className='ml-1 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={come} alt="" className='w-8' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Ecommerce</span>
                      <p className='text-sm text-gray-400 hover:text-white '>Level up your eCommerce <br/> experiences</p>
                    </div>
                  </div>
                </div>
              </li>

              {/* Repeat the above <li> for other items as needed */}
              <li>
                <div className='ml-1 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={corp} alt="" className='w-8' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Corporate Site</span>
                      <p className='text-sm text-gray-400 hover:text-white'>Manage your brand narrative</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className='ml-1 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={app} alt="" className='w-8' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Mobile applications</span>
                      <p className='text-sm text-gray-400 hover:text-white'>One CMS, any devices</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className='ml-1 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={study} alt="" className='w-8' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Case studies</span>
                      <p className='text-sm text-gray-400 hover:text-white'>Discover who uses Strapi</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          </motion.div>
        

        {/* ENTERPRISE EDITION */}
        <motion.div className='flex flex-col' variants={fadeAnimation} initial="hidden" animate="visible">
          
          <div className='text-gray-400 text-sm absolute top-[13px] left-[70%]  mt-1'>INDUSTRIES</div>
          <div className=' absolute top-[4.5rem] left-[67%] '>
            <img src={strapi} alt="" className='w-[19rem] h-[12rem] rounded-md'/>
            <div className='py-4 w-[19rem] rounded-[9px] bg-[#32CBFF] text-white font-normal text-lg flex justify-center mt-8'>Try the Enterprise Edition</div>
          

    </div>
    </motion.div>
    </motion.div>
  </motion.div>

  );
};

export default Products;
