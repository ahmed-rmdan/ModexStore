import React from "react";
import { Listitem } from "./listitem";
import { PAGES } from "./pages";
import { Searchproduct } from "./search";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getproducts } from "../https/https";
import { useAppSelector } from "../store/hook";
import { useAppDispatch } from "../store/hook";
import { paginationactions } from "../store/store";
import { useEffect } from "react";
import { Loadingproduct } from "./loadingcards";

export const Cateogry:React.FC<{}>=()=>{
    const cateogry=useParams()
      const activepage=useAppSelector((state)=>state.pagination.page)
      const category=useAppSelector((state)=>state.pagination.catogry)
      const dispatch=useAppDispatch()
    console.log(cateogry.category as string)
    const {data,isLoading}=useQuery({
        queryKey:['products', cateogry.category,activepage],
        queryFn:({signal})=>getproducts(signal,cateogry.category as string,activepage),
        staleTime:600000 
              
    })
      
    useEffect(()=>{
      dispatch(paginationactions.handlecatogry({catogry:cateogry.category}))  
      if(category!==cateogry.category){
       dispatch(paginationactions.handlepage({page:1}))
      }  
    },[cateogry.category])

    let length:number=data===undefined?0:data.length
     
    return(
                    <>
                    
                     <h1 className=" flex underline h-[6%] text-purple-800 text-[3.5em] justify-center items-center  font-bold">{cateogry.category}</h1>
                                             <Searchproduct></Searchproduct>
                         <ul className="flex flex-col w-[85%] sm:w-[70%] min-h-[77%] max-h-[77%] justify-start  gap-[20px] items-center">  
                               { isLoading? 
                               <>
                                 <Loadingproduct></Loadingproduct>
                                   <Loadingproduct></Loadingproduct>
                                     <Loadingproduct></Loadingproduct>
                                       <Loadingproduct></Loadingproduct>
                               </>


                                : data?.products?.map(elm=>{                                              
                                        return <Listitem key={elm.id} listtype="products" type={elm.type} oldprice={elm.oldprice} price={elm.newprice} id={elm.id} imgeurl={elm.mainimg} name={elm.name} moreinfo={elm.moreinfo}  
                                                    quantity={1}></Listitem>
                                         })
                                         }
                            </ul>
                       {  isLoading?'' :<PAGES noproducts={4}  legth={length}></PAGES>}
                    
                    </>
                     
                          

    )
}