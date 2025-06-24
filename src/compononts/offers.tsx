import React from "react"
import { Listitem } from "./listitem"
import { ArrowBigLeft } from 'lucide-react';
import {ArrowBigRight} from 'lucide-react';
export const Offers:React.FC<{}>=()=>{
    return(
          <section className="container flex flex-col mx-auto text-[3.3px] border-t-2 h-[500px]  border-black md:text-[4px] lg:text-[5px] xl:text-[7px]   ">
            <h1 className="text-[6.5em] sm:text-[7em] text-purple-800 underline font-bold mt-[-27px] bg-white w-[35%] sm:w-[20%] lg:mt-[-30px] xl:mt-[-50px] "> Hot Offers</h1>
                 <div className="flex flex-row w-full h-[80%] items-center justify-center">
                    <button className="w-[40px] sm:w-[60px] cursor-pointer "><ArrowBigLeft size={'100%'} color="#6e11b0"/></button>
                    <ul className="flex flex-row items-center w-[300px] justify-between h-[80%] overflow-hidden gap-[20px]  sm:w-[300px]  md:min-w-[620px] xl:min-w-[940px] 2xl:min-w-[1260px]">

                          <Listitem type="slider" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
                          <Listitem type="slider" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
                          <Listitem type="slider" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
                          <Listitem type="slider" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
                    </ul>

                      <button className="w-[40px] sm:w-[60px]  cursor-pointer" ><ArrowBigRight size={'100%'} color="#6e11b0" /></button>
                 </div>
          </section>  
    )
}     