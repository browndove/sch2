import React from 'react';
import com from "../assets/community.svg";

const Products = () => {
  return (
    <div className=''>

      <div className='flex flex-row justify-between items-center'>

        {/* products */}
        <div className='flex flex-col'>
          <div className='text-gray-400 text-xs'>PRODUCT</div>
          <div className='flex-col'>
            <ul>
              <li>
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#e0e0e0] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={com} alt="" className='w-6' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-xs hover:text-blue-500'>Community Edition</span>
                      <p className='text-xs text-gray-400 font-light leading-snug'>The leading Open-Source <br /> Headless CMS</p>
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
                      <span className='text-xs hover:text-blue-500'>Community Edition</span>
                      <p className='text-xs text-gray-400 font-light leading-snug'>The leading Open-Source <br /> Headless CMS</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#e0e0e0] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={com} alt="" className='w-6' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-xs hover:text-blue-500'>Community Edition</span>
                      <p className='text-xs text-gray-400 font-light leading-snug'>The leading Open-Source <br /> Headless CMS</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className='ml-4 mt-4 flex items-center py-2 px-3 hover:bg-[#e0e0e0] rounded-md'>
                  <div className='flex flex-row items-center'>
                    <img src={com} alt="" className='w-6' />
                    <div className='flex flex-col ml-2'>
                      <span className='text-xs hover:text-blue-500'>Community Edition</span>
                      <p className='text-xs text-gray-400 font-light leading-snug'>The leading Open-Source <br /> Headless CMS</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* FEATURES */}
        <div className='text-gray-400 text-xs'>PRODUCT</div>

        {/* ENTERPRISE EDITION */}
        <div className='text-gray-400 text-xs'>PRODUCT</div>

      </div>

    </div>
  );
};

export default Products;
