import React from "react";

import { ArrowBigLeft } from "lucide-react";
import { ArrowBigRight } from "lucide-react";


export const Product:React.FC<{}>=()=>{
    return(
        <section className="container mx-auto flex flex-col gap-[70px] justify-around text-[15px] sm:text-[18px]  md:text-[20px] xl:text-[24px]  ">
           
            <h1 className="font-bold text-purple-800 underline text-[1.7em]"> Product page</h1>

             <div className=" flex flex-row w-[100%] text-black h-[400px]  mx-auto ">
                    <img className="w-[45%] h-full">

                    </img>
                
                   <div className="maininfo w-[55%] flex flex-col items-center justify-around ">
                         <p className="text-[1.1em] text-center font-bold"> jeans with blue </p>
                         <p className="text-[1.2em] text-purple-800">price : 100 </p>
                         <div className="flex flex-row w-full items-center justify-center">
                            <button className="buttonstyle w-[40%] sm:w-[30%]">add product</button>
                            

                         </div>
                   </div>


           </div> 
            <div className="flex flex-row w-full h-[80%] items-center justify-center mb-[20px]">
                    <button className="w-[40px] sm:w-[60px] cursor-pointer "><ArrowBigLeft size={'100%'} color="#6e11b0"/></button>
                    <ul className="flex flex-row   justify-between h-[80%] overflow-hidden gap-[10px] w-[210px] sm:w-[430px]  md:w-[540px]  lg:w-[870px]  ">
                             <img className="min-w-[100px] h-[80px]">
                             </img>
                             <img className="min-w-[100px] h-[80px]">
                             </img>
                             <img className="min-w-[100px] h-[80px]">
                             </img>
                             <img className="min-w-[100px] h-[80px]">
                             </img>
                             <img className="min-w-[100px] h-[80px]">
                             </img>
                             <img className="min-w-[100px] h-[80px]">
                             </img>
                             <img className="min-w-[100px] h-[80px]">
                             </img>
                             <img className="min-w-[100px] h-[80px]">
                             </img>
                           
                        
                    </ul>

                      <button className="w-[40px] sm:w-[60px] cursor-pointer" ><ArrowBigRight size={'100%'} color="#6e11b0" /></button>
                 </div>
                 <div className="flex flex-col h-200px gap-[20px] justify-between ">
                      <h2 className="text-[1.4em] underline font-semibold "> More Info </h2>
                      <p className="text-[0.8em] w-[70%]"> this product made from lazard wich is very go please covvds
                        vgdsvds  vdsvb odfsafasfasfasfafsafasfasfsafasfasfasfasfafsafasfasfafs</p>

                 </div>
                 <div className="h-[100px]">

                 </div>
             


        </section>
  
    )
}