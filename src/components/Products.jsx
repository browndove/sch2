import React from 'react';
import com from "../assets/community.svg";
import strapi from "../assets/strapi.jpg"
import { motion } from 'framer-motion';
import enter from "../assets/enterprise.svg"
import shopping from "../assets/shopping.svg"
import cloud from "../assets/cloud.svg"
import hosting from "../assets/hosting.svg"
import headset from "../assets/headset.svg"
import css from "../assets/css.svg"
import international from "../assets/international.svg"

const Products = () => {

    const fadeAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
      };



  return (
    <motion.div className=''>
    <motion.div className='flex flex-row justify-between items-center'>
      <motion.div className='flex flex-col ' variants={fadeAnimation} initial="hidden" animate="visible">
          <div className='text-gray-400 text-sm'>PRODUCT</div>
          <div className='flex-col'>
            <ul className='pr-3 cursor-pointer'>
              <li >
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center '>
                    <img src={com} alt="" className='w-7' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Community Edition</span>
                      <p className='text-sm text-gray-400 hover:text-white '>The leading Open-Source <br /> Headless CMS</p>
                    </div>
                  </div>
                </div>
              </li>

              {/* Repeat the above <li> for other items as needed */}
              <li>
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={enter} alt="" className='w-7' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Enterprise Edition</span>
                      <p className='text-sm text-gray-400 hover:text-white'>A self-hosted  <br />and Enterprise-ready Edition</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={shopping} alt="" className='w-7' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Marketplace</span>
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
        <motion.div className='flex flex-col absolute mt-[-30px] left-[23rem] ' variants={fadeAnimation} initial="hidden" animate="visible">
        <div className='text-gray-400 text-sm '>FEATURES</div>
        <div className='flex-col '>
            <ul className='px-3'>
              <li>
                <div className='ml-1 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={hosting} alt="" className='w-8' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Content Types Builder</span>
                      <p className='text-sm text-gray-400 hover:text-white '>Structured yet flexible content</p>
                    </div>
                  </div>
                </div>
              </li>

              {/* Repeat the above <li> for other items as needed */}
              <li>
                <div className='ml-1 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={headset} alt="" className='w-8' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Media Library</span>
                      <p className='text-sm text-gray-400 hover:text-white'>Advanced Media Management</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className='ml-1 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={css} alt="" className='w-8' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Roles & Permissions</span>
                      <p className='text-sm text-gray-400 hover:text-white'>Granular access controls</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className='ml-1 mt-4 flex items-center py-2 px-3 hover:bg-[#32CBFF] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={international} alt="" className='w-8' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Internationalization</span>
                      <p className='text-sm text-gray-400 hover:text-white'>Powerful Multilingual websites</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          </motion.div>
        

        {/* ENTERPRISE EDITION */}
        <motion.div className='flex flex-col' variants={fadeAnimation} initial="hidden" animate="visible">
          
          <div className='text-gray-400 text-sm absolute top-[13px] left-[70%]  mt-1'>ENTERPRISE EDITION</div>
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
