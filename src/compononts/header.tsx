import React from "react";
import { Cart } from "./cart";
import { NavLink } from "react-router-dom";
export const Header:React.FC<{}>=()=>{


    return(
           <nav className="flex flex-row sticky top-0 bg-white  w-full  p-10  justify-between gap-[20px]  items-center text-black text-[2.5px] sm:text-[3.5px]   lg:text-[4px] xl:flex-row xl:text-[4px] 2xl:text-[4.5px] h-[15px]   ">
             <NavLink className=" text-center  text-purple-900 font-bold w-[40%] sm:w-[25%]  text-[6em] lg:text-[6.5em]   xl:w-[15%] xl:text-[7.5em]  2xl:w-[20%]  " to={'/'}><h1  > Modex Store</h1></NavLink>
             <div className="flex flex-row items-center justify-evenly w-[60%] sm:w-[70%] text-[5em] text-black font-semibold md:w-[80%] lg:w-[55%] lg:text-[4em]  xl:w-[50%] xl:text-[5em] 2xl:w-[50%] ">
                <NavLink to={'/products'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 ":"cursor-pointer hover:text-purple-800"}> Shop</NavLink>
                <NavLink to={'/categories'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 ":"cursor-pointer hover:text-purple-800"}> categories</NavLink>
                <button className="cursor-pointer hover:text-purple-800  transition-all duration-200" > contact</button>
               <NavLink className={({isActive})=>isActive?"cursor-pointer text-purple-800 ":"cursor-pointer hover:text-purple-800"} to={'/locations'}> LOCATIONS</NavLink> 
               <Cart></Cart>
             </div>
             

            
            <div className="flex justify-around w-[15%] lg:w-[20%] xl:w-[15%] ">
                <button className=" border-2 buttonstyle w-[5em] cursor-pointer text-[4.5em]  lg:text-[4em] xl:text-[4.5em] ">log in</button>
             <button className=" border-2 buttonstyle w-[5em] cursor-pointer text-[4.5em] lg:text-[4em] xl:text-[4.5em]">sign up</button>
            </div>
            

            
          
             
           </nav>
    )
}