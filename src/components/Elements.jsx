import React from "react"
import { motion } from "framer-motion";
import coding from "../assets/coding.svg";
import Lordicon from 'react-lordicon';




const Elements = () => {



    
    return (
        <div>


<div className="  top-[290%] left-[14rem] justify-between absolute h-[60vh] ">
            

            <div className="flex flex-row ">

<div className="flex flex-col  ml-[6rem]">
<div>
            <img src={coding} alt="" className="w-9 mr-7 absolute ml-[-37px]
            " />
            <div className="flex flex-col">
              <span className="text-2xl text-[#1D1B84] ml-[1rem] font-semibold">
                Open Source
              </span>

              <span className="mt-[1rem] ml-[1rem] leading leading-relaxed font-sans text-lg  text-[#344B90]">
                Forever. The entire codebase is <br />
                available on GitHub and <br />
                maintained by hundreds of <br />
                contributors.
              </span>
            </div>
            </div>


            
<div className="mt-[5rem]">
            <img src={coding} alt="" className="w-9 mr-7  absolute ml-[-37px]  " />
            <div className="flex flex-col">
              <span className="text-2xl text-[#1D1B84] ml-[1rem]  font-semibold">
              RESTful or GraphQL
              </span>

              <span className="mt-[1rem] ml-[1rem] leading leading-relaxed font-sans text-lg  text-[#344B90]">
              Consume the API from any client <br />
(React, Vue, Angular), mobile apps <br />
or even IoT devices, using REST or <br />
GraphQL.
              </span>
            </div>
            </div>






          </div>


          <div className="flex flex-col  ml-[6rem]">

<div className="">
            <img src={coding} alt="" className="w-9 mr-7 ml-[-2rem] absolute " />
            <div className="flex flex-col">
              <span className="text-2xl text-[#1D1B84] ml-[1rem] font-semibold ">
              Customizable
              </span>

              <span className="mt-[1rem] ml-[1rem] leading leading-relaxed font-sans text-lg  text-[#344B90]">
              Easily customize the admin panel <br />
              as well as the API. Extend your <br />
              content management with <br />
              custom plugins, in seconds. 
              </span>
            </div>
            </div>


            <div className="mt-[4rem]">
            <img src={coding} alt="" className="w-9 mr-7 ml-[-2rem] absolute " />
            <div className="flex flex-col">
              <span className="text-2xl text-[#1D1B84] ml-[1rem] font-semibold ">
              Self-hosted or Cloud
              </span>

              <span className="mt-[1rem] ml-[1rem] leading leading-relaxed font-sans text-lg  text-[#344B90]">
              Extend the capabilities of Strapi <br />
    with Strapi Cloud, our fully <br />
    managed platform or deploy <br />
    on-premises, on your favorite <br />
    public cloud or the PaaS of your <br />
    choice. You’re in control, no <br />
    lock-in.
              </span>
            </div>
            </div>





            </div>


         


        </div>

        </div>

        </div>
    )
}

export default Elements