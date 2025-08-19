import React, { type FormEvent } from "react"
import { useState } from "react"

export const Sliderimge:React.FC<{}>=()=>{
const [numberslide,setnumberslide]=useState(1)

 let arr=[]   
 for(let i=1;i<=numberslide;i++){
 arr.push(i)
 }
 function handleclick(ev:FormEvent){
    ev.preventDefault()
    setnumberslide(prev=>prev+1)
 }
    return(

               <div className=" flex flex-row w-[98%] sm:w-[75%] justify-start items-start gap-[5%] h-[15%]">
                    <p className="w-[30%] h-[100%] flex text-end justify-end items-center text-[0.85em] sm:text-[0.9em]">Slider_Imges-url:</p>
                    <div className=" flex flex-row h-full w-[70%] items-start justify-between bg-gray-100 rounded-2xl ">
                         <ul className=" flex flex-col justify-between overflow-y-auto h-full gap-[5%] w-[80%]">

                          {   
                                arr.map(elm=>{
                                 return   <input key={elm} type="text" name={`sliderimge`} className="w-full text-[0.8em] max-h-[23%] sm:max-h-[35%]  min-h-[23%] sm:min-h-[35%] bg-white 
                                  border-2 text-center border-purple-900 rounded-2xl" placeholder={`SliderImge-url-${elm}`}></input>
                                })
                             }
               
               
                         </ul>
                            <button className="buttonstyle text-center w-[15%] text-[0.9em] h-[20%] sm:h-[30%]" onClick={handleclick}>+</button>
                    </div>
                    
               </div>

    )
}