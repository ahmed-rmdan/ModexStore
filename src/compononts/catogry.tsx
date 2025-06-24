import React from "react";
import { Listitem } from "./listitem";
import { PAGES } from "./pages";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
const Catagories=['T-shirts','Shirts','Jeans' ,'Jackets','Shoes','Socks']

export const Catogry:React.FC<{}>=()=>{
    const catogry=useParams()
    return(
            <section className="w-[100%] flex flex-row text-[8px] md:text-[10px] lg:text-[13px] xl:text-[16px] ">
                      
                      <div className="flex flex-col w-[20%] bg-gray-300 h-[1000px] items-center gap-[60px]">
                                <h1 className="text-purple-800 text-[2.25em] underline font-bold mt-[30px]"> Catagories</h1>
                                <div className="flex flex-col gap-[45px]">
                                    {Catagories.map(elm=>{
                                          return  <NavLink to={`/categories/${elm}`} className={({isActive})=>isActive?" text-purple-800 text-[1.5em] cursor-pointer underline":" text-purple-800 text-[1.5em] cursor-pointer hover:underline"}>{elm}</NavLink>
                                    })}                                    
                                       
                                </div>  
                      </div>
                       <div className="flex flex-col w-[70%] items-center gap-[30px]">
                        <h1 className=" flex underline text-purple-800 text-[3.5em] justify-center items-center ">{catogry.catogry}</h1>
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