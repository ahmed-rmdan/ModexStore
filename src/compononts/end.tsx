
import React from "react";
import { NavLink } from "react-router-dom";
export const End:React.FC<{}>=()=>{
    return(<>
    <section className="flex flex-row items-center justify-around w-full h-[55px] md:h-[80px] bg-purple-800 text-white text-[0.65em] md:text-[1em] xl:text-[1.2em]  ">
         <NavLink to='/aboutus'>About Us</NavLink>
         <NavLink to='/terms'>Term&Conditions</NavLink>
         <NavLink to={'/contact'} className=" cursor-pointer">Contact Us</NavLink>
   
    </section>



     <section className="flex flex-row items-center justify-around bg-black h-[40px] text-[8px] sm:text-[16px] text-white">
                  <p>ahmed-rmdan@2025</p>
                  <p>this project made by me from scratch for training purpose</p>
                  
         </section>
    </>
        


    )
}