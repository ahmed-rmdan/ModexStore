
import React, { useState } from "react";

import { Listitem } from "./listitem";




export const Cart:React.FC= ()=> {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
// const empty=<p>no products yet</p>
  return (
  <div  className="relative">
        <button className="cursor-pointer hover:text-purple-800 hover:text-[110%] transition-all duration-200 " onClick={toggleDropdown}>
                 cart 0
        </button>

    {isOpen && (
      <ul className='bg-gray-100 left-[-125%] w-[10em] '   style={{
        position: "absolute",
        display: "flex",
        
        flexDirection: "column",
        alignItems: "center",
        top: "130%",
    
     
        listStyle: "none",
        margin: 0,
        padding: 0,
        zIndex: 100,
        gap:5
      }}>
        
         <Listitem type="cart" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
                  <Listitem type="cart" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
                           <Listitem type="cart" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
                                    <Listitem type="cart" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
           

           <div className="flex flex-row justify-around w-[100%] items-center h-[1.5em] ">
                <button className="border-2 buttonstyle w-[5em] cursor-pointer text-[0.8em]">Purchase</button>
                <button className="border-2 buttonstyle w-[5em] cursor-pointer text-[0.8em]" onClick={toggleDropdown}>Close</button>

          </div>
           
      </ul>
    )}
  </div>
);
}