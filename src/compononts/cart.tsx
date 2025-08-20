
import React, { useState } from "react";

import { Listitem } from "./listitem";
import { useAppSelector} from "../store/hook";
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion'
import { AnimatePresence } from "framer-motion";

export const Cart:React.FC= ()=> {
 const crtitems=useAppSelector((state)=>state.cart)
  

  const [isOpen, setIsOpen] = useState(false);
 const itemslength=crtitems.length
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
// const empty=<p>no products yet</p>
  return (
  <div  className="relative">
        <button className="cursor-pointer hover:text-purple-800  transition-all duration-200 " onClick={toggleDropdown}>
                 cart {itemslength}
        </button>
  <AnimatePresence >
 {isOpen && (
  
      <motion.ul  key={'list'} className='bg-gray-100 overflow-auto max-h-[600px] left-[-250%] sm:left-[-125%]  min-w-[10em] max-w-[10em] z-[1000] '  initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}} animate={{opacity:100}}   style={{
        position: "absolute",
        display: "flex",
        
        flexDirection: "column",
        alignItems: "center",
        top:'130%',
       
        listStyle: "none",
        margin: 0,
        padding: 0,
       
        gap:5
      }}>            
               {itemslength===0?<motion.p key={'text'} className="text-purple-700 text-[0.8em] sm:text-[1em]">No Products </motion.p>:
                                                                    
                            <AnimatePresence>
                                            { crtitems.map(elm=>{
                                             return <Listitem moreinfo="" listtype='cart' oldprice={elm.price}  key={elm.id} type="cart" price={elm.price} id={elm.id} imgeurl={elm.imgeurl} name={elm.name} quantity={elm.quantity}></Listitem>
                                              
                                                  }
                                                  
                                                  )}
                                                  
                            </AnimatePresence>

                }
                           
    
           {itemslength==0? <button className="border-2 buttonstyle w-[5em] cursor-pointer text-[0.8em]" onClick={toggleDropdown}>Close</button>:<div className="flex flex-row justify-around w-[100%] items-center h-[1.5em] ">
                <NavLink to={'/purchase'} className="border-2 buttonstyle w-[5em] cursor-pointer text-[0.8em] text-center">Purchase</NavLink>
                <button className="border-2 buttonstyle w-[5em] cursor-pointer text-[0.8em]" onClick={toggleDropdown}>Close</button>

          </div>}
           
      </motion.ul>
      
    )}

</AnimatePresence>
   
  </div>
);
}