import React from "react";

import { useState } from "react";
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
export const PAGES:React.FC<{}>=(props)=>{
   const[pagenum,setpagenum]=useState<number>(0)

function handlenext(){
setpagenum(prev=>prev+1)  
}
function handleprev(){
   setpagenum(prev=>prev-1)  
}

return(
                         <div className="flex flex-row ">

                               <button className="items-center justify-center" onClick={handleprev}><ArrowLeft/></button>
                             
                           
                               <div className="flex flex-row w-[100px] overflow-hidden "  >
                                    <button className="w-[20px] cursor-pointer hover:text-purple-800 hover:underline">1</button>
                                    <button className="w-[20px] cursor-pointer  hover:text-purple-800 hover:underline" >2</button>
                                    <button className="w-[20px] cursor-pointer hover:text-purple-800 hover:underline">3</button>
                                    <button className="w-[20px] cursor-pointer hover:text-purple-800 hover:underline">4</button>
                                    <button className="w-[20px] cursor-pointer hover:text-purple-800 hover:underline">5</button>

                               </div>
                              
                              <button className="next" onClick={handlenext}><ArrowRight /></button>
                            
                               
                        </div>

)



}