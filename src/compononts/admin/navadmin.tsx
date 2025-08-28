import React from "react";




export const Headeradmin:React.FC<{}>=()=>{



return(
           <nav className="flex flex-row sticky bg-white z-[10000]  w-full  p-3  sm:p-10 justify-around items-center text-center text-black text-[2px] sm:text-[4px]   lg:text-[4.5px] xl:text-[5.5px] 2xl:text-[6px] h-[40px]   ">
            <h1 className=" text-start  text-purple-900 font-bold w-[35%]   text-[7em]     "  > Modex Store</h1>
             <p className="  text-start  w-[50%]  text-[5.8em]  font-bold      text-purple-800     ">
               Admin Dshboard
             
             </p>
             
             
           </nav>
    )
}

    
