import React from "react";

import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Catagories=['t-shirts','shirts','jeans' ,'jackets','shoes','socks']

export const Shoppg:React.FC<{}>=()=>{
    return(
            <section className="w-[100%] flex flex-row h-[1030px] sm:h-[1100px] items-center  bg-gray-200 text-[8px] md:text-[10px] lg:text-[13px] xl:text-[16px] ">
                      
                      <div className="flex flex-col ml-[20px] sm:ml-[50px] rounded-4xl w-[27%] sm:w-[20%] h-[85%] bg-white  items-center gap-[60px]">
                                <h1 className="text-purple-800 text-[2em] underline font-bold mt-[30px]"> Categories</h1>
                                <div className="flex flex-col items-center gap-[60px]">
                                    {Catagories.map(elm=>{
                                          return  <NavLink to={`/products/${elm}`} className={({isActive})=>isActive?" text-purple-800 text-[1.5em] cursor-pointer underline":" text-purple-800 text-[1.5em] cursor-pointer hover:underline"}>{elm}</NavLink>
                                    })}                                                     
                                       
                                </div>  
                      </div>
                       <div className="flex flex-col w-[70%] h-full items-center gap-[1%] sm:gap-[30px]">
                       
                              <Outlet></Outlet>
                       </div>


            </section>




    )
}