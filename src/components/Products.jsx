import React from 'react';
import com from "../assets/community.svg";
import strapi from "../assets/strapi.jpg"
import { motion } from 'framer-motion';

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
            <ul className='pr-3'>
              <li>
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#e0e0e0] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={com} alt="" className='w-6' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Community Edition</span>
                      <p className='text-sm text-gray-400 '>The leading Open-Source <br /> Headless CMS</p>
                    </div>
                  </div>
                </div>
              </li>

              {/* Repeat the above <li> for other items as needed */}
              <li>
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#e0e0e0] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={com} alt="" className='w-6' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Community Edition</span>
                      <p className='text-sm text-gray-400 '>The leading Open-Source <br /> Headless CMS</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#e0e0e0] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={com} alt="" className='w-6' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Community Edition</span>
                      <p className='text-sm text-gray-400 '>The leading Open-Source <br /> Headless CMS</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#e0e0e0] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={com} alt="" className='w-6' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Community Edition</span>
                      <p className='text-sm text-gray-400 '>The leading Open-Source <br /> Headless CMS</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          </motion.div>

        {/* FEATURES */}
        <motion.div className='flex flex-col absolute left-[23rem] ' variants={fadeAnimation} initial="hidden" animate="visible">
        <div className='text-gray-400 text-sm '>FEATURES</div>
        <div className='flex-col '>
            <ul className='px-3'>
              <li>
                <div className='ml-1 mt-4 flex items-center py-2 px-3 hover:bg-[#e0e0e0] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={com} alt="" className='w-6' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Community Edition</span>
                      <p className='text-sm text-gray-400  '>The leading Open-Source <br /> Headless CMS</p>
                    </div>
                  </div>
                </div>
              </li>

              {/* Repeat the above <li> for other items as needed */}
              <li>
                <div className='ml-1 mt-4 flex items-center py-2 px-3 hover:bg-[#e0e0e0] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={com} alt="" className='w-6' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Community Edition</span>
                      <p className='text-sm text-gray-400 '>The leading Open-Source <br /> Headless CMS</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className='ml-1 mt-4 flex items-center py-2 px-3 hover:bg-[#e0e0e0] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={com} alt="" className='w-6' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Community Edition</span>
                      <p className='text-sm text-gray-400 '>The leading Open-Source <br /> Headless CMS</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className='ml-1 mt-4 flex items-center py-2 px-3 hover:bg-[#e0e0e0] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={com} alt="" className='w-6' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-sm hover:text-blue-500'>Community Edition</span>
                      <p className='text-sm text-gray-400 '>The leading Open-Source <br /> Headless CMS</p>
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
            <div className='py-4 w-[19rem] rounded-[9px] bg-[#32CBFF] text-white font-normal text-lg flex justify-center mt-5'>Try the Enterprise Edition</div>
          

    </div>
    </motion.div>
    </motion.div>
  </motion.div>

  );
};

export default Products;
