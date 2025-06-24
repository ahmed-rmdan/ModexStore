import React from "react";
import { Cart } from "./cart";
import { NavLink } from "react-router-dom";
export const Header:React.FC<{}>=()=>{


    return(
           <nav className="flex flex-col  w-full p-10  justify-between gap-[20px]  items-center text-black text-[2.5px] sm:text-[3.5px]  lg:gap-[40px] lg:text-[6px] xl:flex-row xl:text-[4px] 2xl:text-[4.5px]   ">
             <NavLink className=" text-center  font-bold w-[40%] sm:w-[25%]  text-[6em] xl:w-[15%]  2xl:w-[20%] 2xl:text-[7em] " to={'/'}><h1  > Clothes Shop</h1></NavLink>
             <div className="flex flex-row items-center justify-evenly w-[100%] sm:w-[70%] text-[5em] text-black font-semibold md:w-[80%] lg:w-[90%] xl:w-[40%] 2xl:w-[40%] ">
                <NavLink to={'/products'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 ":"cursor-pointer hover:text-purple-800"}> Shop</NavLink>
                <NavLink to={'/categories'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 ":"cursor-pointer hover:text-purple-800"}> categories</NavLink>
                <button className="cursor-pointer hover:text-purple-800  transition-all duration-200" > contact</button>
               <NavLink className={({isActive})=>isActive?"cursor-pointer text-purple-800 ":"cursor-pointer hover:text-purple-800"} to={'/locations'}> LOCATIONS</NavLink> 
               <Cart></Cart>
             </div>
             <form className="flex flex-row justify-between   sm:w-[85%] md:w-[75%] lg:w-[100%] xl:w-[45%] 2xl:w-[40%] ">

              <div className="flex flex-row gap-2.5 items-center ">  
                <p className="text-[4em] ">user</p>
                <input type="text" className="w-[10em] border-black border-2 text-[3.5em] focus:outline-none focus:border-purple-800 focus:border-2  "></input>
             </div>
             <div className="flex flex-row gap-2.5 items-center ">
                   <p className='text-[4em] '>password</p>
                <input type="password" className="w-[10em] border-black border-2 focus:outline-none focus:border-purple-800 focus:border-2  text-[3.5em]"></input>
             
             </div>
             <button className=" border-2 buttonstyle w-[5em] cursor-pointer text-[4.5em]  ">log in</button>
             <button className=" border-2 buttonstyle w-[5em] cursor-pointer text-[4.5em]  ">sign up</button>

             </form>
          
             
           </nav>
    )
}