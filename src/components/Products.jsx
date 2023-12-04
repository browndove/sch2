import React from 'react'
import com from "../assets/community.svg"

const Products = () => {
  return (
    <div>

        <div className='flex flex-row justify-between items-center'>
      
      {/* products */}
      <div className='flex flex-col'>
<div className='text-gray-400 text-sm'>PRODUCT</div>
<div className='flex-col'>
    <ul>
        <li>
            <div className='ml-7 mt-10 flex-row items-center'>
            <img src={com} alt="" className='w-8'/>
            </div>
        </li>
    </ul>
</div>
</div>

    {/* FEATURES */}
    <div className='text-gray-400 text-sm'>PRODUCT</div>

    {/* ENTERPRISE EDITION */}
    <div className='text-gray-400 text-sm'>PRODUCT</div>


    </div>

    </div>
  )
}

export default Products
