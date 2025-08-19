import React from "react";
import { Listitem } from "../../compononts/listitem";
import { useQuery } from "@tanstack/react-query";
import { getadminproducts } from "../../https/https";
import { PAGES } from "../../compononts/pages";


export const Offersadminpg:React.FC<{}>=()=>{
        const {data}=useQuery({
        queryKey:['products', 'offers'],
        queryFn:({signal})=>getadminproducts(signal,'offers'),
        staleTime:600000            
    })
   
    return(
            <div className=" flex flex-col items-center justify-around h-[670px] sm:h-[950px] w-full  bg-gray-200">

                           <h1 className=" flex underline text-purple-800 text-[12em] h-[5%] justify-center items-center font-bold ">Offers</h1>
                                                 
                                                <ul className="flex flex-col min-h-[75%] w-[85%] sm:w-[70%] justify-between  items-center">  
                                                   
                                                    {data?.map(elm=>{
                                                                                                        
                                                        return <Listitem key={elm.id} listtype="offer" type={elm.type} oldprice={elm.oldprice}  price={elm.newprice} id={elm.id} imgeurl={elm.mainimg} name={elm.name} moreinfo={elm.moreinfo}  
                                                                quantity={1}></Listitem>
                                                      })}
                                                      
                                                </ul>
                                                <div className=" flex items-center justify-center text-[3.5em] h-[5%]">
                                                    <PAGES ></PAGES>
                             </div>
                                                
                     
            </div>
                
                      
    )
          
}