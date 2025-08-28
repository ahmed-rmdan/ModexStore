import React from "react";

import { Orderuser } from "../compononts/userorder";
import { PAGES } from "../compononts/pages";
import {motion} from 'framer-motion'
import { useQuery } from "@tanstack/react-query";
import { getuserorders } from "../https/https";
import { useAppSelector } from "../store/hook";
import { useAppDispatch } from "../store/hook";
import { useEffect } from "react";
import { paginationactions } from "../store/store";
export const Myorders:React.FC<{}>=()=>{
        const activepage=useAppSelector((state)=>state.pagination.page)
       console.log(activepage)
    const dispatch=useAppDispatch()
  const {data,isFetching}=useQuery(
    {
        queryKey:['orders'],
        queryFn:({signal})=>getuserorders(signal,activepage),
        staleTime:600000               
    }
    )

   useEffect(()=>{
       dispatch(paginationactions.handlepage({page:1}))
   },[])
   
       let productlength=isFetching?0:data?.length
  console.log(data)
    return(
            <section className="w-[100%] flex flex-col gap-[2%] h-[800px] sm:-h-[700px] lg:h-[1100px] items-center  bg-gray-200 text-[8px] md:text-[10px] lg:text-[13px] xl:text-[13px]  2xl:text-[15px] ">
                      
                      
                                <h1 className="text-purple-800 text-[2.5em] underline font-bold mt-[30px]"> My Orders</h1>
                              

                    
<motion.ul variants={{invisible:{opacity:0,scale:0.6},visible:{scale:1,opacity:1,transition:{staggerChildren:0.2}}}} transition={{duration:1,type:'spring'}}  initial='invisible' animate='visible'
              className="flex flex-row flex-wrap justify-around h-[80%] sm:h-[70%] xl:h-[80%] md:w-[95%] lg:w-[85%] xl:w-[80%]  items-center  ">      
                        {data?.orders.map(elm=>{
                            return <Orderuser  payment={elm.payment} details={elm.details} totalprice={elm.totalprice} 
                            address={elm.address} state={elm.state} id={elm.id} at={elm.at} name={elm.name} location={elm.location}  ></Orderuser>
                        })}
</motion.ul>

                       <PAGES noproducts={6} legth={productlength as number} ></PAGES>                           

            </section>




    )
}