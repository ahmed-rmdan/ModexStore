import React from "react";
import { Cart } from "./cart";

export const Header:React.FC<{}>=()=>{
    return(
           <nav className="flex flex-col  w-full p-10  justify-between gap-[20px] text-[3.5px] items-center text-black md:text-[3.5px]  lg:gap-[40px] lg:text-[6px] xl:flex-row xl:text-[4px] 2xl:text-[4.5px]   ">
             <h1 className="text-[7em] text-center  font-bold w-[40%] 2xl:w-[20%] " > Clothes Shop</h1>
             <div className="flex flex-row items-center justify-evenly w-[70%] text-[5em] text-black font-semibold md:w-[80%] lg:w-[90%] 2xl:w-[40%] ">
                <button className="cursor-pointer hover:text-purple-800 hover:text-[110%] transition-all duration-200"> Shop</button>
                <button className="cursor-pointer hover:text-purple-800 hover:text-[110%] transition-all duration-200"> categories</button>
                <button className="cursor-pointer hover:text-purple-800 hover:text-[110%] transition-all duration-200"> contact</button>
                <button className="cursor-pointer hover:text-purple-800 hover:text-[110%] transition-all duration-200"> LOCATIONS</button>
               <Cart></Cart>
             </div>
             <form className="flex flex-row justify-between w-[85%] md:w-[75%] lg:w-[100%] xl:w-[90%] 2xl:w-[35%] ">

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