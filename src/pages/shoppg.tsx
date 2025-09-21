import React from "react";

import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Catagories=['t-shirts','shirts','jeans' ,'jackets','shoes','socks']

export const Shoppg:React.FC<{}>=()=>{
    return(
            <section className="w-[100%] flex flex-row h-[900px] sm:h-[1100px] items-center  bg-gray-200 text-[8px] sm:text-[11px] lg:text-[13px] xl:text-[16px] ">
                      
            <div className="flex flex-col mt-[-105px]  sm:mt-[0px] ml-[1px] sm:ml-[10px] lg:ml-[30px]  rounded-4xl w-[30%]  sm:w-[25%] lg:w-[20%] h-[60%] 
             lg:h-[77%] bg-white  items-center gap-[60px] sm:gap-[70px] lg:gap-[60px]">
           <h1 className="text-purple-800 text-[1.9em] sm:text-[2em] underline font-bold mt-[20px] sm:mt-[30px]"> Categories</h1>
                            <div className="flex flex-col items-center gap-[60px] lg:gap-[80px]">
                               {Catagories.map(elm=>{
                                          return  <NavLink to={`/products/${elm}`} 
                            className={({isActive})=>isActive?" text-purple-800 text-[1.5em] cursor-pointer underline":" text-purple-800 text-[1.5em] cursor-pointer hover:underline hover:scale-[1.1]"}>
                                {elm}</NavLink>
                                    })}                                                     
                                       
                                </div>  
                      </div>
                       <div className="flex flex-col w-[70%] sm:w-[75%] lg:w-[70%] h-full items-center gap-[2%] sm:gap-[30px]">
                       
                              <Outlet></Outlet>
                       </div>


            </section>




    )
}