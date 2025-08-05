import React from "react";

import { ArrowBigLeft } from "lucide-react";
import { ArrowBigRight } from "lucide-react";
  import { Heart } from 'lucide-react';
import { useAppDispatch } from "../store/hook";
import { cartactions } from "../store/store";
import { dialogactions } from "../store/store";
import { useRef } from "react";

export const Productpg:React.FC<{}>=()=>{
const dispatch=useAppDispatch()

const inputvalue=useRef<HTMLInputElement|null>(null)

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
    dispatch(cartactions.additeem({id:'544847',price:200,name:'product',quantity:quantity}))
}
function handleimges(){
    console.log('aaaaaaaaaaaaaaa')
dispatch(dialogactions.showdialog({dialog:'imges',imges:[]}))
}
function handleincrease(){

}


    return(
        <section className="container mx-auto flex flex-col h-[800px]  justify-around text-[15px] sm:text-[18px]  md:text-[20px] xl:text-[24px]  ">
           
     

             <div className=" flex flex-row items-center justify-around w-[100%] text-black h-[400px]  mx-auto ">
                    <img className="w-[40%] h-[70%] sm:h-[75%]">

                    </img>
                
                   <div className="maininfo w-[55%] h-[90%] flex flex-col items-center justify-around ">
                         <p className="text-[1.1em] text-center font-bold"> jeans with blue </p>
                         <p className="text-[1.2em] text-purple-800">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(100)} </p>

                       <Heart size={'2.5em'} className="cursor-pointer"></Heart>
                         <div className="flex flex-row  w-full items-center gap-[3%] justify-center">
                           <div className="flex flex-row items-center w-[60%] sm:w-[45%] gap-[5%] justify-center">
                                       <button className="  cursor-pointer text-[1.5em]   font-bold " onClick={handleincrease} >-</button>
                                       <input placeholder="1" className="h-[3.3em] w-[35%] border-4 border-purple-800 text-center" ref={inputvalue} type="number"/>
                                         <button className="  cursor-pointer text-[1.5em] text-purple-800 font-bold  " onClick={handleincrease} >+</button>

                                </div>
                            <button className="buttonstyle text-[1.1em] h-[3.3em] w-[35%]  sm:w-[35%] lg:w-[25%]  " onClick={handleaddproduct}> Add Product</button>
                               

                         </div>
                   </div>


           </div> 
            <div className="flex flex-row w-full h-[150px]  items-center justify-center mb-[20px]">
                    <button className="w-[40px] sm:w-[60px] cursor-pointer "><ArrowBigLeft size={'100%'} color="#6e11b0"/></button>
                    <ul className="flex flex-row   justify-between h-[80%] overflow-hidden gap-[10px] w-[210px] sm:w-[430px]  md:w-[540px]  lg:w-[870px]  ">

                             <img className="min-w-[100px] h-[100%] cursor-pointer" onClick={handleimges}>
                             </img>
                             <img className="min-w-[100px] h-[100%]">
                             </img>
                             <img className="min-w-[100px] h-h-[100%">
                             </img>
                             <img className="min-w-[100px] h-[100%">
                             </img>
                             <img className="min-w-[100px] h-[100%]">
                             </img>
                             <img className="min-w-[100px] h-[100%]">
                             </img>
                             <img className="min-w-[100px] h-[100%]">
                             </img>
                             <img className="min-w-[100px] h-[100%]">
                             </img>
                           
                        
                    </ul>

                      <button className="w-[40px] sm:w-[60px] cursor-pointer" ><ArrowBigRight size={'100%'} color="#6e11b0" /></button>
                 </div>
                 <div className="flex flex-col mx-auto w-[90%] h-200px gap-[20px] justify-between ">
                      <h2 className="text-[1.4em] underline font-semibold "> More Info </h2>
                      <p className="text-[0.8em] w-[70%]"> this product made from lazard wich is very go please covvds
                        vgdsvds  vdsvb odfsafasfasfasfafsafasfasfsafasfasfasfasfafsafasfasfafs</p>

                 </div>
             
             


        </section>
  
    )
}