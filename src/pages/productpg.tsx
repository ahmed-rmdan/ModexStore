import React from "react";

import { ArrowBigLeft } from "lucide-react";
import { ArrowBigRight } from "lucide-react";
  import { Heart } from 'lucide-react';
import { useAppDispatch } from "../store/hook";
import { cartactions } from "../store/store";
import { dialogactions } from "../store/store";
import { useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getproduct } from "../https/https";
export const Productpg:React.FC<{}>=()=>{
const dispatch=useAppDispatch()
const [imgepag,setimgepg]=useState<number>(0)
const inputvalue=useRef<HTMLInputElement|null>(null)

const parms=useParams()

    const {data}=useQuery({
        queryKey:['products', parms.productid],
        queryFn:({signal})=>getproduct(signal,parms.productid as string),
        staleTime:600000            
    })



function handleaddproduct(){
     let quantity:number=1
      if(!inputvalue.current||inputvalue.current==null||inputvalue.current.value=='0'){
          quantity=1
           }
       else{
        let numbervalue=Number(inputvalue.current.value)
         if(numbervalue===0) numbervalue++;
             quantity=numbervalue
          }
         dispatch(cartactions.additeem({id:data?.product.id as string,price:data?.product.newprice as number,name:data?.product.name as string,
          quantity:quantity,imgeurl:data?.product.mainimg as string}))
       }




function handleimges(noimge:number){
        const imges=data?.product.slideimg.split(',')
       dispatch(dialogactions.showdialog({dialog:'imges',imges:imges as string[],noimge}))
      }


function handleincrease(){

      if(inputvalue.current!.value===null){
            inputvalue.current!.value='1'
            }else{
           const oldquantuty=Number(inputvalue.current?.value)+1
           inputvalue.current!.value=oldquantuty.toString()
          }

       }


function handledecrese(){
  
      if(inputvalue.current!.value===null){
          inputvalue.current!.value='0'
         }else{
          const oldquantuty=Number(inputvalue.current?.value)-1
         if(oldquantuty<0){
          inputvalue.current!.value='0'
            }else{
         inputvalue.current!.value=oldquantuty.toString()
       }
   

      }
    }

    function handlenext(){
      
      const width=window.innerWidth
      const slideimgelength=data?.product.slideimg.split(',').length as number
      let numberoslide:number=8
      if(width<=768){
            numberoslide=5
      }
      if(width<=425){
            numberoslide=2
      }
        if(slideimgelength-numberoslide-imgepag<=0) return
      setimgepg(prev=>prev+1)
    }



    function handleprev(){
      if(imgepag===0) return ;
      setimgepg(prev=>prev-1)
    }
          
    return(
        <section className="container mx-auto flex flex-col h-[800px]  justify-around text-[15px] sm:text-[18px]  md:text-[20px] xl:text-[24px]  ">
           
     

             <div className=" flex flex-row items-center justify-around w-[100%] text-black h-[400px]  mx-auto ">
                    <img src={data?.product.mainimg} className="w-[40%] h-[70%] sm:h-[75%]">

                    </img>
                
                   <div className="maininfo w-[55%] h-[90%] flex flex-col items-center justify-around ">
                         <p className="text-[1.1em] text-center font-extrabold text-purple-800"> {data?.product.name}</p>
                         <p className="text-[1.1em] text-purple-800 font-bold">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(data?.product.newprice as number)} </p>

                       <Heart size={'2.5em'} className="cursor-pointer"></Heart>
                         <div className="flex flex-row  w-full items-center  justify-center">
                           <div className="flex flex-row items-center w-[55%] sm:w-[45%] gap-[5%] justify-center">
                                       <button className="  cursor-pointer text-[1.5em]   font-bold " onClick={handledecrese} >-</button>
                                       <input placeholder="1" className="h-[3.3em] w-[40%] lg:w-[35%] border-4 border-purple-800 text-center" ref={inputvalue} type="number"/>
                                         <button className="  cursor-pointer text-[1.5em] text-purple-800 font-bold  " onClick={handleincrease} >+</button>

                                </div>
                            <button className="buttonstyle text-[1.1em] h-[3.3em] w-[35%]  sm:w-[25%] lg:w-[20%]  " onClick={handleaddproduct}> Add Product</button>
                               

                         </div>
                   </div>


           </div> 
            <div className="flex flex-row w-full h-[150px]  items-center justify-center mb-[20px]">
                    <button className="w-[40px] sm:w-[60px] cursor-pointer "><ArrowBigLeft size={'100%'} color="#6e11b0" onClick={handleprev}/></button>
                          <div className="flex flex-row    h-[100%] overflow-hidden w-[210px] sm:w-[430px]  md:w-[540px]  lg:w-[870px]">
                        <motion.ul  animate={{x:-imgepag*100}}   className="flex flex-row  h-[80%] overflow-hidden gap-[10px] w-[210px] sm:w-[430px]  md:w-[540px]  lg:w-[870px]  ">
                           {data?.product.slideimg.split(',').map((elm,i)=>{
                            return   <img key={elm} src={elm} onClick={()=>handleimges(i)} className="min-w-[100px] max-w-[100px] h-[100%] cursor-pointer">
                             </img>
                           })}
                        
                        </motion.ul>
                     </div>
                    

                      <button className="w-[40px] sm:w-[60px] cursor-pointer" ><ArrowBigRight size={'100%'} color="#6e11b0" onClick={handlenext} /></button>
                 </div>
                 <div className="flex flex-col mx-auto w-[90%] h-200px gap-[20px] justify-between ">
                      <h2 className="text-[1.4em] underline font-semibold "> More Info </h2>
                      <p className="text-[0.8em] w-[70%]"> {data?.product.moreinfo}</p>

                 </div>
             
             


        </section>
  
    )
}