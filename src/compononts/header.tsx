import React from "react";
import { Cart } from "./cart";
import { NavLink } from "react-router-dom";
import { AlignJustify } from 'lucide-react';
import { useState,useEffect } from "react";
import { ShoppingCart } from 'lucide-react';
export const Header:React.FC<{}>=()=>{
const [width,setwidth]=useState<number>(window.screen.width)
const [menu,setmenu]=useState<boolean>(false)
useEffect(()=>{
  window.addEventListener('resize',()=>{
     const size=window.screen.width
     setwidth(size)

  })

},[width])
function handleclick(){
  setmenu(prev=>!prev)
}

if(width>=768){
return(
           <nav className="flex flex-row sticky top-0 bg-white z-[10000]  w-full  p-10  justify-between   items-center text-black text-[2.5px] sm:text-[3.5px]   lg:text-[4px] xl:flex-row xl:text-[4px] 2xl:text-[4.5px] h-[15px]   ">
             <NavLink className=" text-center  text-purple-900 font-bold w-[40%] sm:w-[25%]  text-[6em] md:w-[25%] lg:text-[6.5em]   xl:w-[15%] xl:text-[7em]  2xl:w-[20%]  " to={'/'}><h1  > Modex Store</h1></NavLink>
             <div className="flex flex-row items-center justify-evenly w-[60%] sm:w-[70%] text-[5em] text-black font-semibold md:w-[55%] md:text-[4em] lg:w-[55%] lg:text-[4em]  xl:w-[50%] xl:text-[5em] 2xl:w-[50%] ">
                <NavLink to={'/products'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 ":"cursor-pointer hover:text-purple-800"}> Shop</NavLink>
                <NavLink to={'/categories'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 ":"cursor-pointer hover:text-purple-800"}> categories</NavLink>
                <button className="cursor-pointer hover:text-purple-800  transition-all duration-200" > contact</button>
               <NavLink className={({isActive})=>isActive?"cursor-pointer text-purple-800 ":"cursor-pointer hover:text-purple-800"} to={'/locations'}> LOCATIONS</NavLink> 
               <Cart></Cart>
             </div>
             

            
            <div className="flex justify-around w-[20%] lg:w-[20%] xl:w-[15%] ">
                <button className=" border-2 buttonstyle w-[5em] cursor-pointer text-[4em]  lg:text-[4em] xl:text-[4.5em] ">log in</button>
             <button className=" border-2 buttonstyle w-[5em] cursor-pointer text-[4em] lg:text-[4em] xl:text-[4.5em]">sign up</button>
            </div>
            

            
          
             
           </nav>
    )
}
else {
  return(
<nav className="flex flex-row sticky top-0 bg-white z-[10000]  w-full  p-6  justify-between   items-center text-black text-[2.5px] sm:text-[3.5px]   lg:text-[4px] xl:flex-row xl:text-[4px] 2xl:text-[4.5px] h-[15px]   ">
             <div className="flex flex-row w-[40%] items-center gap-[7%]">
               <AlignJustify color="#59168b" onClick={handleclick}></AlignJustify>
             <NavLink className=" text-center  text-purple-900 font-bold text-[5em]    " to={'/'}><h1  > Modex Store</h1></NavLink>
             </div>
             
            {menu?<div className="flex flex-col absolute left-0 top-10 h-[900px] w-[25%] items-center justify-start bg-white z-[10000]  ">
                  <div className="flex flex-col items-center justify-end h-[300px] gap-[50px] text-purple-800 text-[5em] ">
                        <NavLink to={'/products'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> Shop</NavLink>
                <NavLink to={'/categories'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> categories</NavLink>
                <button className="cursor-pointer hover:text-purple-800  transition-all duration-200 " > contact</button>
               <NavLink className={({isActive})=>isActive?"cursor-pointer underline":"cursor-pointer hover:text-purple-800 "} to={'/locations'}> LOCATIONS</NavLink> 
          

                  </div>
                
            </div>: ''}
             {/* <div className="flex flex-row items-center justify-evenly w-[60%] sm:w-[70%] text-[5em] text-black font-semibold md:w-[55%] md:text-[4em] lg:w-[55%] lg:text-[4em]  xl:w-[50%] xl:text-[5em] 2xl:w-[50%] ">
              
             </div> */}
             
            <div className=" flex flex-row items-center text-[4.2em] w-[15%] gap-[5px] text-purple-800">
                <ShoppingCart size={'0.9em'}></ShoppingCart>
              <Cart ></Cart>
            </div>
            
            <div className="flex flex-row justify-around w-[35%]  ">
              
                <button className=" border-2 buttonstyle w-[5.5em] cursor-pointer text-[4.5em]  ">log in</button>
             <button className=" border-2 buttonstyle w-[5.5em] cursor-pointer text-[4.5em] ">sign up</button>
            </div>
            

            
          
             
           </nav>

  )
}
    
}