import React from "react";

import { useState } from "react";
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { motion } from "framer-motion";
import { paginationactions } from "../store/store";
import { useAppDispatch } from "../store/hook";
import { useAppSelector } from "../store/hook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const PAGES:React.FC<{legth:number,noproducts:number}>=(props)=>{
   const[pagenum,setpagenum]=useState<number>(0)
       const dispatch=useAppDispatch()
       const activepage=useAppSelector((state)=>state.pagination.page)
       const category=useAppSelector((state)=>state.pagination.catogry)
            const parms=useParams()
useEffect(()=>{
   if(category===parms.category){
      console.log(activepage)
   setpagenum(activepage-1)
   
   }else{
      setpagenum(0)
   }

},[parms.category])

function handlenext(){
setpagenum(prev=>prev+1)  
}
function handleprev(){
   if(pagenum===0)
      return
   setpagenum(prev=>prev-1)  
}
function handleclick(page:number){
  
   dispatch(paginationactions.handlepage({page}))
}

let pagesarr:number[]=[]
for(let i=0;i<Math.ceil(props.legth/props.noproducts);i++){
   pagesarr.push(i+1)
}

return(
                         <div className="flex flex-row ">

                               { pagenum>0&&<button className="cursor-pointer" onClick={handleprev}><ArrowLeft size={'1.3em'} className="hover:text-purple-800"/></button>}
                                 
                           
                               <div className="flex flex-row  min-w-[100px]  max-w-[100px]     overflow-hidden "  >
                                 <motion.ul initial={{x:-activepage*20}} animate={{x:-pagenum*20}} className="flex flex-row h-full min-w-[100px]  ">
                                     {
                                       pagesarr.map(elm=>{
                                          return <button onClick={()=>handleclick(elm)} key={elm} className={elm===activepage?"min-w-[20px]  cursor-pointer text-purple-800 underline ":" min-w-[20px]  cursor-pointer hover:text-purple-800 hover:underline"}>{elm}</button>
                                       })
                                     }
                             
                                     
                                 </motion.ul>
                         

                               </div>
                              
                             { pagenum<Math.ceil(props.legth/props.noproducts)-5&&<button className="cursor-pointer" onClick={handlenext}><ArrowRight size={'1.3em'} className="hover:text-purple-800"/></button>}
                            
                               
                        </div>

)



}