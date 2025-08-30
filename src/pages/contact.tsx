
import React from "react";

import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Zap } from 'lucide-react';
import { motion } from "framer-motion";

export const Contact:React.FC<{}>=()=>{
    return(
     <div className="container flex flex-col w-full mx-auto h-[600px]  lg:h-[700px] xl:h-[760px] gap-[20px] text-[5.5px] md:text-[8px] xl:text-[10px] md:gap-[90px]">
      <motion.h1 initial={{x:-250,opacity:0}} transition={{duration:1}} animate={{x:0,opacity:100}}  className="w-full font-bold text-purple-800 
      underline text-[5em] text-center   "> Contact Us</motion.h1>
      <motion.div initial={{x:-500,opacity:0}} transition={{duration:1.2}} animate={{x:0,opacity:100}} className="flex flex-col 
      gap-[40px] mx-auto w-[90%] text-[3em]  mt-[15%] sm:mt-[0%] sm:text-[3.5em] text-center  text leading-loose">   
             
               
               <div className="flex flex-row items-center justify-center">
                       <Mail size={'1.2em'}></Mail>
                       <p> E-MAIL : FOOD-ORDER@gmail.com</p>
                   </div>

                <div className="flex flex-row items-center justify-center">
                   <Phone size={'1.2em'}></Phone>
                       <p> TELPHONE : 021111000000</p>
                </div>
                              
                              <div className="flex flex-row items-center justify-center">
                                   <Zap size={'1.2em'}></Zap>
                                      <p>HOTLINE : 19088</p>
                                   </div>
                              
        
        
        
        
        
            </motion.div>


     </div>
                      
                      
    )
          
}