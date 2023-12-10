import React from 'react'
import { BsCopy } from "react-icons/bs";

const Midcontent = () => {
  return (
    <div className='mt-4'>
      
<div className='flex justify-center'>
    <div className='px-2 py-[2px] ml-[-8px] w-[60px] text-white bg-purple-600 flex justify-center rounded-[7px] cursor-default font-semibold'>
        CLOUD
    </div>
    <div>
        <span className='ml-7 text-gray-700 cursor-pointer'>Try Strapi Cloud for 14 days Deploy your app!</span>
    </div>
</div>

<div className='flex flex-col ml-[28%] mt-[50px] font-extrabold text-6xl '>
Manage Any Content. 
<span className='ml-[139px]'>Anywhere.</span>
</div>


<div className='flex justify-center mt-[36px] text-gray-400 font-semibold'>
<div className='flex flex-col justify-center'>
    
<span className='ml-[40px]'>The leading open-source headless CMS.</span>

100% JavaScript / TypeScript and fully customizable.
</div>
</div>


<div className='flex  justify-center mt-10'>


<div className=' items-center text-white max-w-[30rem] w-full py-3 backdrop-blur-lg bg-opacity-70 border border-gray-500 border-opacity-60 bg-[#858cf7] rounded-[10px] px-4 '>
    <div className='flex flex-row justify-between items-center font-semibold text-sm'>
    npx create-strapi-app@latest my-project
    <BsCopy />
    </div>
    </div>

          
</div>

    </div>
  )
}

export default Midcontent
