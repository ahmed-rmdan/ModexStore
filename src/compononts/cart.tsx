
import React, { useState } from "react";

import { Listitem } from "./listitem";
import { useAppSelector} from "../store/hook";
import {motion} from 'framer-motion'
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { cartactions } from "../store/store";
import { useAppDispatch } from "../store/hook";

export const Cart:React.FC= ()=> {
 const crtitems=useAppSelector((state)=>state.cart.items)
  const navigate=useNavigate()
   const dispatch=useAppDispatch()
  const [isOpen, setIsOpen] = useState(false);
 const itemslength=crtitems.length
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function handlepurchase(){
     dispatch(cartactions.purchase())
     navigate('/purchase')

  }
  

  return (
  <div  className="relative">
        <button className="cursor-pointer hover:text-purple-800  transition-all duration-200 " onClick={toggleDropdown}>
                 cart {itemslength}
        </button>
 
 {isOpen && ( 
   <AnimatePresence mode='popLayout'>
      {itemslength===0?
      <motion.div  initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}} animate={{opacity:100}}
      className=" flex flex-col z-[1000] absolute items-center justify-around h-[50px] sm:h-[80px] min-w-[10em] max-w-[10em] bg-gray-100 left-[-250%] sm:left-[-125%] ">
         <motion.p className="text-purple-700 text-[0.8em] sm:text-[1em] ">No Products </motion.p>
         <button className="border-2 buttonstyle w-[5em] cursor-pointer text-[0.8em]" onClick={toggleDropdown}>Close</button>
      </motion.div>       
       :
       <motion.ul  key={'list'} className='bg-gray-100 overflow-auto max-h-[600px] left-[-250%] sm:left-[-125%]  min-w-[10em] max-w-[10em] z-[1000] ' 
        initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}} animate={{opacity:100}}   style={{
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
                            <AnimatePresence>
                                          { crtitems.map(elm=>{
                                           return <Listitem moreinfo="" listtype='cart' oldprice={elm.price}  key={elm.id} type="cart" price={elm.price} id={elm.id} imgeurl={elm.imgeurl} name={elm.name} quantity={elm.quantity}></Listitem>
                                              
                                               }
                                                  
                                            )}
                                                  
                            </AnimatePresence>                    
    
          <div className="flex flex-row justify-around w-[100%] items-center h-[1.5em] ">
                <button  className="border-2 buttonstyle w-[5em] cursor-pointer text-[0.8em] text-center" onClick={handlepurchase}>Purchase</button>
                <button className="border-2 buttonstyle w-[5em] cursor-pointer text-[0.8em]" onClick={toggleDropdown}>Close</button>

          </div>
                     
      </motion.ul>}
      </AnimatePresence>
    )}


   
  </div>
);
}