import React from "react";
import { Listitem } from "./listitem";
import { PAGES } from "./pages";
const Catagories=['T-shirts','Shirts','Jeans' ,'Jackets','Shoes','Socks']

export const Producs:React.FC<{}>=()=>{
    return(
            <section className="w-[100%] flex flex-row text-[8px] md:text-[10px] lg:text-[13px] xl:text-[16px] ">
                      
                      <div className="flex flex-col w-[20%] bg-gray-300 h-[1000px] items-center gap-[60px]">
                                <h1 className="text-purple-800 text-[2.25em] underline font-bold mt-[30px]"> Catagories</h1>
                                <div className="flex flex-col gap-[45px]">
                                    {Catagories.map(elm=>{
                                          return  <button className=" text-purple-800 text-[1.5em] cursor-pointer hover:underline">{elm}</button>
                                    })}                                    
                                       
                                </div>  
                      </div>
                       <div className="flex flex-col w-[70%] items-center gap-[30px]">
                        <h1 className=" flex underline text-purple-800 text-[3.5em] justify-center items-center ">Products</h1>
                             <ul className="flex flex-col w-[70%] justify-around gap-[20px] items-center">  
                                   <Listitem type="products" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                   <Listitem type="products" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                   <Listitem type="products" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                   <Listitem type="products" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                   <Listitem type="products" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                   
                             </ul>
                             <PAGES></PAGES>
                       </div>


            </section>




    )
}