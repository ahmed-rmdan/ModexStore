import React from "react";
import { Listitem } from "../compononts/listitem"; 
import { PAGES } from "../compononts/pages"; 
import { Searchproduct } from "../compononts/search"; 
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getadminproducts } from "../https/https";
import { useAppSelector } from "../store/hook";
import { useAppDispatch } from "../store/hook";
import { paginationactions } from "../store/store";
import { useEffect } from "react";
export const Searchproducts:React.FC<{}>=()=>{
    const cateogry=useParams()
      const activepage=useAppSelector((state)=>state.pagination)
      const dispatch=useAppDispatch()
    console.log(cateogry.category as string)
    const {data}=useQuery({
        queryKey:['products', cateogry.category,activepage],
        queryFn:({signal})=>getadminproducts(signal,cateogry.category as string,activepage),
        staleTime:600000            
    })

    useEffect(()=>{
     dispatch(paginationactions.handlepage({page:1}))
    },[cateogry.category])

    let length:number=data===undefined?0:data.length
    return(
                    <>
                    
                     <h1 className=" flex underline h-[6%] text-purple-800 text-[3.5em] justify-center items-center  font-bold">{cateogry.category}</h1>
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