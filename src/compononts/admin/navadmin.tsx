import React from "react";

import { NavLink } from "react-router-dom";


export const Headeradmin:React.FC<{}>=()=>{



return(
           <nav className="flex flex-row sticky bg-white z-[10000]  w-full  p-3  sm:p-10 justify-around items-center text-center text-black text-[2px] sm:text-[4px]   lg:text-[4.5px] xl:text-[5.5px] 2xl:text-[6px] h-[40px]   ">
             <NavLink className=" text-start  text-purple-900 font-bold w-[35%]   text-[7em]     " to={'/admin'}><h1  > Modex Store</h1></NavLink>
             <p className="  text-start  w-[50%]  text-[5.8em]  font-bold      text-purple-800     ">
               Admin Dshboard
             
             </p>
             
             
           </nav>
    )
}

    
