import React from "react";
import { Listitem } from "./listitem";
import { PAGES } from "./pages";

import { useParams } from "react-router-dom";


export const Cateogry:React.FC<{}>=()=>{
    const cateogry=useParams()
    return(
                    <>
                    
                        <h1 className=" flex underline text-purple-800 text-[3.5em] justify-center items-center ">{cateogry.category}</h1>
                             <ul className="flex flex-col w-[85%] sm:w-[70%] justify-around gap-[20px] items-center">  
                                   <Listitem type="products" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                   <Listitem type="products" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                   <Listitem type="products" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                   <Listitem type="products" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                   <Listitem type="products" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                   
                             </ul>
                             <PAGES></PAGES>
                    
                    </>
                     
                      


        




    )
}