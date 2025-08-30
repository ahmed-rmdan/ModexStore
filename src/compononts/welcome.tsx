import React from "react";
import fationimg from '../assets/young-stylish-confident-happy-handsome-businessman-model-suit-cloth-lifestyle-street-standing-near-wall.jpg'
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState,useEffect } from "react"; 
const types=['T-shirts','Shirts','Jackets','Shoes','Jeans','Socks']
export const Welcome:React.FC<{}>=()=>{
   


const [typeindex, settypeindex] = useState<number>(0);

useEffect(() => {
  const interval = setInterval(() => {
    settypeindex((prev) => (prev < 5 ? prev + 1 : 0));
  }, 3000);

  return () => clearInterval(interval);
}, []);


    return(
           <div className="container flex flex-row text-black h-[650px]  mx-auto  text-[2.5px] md:text-[4.5px] md:h-[900px] lg:text-[5px] xl:text-[7px] ">
                <div className="flex w-[60%] sm:w-[50%] items-center justify-center flex-col gap-[35px] sm:gap-[60px] ">
                   <motion.p initial={{x:-250,opacity:0}} transition={{duration:1.2}} animate={{x:0,opacity:100}} className="text-center font-semibold  
                   text-[9em] leading-[55px] sm:leading-[80px] lg:leading-[100px] ">WELCOME TO OUR STORE we have <br  />
                
                    <motion.span className="text-purple-800 text-center text-[1.2em] font-bold relative" >     
                    <motion.span key={typeindex} initial={{width:'110%'}} transition={{duration:3,repeat:Infinity}} animate={{width:['110%','-10%','110%']}} className="absolute top-0 right-[0%] max-w-full text-[10em] h-full z-10 bg-white border-l-[1px]  border-purple-800">
                        
                        </motion.span > {types[typeindex]}</motion.span> </motion.p>

                  <NavLink to={'/products/allproducts'}><motion.button  initial={{opacity:0}} 
                   transition={{duration:2}} animate={{opacity:[0.1,0.30,0.60,0.80,1]}} 
                   
                    className="buttonstyle w-[8em] h-[2.5em] text-[5em] font-bold   md:w-[7em]  md:text-[4em]  md:h-[2.3em]   " >Shop Now !</motion.button></NavLink> 
                </div>
                <div className="w-[50%] h-full" >  
                    <motion.img initial={{x:350,opacity:0}} animate={{x:0,opacity:100}}  transition={{duration:1}} src={fationimg} className="w-[100%] h-[100%]">
                    </motion.img>

                </div>  
           </div>   
    )
}