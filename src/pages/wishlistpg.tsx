import React from "react";

import { Listitem } from "../compononts/listitem";
import { PAGES } from "../compononts/pages";
import {motion} from 'framer-motion'
import { useQuery } from "@tanstack/react-query";
import { getwishlist } from "../https/https";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "../store/hook";
import { useEffect } from "react";
import { useAppDispatch } from "../store/hook";
 import { paginationactions } from "../store/store";

export const Wishlist:React.FC<{}>=()=>{
    const activepage=useAppSelector((state)=>state.pagination.page)
   
const dispatch=useAppDispatch()
const {data,isFetching}=useQuery(
    {
        queryKey:['wishlist',activepage],
        queryFn:({signal})=>getwishlist(signal,activepage),
        staleTime:600000,
        refetchOnMount:true
            
    }
    )
    console.log(activepage)
useEffect(()=>{
    dispatch(paginationactions.handlepage({page:1}))
},[])

    let productlength=isFetching?0:data?.length
console.log(data)
    return(
            <section className="w-[100%] flex flex-col gap-[2%] h-[800px] sm:-h-[700px] lg:h-[900px] xl:h-[1100px] items-center  bg-gray-200 text-[8px] md:text-[10px] lg:text-[15px] xl:text-[13.5px]  2xl:text-[15px] ">
                      
                      
                                <h1 className="text-purple-800 text-[3.5em] underline font-bold mt-[30px]"> My Wishlist</h1>
                              

                      <AnimatePresence>
                        {!data?'':
                         <motion.ul key={'wishlist'} variants={{invisible:{opacity:0,scale:0.5},visible:{opacity:1,scale:1,transition:{staggerChildren: 0.3}}}} 
                         initial='invisible' animate='visible'  className="flex flex-row flex-wrap justify-around h-[80%] sm:h-[70%]
                          xl:h-[80%] w-[95%] lg:w-[85%] xl:w-[80%]  items-center  ">
                            
                             {  data.products.map(elm=>{
                                   return   <Listitem key={elm.id} listtype="wishlist" type={elm.type} oldprice={elm.oldprice} price={elm.newprice} id={elm.id} imgeurl={elm.mainimg} name={elm.name} moreinfo={elm.moreinfo}  
                                                                    quantity={1}></Listitem>
                              })}
                              
                              
                               {data?.length===0?<p className="text-purple-800 font-bold text-[3.5em]">No wishlist has been added</p>:''}
                             
                       
                       </motion.ul>
                         }
                      </AnimatePresence>
                       

                       <PAGES noproducts={6} legth={productlength as number} ></PAGES>                        

            </section>




    )
}