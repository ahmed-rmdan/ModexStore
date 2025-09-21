import React from "react";
import { Listitem } from "../../compononts/listitem";
import { useQuery } from "@tanstack/react-query";
import { getadminproducts } from "../../https/https";
import { PAGES } from "../../compononts/pages";
import { useAppSelector } from "../../store/hook";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hook";
import { paginationactions } from "../../store/store";
import { Loadingproduct } from "../../compononts/loadingcards";

export const Offersadminpg:React.FC<{}>=()=>{
    const activepage=useAppSelector((state)=>state.pagination.page)
    const dispatch=useAppDispatch()
 
    const {data,isLoading}=useQuery({
        queryKey:['products', 'offers',activepage],
        queryFn:({signal})=>getadminproducts(signal,'offers',activepage),
        staleTime:600000                    
    })


    useEffect(()=>{
     dispatch(paginationactions.handlepage({page:1}))
    },[])



   let length:number=data===undefined?0:data.length
    return(
            <div className=" flex flex-col items-center justify-around max-h-[670px] sm:max-h-[1050px] sm:min-h-[1050px] w-full  bg-gray-200">

                           <h1 className=" flex underline text-purple-800 text-[12em] h-[5%] justify-center items-center font-bold ">Offers</h1>
                                                 
                                                <ul className="flex flex-col min-h-[80%] max-h-[80%] w-[85%] sm:w-[70%] justify-start gap-[2%]  items-center">  
                                                   
                                                    {isLoading?
                                                    <>
                                                      <Loadingproduct></Loadingproduct>
                                                      <Loadingproduct></Loadingproduct>
                                                      <Loadingproduct></Loadingproduct>
                                                      <Loadingproduct></Loadingproduct>
                                                    </>
                                                    :
                                                    data?.products?.map(elm=>{
                                                                                                        
                                                        return <Listitem key={elm.id} listtype="offer" type={elm.type} oldprice={elm.oldprice}  price={elm.newprice} id={elm.id} imgeurl={elm.mainimg} name={elm.name} moreinfo={elm.moreinfo}  
                                                                quantity={1}></Listitem>
                                                      })}
                                                      
                                                </ul>
                                                <div className=" flex items-center justify-center text-[3.5em] h-[5%]">
                                                  <PAGES noproducts={4} legth={length} ></PAGES>
                             </div>
                                                
                     
            </div>
                
                      
    )
          
}