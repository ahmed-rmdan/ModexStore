import React from "react";
import { Listitem } from "../compononts/listitem"; 
import { PAGES } from "../compononts/pages"; 
import { Searchproduct } from "../compononts/search"; 
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getsearchproducts } from "../https/https";
import { useAppSelector } from "../store/hook";
import { useAppDispatch } from "../store/hook";
import { paginationactions } from "../store/store";
import { useEffect } from "react";
export const Searchproductspg:React.FC<{}>=()=>{
    const parms=useParams()
      const activepage=useAppSelector((state)=>state.pagination.page)
      const dispatch=useAppDispatch()
    console.log(parms.search as string)
    const {data}=useQuery({
        queryKey:['products', parms.search,activepage],
        queryFn:({signal})=>getsearchproducts(signal,parms.search as string,activepage),
        staleTime:600000            
    })

    useEffect(()=>{
     dispatch(paginationactions.handlepage({page:1}))
    },[parms.search])

    let length:number=data===undefined?0:data.length
    return(
                    <>
                    
                     <h1 className=" flex underline h-[6%] text-purple-800 text-[3.7em] justify-center items-center  font-bold">Search</h1>
                                             <Searchproduct></Searchproduct>
                         <ul className="flex flex-col w-[85%] sm:w-[70%] min-h-[77%] max-h-[77%] justify-around gap-[20px] items-center">  
                                    {data?.products?.map(elm=>{                                              
                                        return <Listitem key={elm.id} listtype="products" type={elm.type} oldprice={elm.oldprice} price={elm.newprice} id={elm.id} imgeurl={elm.mainimg} name={elm.name} moreinfo={elm.moreinfo}  
                                                    quantity={1}></Listitem>
                                         })}
                     </ul>
                            <PAGES noproducts={4}  legth={length}></PAGES>
                    
                    </>
                     
                      


        




    )
}