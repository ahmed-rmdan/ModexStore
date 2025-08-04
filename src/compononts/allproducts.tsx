import React from "react";
import { Listitem } from "./listitem";
import { PAGES } from "./pages";


export const Allproducts:React.FC<{}>=()=>{
    return(
           
                       <>
                            <h1 className=" flex underline text-purple-800 text-[3.5em] justify-center items-center ">All Products</h1>
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