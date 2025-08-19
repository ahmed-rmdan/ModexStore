import React from "react"
import { Listitem } from "./listitem"
import { ArrowBigLeft } from 'lucide-react';
import {ArrowBigRight} from 'lucide-react';
import { useEffect,useState,useRef } from "react";
import { motion } from "framer-motion";

const items:{price:number,id:string,imgurl:string,name:string}[]=[{price:80,id:'asda8848',imgurl:'',name:'1'},
      {price:200,id:'awqrwerezv57',imgurl:'',name:'2'},
      {price:150,id:'aaygwefasw86',imgurl:'',name:'3'},
      {price:200,id:'awumrewrcead787',imgurl:'',name:'4'},
      {price:200,id:'awreqjkm89',imgurl:'',name:'5'},
      {price:200,id:'awxwrfrzaeqr627',imgurl:'',name:'6'}
]
export const Offers:React.FC<{}>=()=>{
      const widthslider=useRef<HTMLDivElement>(null)
      const lengthitems=items.length
      const intervalRef = useRef<NodeJS.Timeout | null>(null);
const [transform,settransform]=useState<number>(0)
 
      useEffect(()=>{
           
               let count:number=0;
           
      intervalRef.current=setInterval(()=>{
            const numbertotransform=widthslider.current?.clientWidth
            count++;
            if(count>lengthitems-(numbertotransform as number/270)) count=0;
            settransform(count)

       },3000)
        return () => clearInterval(intervalRef.current as NodeJS.Timeout);
      },[])
      function handleforward(){
            
             const numbertotransform=widthslider.current?.clientWidth
            if(transform<lengthitems-( Math.trunc(numbertotransform as number/270) )){
               settransform(prev=>prev+1)
            }else{
                  settransform(0)   
            }
            
      }
      function handleprev(){
            const numbertotransform=widthslider.current?.clientWidth
            if(transform==0){
                  settransform(lengthitems-(Math.trunc(numbertotransform as number/270))-1)
            }
            else{
                  settransform(prev=>prev-1)
            }

      }


      const transformvalue=transform*270



    return(
      
          <section className="container flex flex-col mx-auto text-[3.3px] border-t-2 h-[500px]  border-black md:text-[4px] lg:text-[5px] xl:text-[7px]   ">
            <h1 className="text-[6.5em] sm:text-[7em] text-purple-800 underline font-bold mt-[-27px] bg-white w-[35%] sm:w-[20%] lg:mt-[-30px] xl:mt-[-50px] "> Hot Offers</h1>
                 <div className="flex flex-row w-full h-[80%] items-center justify-center">
                    <button className="w-[40px] sm:w-[60px] sm:mr-[20px] cursor-pointer " onClick={handleprev}><ArrowBigLeft size={'100%'} color="#6e11b0"/></button>
                    <ul  className={`flex flex-row items-center overflow-hidden min-w-[250px] max-w-[250px]   h-[70%]  md:min-w-[540px] xl:min-w-[810px] 2xl:min-w-[1080px] `}>
                                <motion.div variants={{visible:{transition:{staggerChildren:0.05}}}} ref={widthslider} animate={{x:-transformvalue}} transition={{duration:1,type:'spring',bounce:0.25}} className={`flex flex-row items-center  min-w-[250px] max-w-[250px] justify-between h-[100%] gap-[20px]  md:min-w-[540px] xl:min-w-[810px] 2xl:min-w-[1080px]`}>
                                             {items.map(elm=>{
                                     return <Listitem type="slider" price={elm.price} id={elm.id} imgeurl="" name={elm.name} quantity={1}></Listitem>
                                })}
                                </motion.div>
                               
                          {/* <Listitem type="slider" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
                          <Listitem type="slider" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
                          <Listitem type="slider" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
                          <Listitem type="slider" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem> */}
                    </ul>

                      <button className="w-[40px] sm:w-[60px]   cursor-pointer" onClick={handleforward}  ><ArrowBigRight size={'100%'} color="#6e11b0" /></button>
                 </div>
          </section>  
    )
}     