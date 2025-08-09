import React from "react";
import { Listitem } from "../../compononts/listitem";

import { PAGES } from "../../compononts/pages";


export const Offersadminpg:React.FC<{}>=()=>{
   
    return(
            <div className=" flex flex-col items-center justify-around h-[670px] sm:h-[950px] w-full  bg-gray-200">

                           <h1 className=" flex underline text-purple-800 text-[12em] h-[5%] justify-center items-center font-bold ">Offers</h1>
                                                 
                                                <ul className="flex flex-col min-h-[75%] w-[85%] sm:w-[70%] justify-between  items-center">  
                                                      <Listitem type="offer" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                                      <Listitem type="offer" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                                      <Listitem type="offer" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                                      <Listitem type="offer" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                                     
                                                      
                                                </ul>
                                                <div className=" flex items-center justify-center text-[3.5em] h-[5%]">
                                                    <PAGES ></PAGES>
                             </div>
                                                
                     
            </div>
                
                      
    )
          
}