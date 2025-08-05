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
                <NavLink to={'/categories'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 ":"cursor-pointer hover:text-purple-800"}> Categories</NavLink>
                 <NavLink className={({isActive})=>isActive?"cursor-pointer text-purple-800  ":"cursor-pointer hover:text-purple-800 "}  to={'/contact'}> Contact</NavLink>
               <NavLink className={({isActive})=>isActive?"cursor-pointer text-purple-800 ":"cursor-pointer hover:text-purple-800"} to={'/locations'}> Locations</NavLink> 
                   <div className=" flex flex-row items-center text-[1em]  gap-[5px] hover:text-purple-800">
                <ShoppingCart size={'0.9em'}></ShoppingCart>
              <Cart ></Cart>
            </div>
             </div>
             

            
            <div className="flex items-center justify-evenly w-[22%] lg:w-[22%] xl:w-[20%]  ">

                <NavLink to='/signin' className=" border-2 buttonstyle w-[5em] xl:w-[5.5em] cursor-pointer text-[4em] text-center  lg:text-[4em] xl:text-[4.5em] ">log in</NavLink>
             <NavLink to='/signup' className=" border-2 buttonstyle w-[5em] xl:w-[5.5em] cursor-pointer text-[4em] lg:text-[4em] xl:text-[4.5em] text-center">sign up</NavLink>
                       
                       {/* <button className=" text-purple-800 w-[5em] cursor-pointer text-[3em]  lg:text-[3.5em] xl:text-[4.5em] hover:underline  hover:text-purple-900 ">Wishlist</button>
             <button className="  text-purple-800  w-[5em] cursor-pointer text-[3em] lg:text-[3.5em] xl:text-[4.5em] hover:underline  hover:text-purple-900">My Orders</button> 
             <button className="  text-red-500  w-[5em] cursor-pointer text-[3em] lg:text-[3.5em] xl:text-[4.5em] hover:underline">LogOut</button>       */}
           

            </div>
            

            
          
             
           </nav>
    )
}
else {
  return(
<nav className="flex flex-row sticky top-0 bg-white z-[10000]  w-full  p-6  justify-between   items-center text-black text-[2.5px] sm:text-[3.5px]   lg:text-[4px] xl:flex-row xl:text-[4px] 2xl:text-[4.5px] h-[15px]   ">
             <div className="flex flex-row w-[60%] items-center gap-[7%]">
               <AlignJustify color="#59168b" onClick={handleclick}></AlignJustify>
             <NavLink className=" text-center  text-purple-900 font-bold text-[5.5em]    " to={'/'}><h1  > Modex Store</h1></NavLink>
             </div>
             
            {menu?<div className="flex flex-col absolute left-0 top-10 gap-[30px] h-[900px] w-[25%] items-center justify-start bg-white z-[10000]  ">
                  <div className="flex flex-col items-center justify-end h-[300px] gap-[50px] text-[4.5em] ">
                        <NavLink to={'/products'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> Shop</NavLink>
                <NavLink to={'/categories'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> Categories</NavLink>
                <NavLink className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}  to={'/contact'}> Contact</NavLink>
               <NavLink className={({isActive})=>isActive?"cursor-pointer underline  text-purple-800":"cursor-pointer hover:text-purple-800 "} to={'/locations'}> Locations</NavLink> 
                  </div>
                  <div className="flex flex-col h-[150px] w-[80%] border-t-1 gap-[20px] items-center justify-center ">
                           <NavLink to='/signin' className=" border-2  buttonstyle  text-center w-[5.5em] cursor-pointer text-[4.5em]  ">log in</NavLink>
             <NavLink to='/signup' className=" border-2 buttonstyle w-[5.5em] cursor-pointer text-[4.5em] text-center ">sign up</NavLink>

                                {/* <button className="  w-[5em] cursor-pointer text-[4.5em]  hover:underline  hover:text-purple-900 ">Wishlist</button>
             <button className="    w-[5em] cursor-pointer text-[4.5em]  hover:underline  hover:text-purple-900">My Orders</button> 
             <button className="  text-red-500  w-[5em] cursor-pointer text-[4.5em]  hover:underline">LogOut</button>   */}
                         

                  </div>



                
            </div>: ''}
     
             
            <div className=" flex flex-row justify-end items-center text-[6.9em]  w-[35%] gap-[5px] text-purple-800">
                <ShoppingCart size={'0.9em'}></ShoppingCart>
              <Cart ></Cart>
            </div>
            
            
            

            
          
             
           </nav>

  )
}
    
}