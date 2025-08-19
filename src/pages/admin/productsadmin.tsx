import React, { use } from "react";
import { Listitem } from "../../compononts/listitem";

import { PAGES } from "../../compononts/pages";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getadminproducts } from "../../https/https";
import { useAppSelector } from "../../store/hook";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hook";
import { paginationactions } from "../../store/store";
export const Productsadmin:React.FC<{}>=()=>{
       const parms=useParams()
       const activepage=useAppSelector((state)=>state.pagination)
       const dispatch=useAppDispatch()
       console.log(activepage)
console.log(parms.category as string)
    const {data}=useQuery({
        queryKey:['products', parms.category,activepage],
        queryFn:({signal})=>getadminproducts(signal,parms.category as string,activepage),
        staleTime:600000            
    })

    useEffect(()=>{
     dispatch(paginationactions.handlepage({page:1}))
    },[parms.category])

 console.log(data)

let length:number=data===undefined?0:data.length

    return(
         <div className=" flex flex-col items-center justify-around min-h-[670px] max-h-[670px]  sm:max-h-[1050px] sm:min-h-[1050px] w-full  bg-gray-200">

                <h1 className=" flex underline text-purple-800 text-[12em] h-[5%] justify-center items-center font-bold ">{parms.category}</h1>
                                                 
                    <ul className="flex flex-col min-h-[80%] max-h-[80%] w-[85%] sm:w-[70%]  justify-between  items-center">  
                                                     
                            {data?.products?.map(elm=>{
                                                        
                                 return <Listitem key={elm.id} listtype="admin" type={elm.type} oldprice={elm.oldprice} price={elm.newprice} id={elm.id} imgeurl={elm.mainimg} name={elm.name} moreinfo={elm.moreinfo}  
                                 quantity={1}></Listitem>
                            })}
                                                     
                                                      
                    </ul>
                    <div className=" flex items-center justify-center text-[3.5em] h-[5%]">
                        <PAGES legth={length} noproducts={4}  ></PAGES>
                     </div>
                                                
                     
     </div>
                
                      
    )
          
}