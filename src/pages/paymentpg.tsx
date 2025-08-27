
import React from "react";

import stripelogo from '../assets/stripeLogo.svg'
import { NavLink, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import {motion , animate} from 'framer-motion'
import { useMutation } from "@tanstack/react-query";
import { createorder } from "../https/https";
import { stripepayment } from "../https/https";

export const Paymentpg:React.FC<{}>=()=>{
const navigate=useNavigate()
const {mutate:ondelivery}=useMutation({
mutationFn:createorder,
onSuccess:() =>{   
   navigate('/thankyou')
},
onError:()=>{
  navigate('/signin')
}
})
const {mutate:stripe}=useMutation({
mutationFn:stripepayment,
onSuccess:(data) =>{   
   window.location.href=data
},
onError:()=>{
  navigate('/signin')
}
})

const [progressvalue,setprogressvalue]=useState(0)

  useEffect(() => {
    
    animate(30, 70, {
      duration: 2,
      onUpdate: latest => setprogressvalue(latest),
    });
  }, []);



function handlestripechecout(){
stripe()
}
function handleondelicey(){
ondelivery()
}

    return(       
       
       <div className="bg-gray-200 flex justify-center items-center w-full h-[740px] sm:h-[950px] text-[9px]  sm:text-[12.5px] md:text-[14px] lg:-text-[18px] xl:text-[17px] ">
                  
               
           <div className="bg-white flex flex-col items-center w-[95%] sm:w-[85%] xl:w-[65%] h-[90%] justify-center gap-[13%] rounded-2xl">
                     <motion.progress value={progressvalue} max={100} className="custom-progress border-4  border-purple-800 rounded-[8px] w-[55%] sm:w-[45%] h-[2.5%]  2xl:h-[3%] "></motion.progress>                                                                    <button className="flex flex-row items-center justify-center gap-[5%] w-[68%] lg:w-[50%] h-[15%] 
                    sm:h-[18%] border-4  text-[1.5em]  border-blue-600 cursor-pointer text-blue-600 font-bold rounded-2xl hover:border-blue-800  " onClick={handlestripechecout}>
                            <img src={stripelogo}   className="w-[40%] " ></img>
                                              Pay by using stripe
                                        </button>
                         <p className="text-[2em] font-bold text-purple-700">OR</p>
                   <NavLink to={'/thankyou'} className="text-[2.2em] font-extrabold text-purple-800  hover:text-purple-800 hover:underline cursor-pointer text-center " onClick={handleondelicey}>
                 Pay on Delivery</NavLink>                             
             </div>

        </div>


                      )        
                   
                    }