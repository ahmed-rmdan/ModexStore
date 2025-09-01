import React from "react"
import { Listitem } from "./listitem"
import { ArrowBigLeft } from 'lucide-react';
import {ArrowBigRight} from 'lucide-react';
import { useEffect,useState,useRef } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getalloffers } from "../https/https";
import { Loadingslider } from "./loadingcards";

export const Offers:React.FC<{}>=()=>{
      const widthslider=useRef<HTMLDivElement>(null)
      const intervalRef = useRef<NodeJS.Timeout | null>(null);
const [transform,settransform]=useState<number>(0)

    const {data,isLoading}=useQuery({
        queryKey:['products'],
        queryFn:getalloffers          
    })


const lengthitems=data===undefined?0:data.products.length
console.log(lengthitems)
let numbertotransform=widthslider.current?.clientWidth 

console.log(numbertotransform)
      useEffect(()=>{
      clearInterval(intervalRef.current as NodeJS.Timeout)
      intervalRef.current=setInterval(()=>{   
                    if(lengthitems-(numbertotransform as number/270)<=0){
                        settransform(0)
                    }else{
                        settransform(prv=>prv+1);  
                    }
                                   
       },3000)
        return () => clearInterval(intervalRef.current as NodeJS.Timeout);
      },[lengthitems])


  if(numbertotransform&&lengthitems-(numbertotransform as number/270)<=0){
      console.log('sadasdasdasdsadsa')
               clearInterval(intervalRef.current as NodeJS.Timeout)
            }

if(numbertotransform&& !(lengthitems-(numbertotransform as number/270)<=0)&&transform>lengthitems-(numbertotransform as number/270) ){
                settransform(0);         
            }

          
console.log(transform)





      function handleforward(){
            
             const numbertotransform=widthslider.current?.clientWidth
            if(transform<lengthitems-( Math.trunc(numbertotransform as number/270) )){
               settransform(prev=>prev+1)
            }else{
                  settransform(0)   
            }
            
      }
      function handleprev(){
           
            if(transform==0){
                 return
            }
            else{
                  settransform(prev=>prev-1)
            }

      }


      const transformvalue=transform*270



    return(
      
          <section className="container flex flex-col mx-auto text-[3.3px] border-t-2 h-[500px]  border-black md:text-[4px] lg:text-[5px] xl:text-[7px]   ">
            <motion.h1  className="text-[7.5em] sm:text-[7em] text-purple-800 underline font-bold
             mt-[-27px] bg-white w-[35%] sm:w-[20%] lg:mt-[-30px] xl:mt-[-50px] "> Hot Offers</motion.h1>
                 <div className="flex flex-row w-full h-[80%] items-center justify-center">
                    <button className="w-[40px] sm:w-[60px] sm:mr-[20px] cursor-pointer " onClick={handleprev}><ArrowBigLeft size={'100%'} color="#6e11b0"/></button>
                    <ul  className={`flex flex-row items-center overflow-hidden min-w-[250px] max-w-[250px]   h-[70%]  md:min-w-[540px] xl:min-w-[810px] 2xl:min-w-[1080px] `}>
                                <motion.div variants={{visible:{transition:{staggerChildren:0.05}}}} ref={widthslider} animate={{x:-transformvalue}}
                                 transition={{duration:1,type:'spring',bounce:0.25}} className={`flex flex-row items-center  min-w-[250px] max-w-[250px] justify-between
                                  h-[100%] gap-[20px]  md:min-w-[540px] xl:min-w-[810px] 2xl:min-w-[1080px]`}>
                                         { isLoading? 
                                         <>
                                        <Loadingslider></Loadingslider>
                                        <Loadingslider></Loadingslider>
                                        <Loadingslider></Loadingslider>
                                        <Loadingslider></Loadingslider>
                                        <Loadingslider></Loadingslider>
                                        <Loadingslider></Loadingslider>
                                        <Loadingslider></Loadingslider>
                                        <Loadingslider></Loadingslider>
                                        <Loadingslider></Loadingslider>
                                         </>     
                                         
                                         
                                         :data?.products.map(elm=>{
                                     return <Listitem key={elm.id} listtype="slider" type={elm.type} oldprice={elm.oldprice} price={elm.newprice} 
                                     id={elm.id} imgeurl={elm.mainimg} name={elm.name} moreinfo={elm.moreinfo}  
                                                                              quantity={1}></Listitem>
                                                   })}
                                    </motion.div>
                               
                    
                    </ul>

                      <button className="w-[40px] sm:w-[60px]   cursor-pointer" onClick={handleforward}  ><ArrowBigRight size={'100%'} color="#6e11b0" /></button>
                 </div>
          </section>  
    )
}     