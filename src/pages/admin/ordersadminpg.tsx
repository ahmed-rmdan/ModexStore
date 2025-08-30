import React from "react";

import { Orderadmin } from "../../compononts/admin/orderadmin";
import { PAGES } from "../../compononts/pages";
import { useQuery } from "@tanstack/react-query";
import { getadminorders } from "../../https/https";
import { useAppSelector } from "../../store/hook";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hook";
import { paginationactions } from "../../store/store";
export const Ordersadminpg:React.FC<{}>=()=>{
     const activepage=useAppSelector((state)=>state.pagination.page)
     const dispatch=useAppDispatch()
      const {data,isFetching}=useQuery(
    {
        queryKey:['orders',activepage],
        queryFn:({signal})=>getadminorders(signal,activepage),
        staleTime:600000
        
    }
    )
  useEffect(()=>{
       dispatch(paginationactions.handlepage({page:1}))
   },[])
    let productlength=isFetching?0:data?.length
   
    return(
            <div className=" flex flex-col items-center justify-around h-[760px] sm:h-[1050px] w-full  bg-gray-200">

                           <h1 className=" flex underline text-purple-800 text-[12em] h-[5%] justify-center items-center font-bold ">Orders</h1>
                                                 
                                 <ul className="flex flex-col min-h-[80%] w-[85%] sm:w-[70%] justify-start gap-[3%]  items-center">  
                                
                                
                                               {data?.orders.map(elm=>{
                                            return  <Orderadmin  payment={elm.payment} details={elm.details} totalprice={elm.totalprice} 
                                                 address={elm.address} state={elm.state} id={elm.id} at={elm.at} username={elm.name} location={elm.location}  ></Orderadmin>
                                                        })}          
                                                       
                                            </ul>
                                                <div className=" flex items-center justify-center text-[3.5em] h-[5%]">
                                                    <PAGES legth={productlength} noproducts={3} ></PAGES>
                                                </div>
                                                
                     
            </div>
                
                      
    )
          
}