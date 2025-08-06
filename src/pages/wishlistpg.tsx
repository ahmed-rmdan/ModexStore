import React from "react";

import { Listitem } from "../compononts/listitem";
import { PAGES } from "../compononts/pages";


export const Wishlist:React.FC<{}>=()=>{
    return(
            <section className="w-[100%] flex flex-col gap-[2%] h-[800px] sm:-h-[700px] lg:h-[1100px] items-center  bg-gray-200 text-[8px] md:text-[10px] lg:text-[13px] xl:text-[13px]  2xl:text-[15px] ">
                      
                      
                                <h1 className="text-purple-800 text-[2.5em] underline font-bold mt-[30px]"> My Wishlist</h1>
                              

                    
                       <div className="flex flex-row flex-wrap justify-around h-[80%] sm:h-[70%] xl:h-[80%] md:w-[95%] lg:w-[85%] xl:w-[80%]  items-center  ">
                                    <Listitem type="wishlist" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                    <Listitem type="wishlist" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                    <Listitem type="wishlist" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                    <Listitem type="wishlist" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                     <Listitem type="wishlist" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                      <Listitem type="wishlist" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                       
                       </div>

                       <PAGES></PAGES>                        

            </section>




    )
}