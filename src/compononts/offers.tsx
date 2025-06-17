import React from "react"
import { Listitem } from "./listitem"
export const Offers:React.FC<{}>=()=>{
    return(
          <section className="container flex flex-col mx-auto text-[3.3px] border-t-2 h-[500px]  border-black md:text-[4px] lg:text-[5px] xl:text-[7px]   ">
            <h1 className="text-[7em] text-purple-800 underline font-bold mt-[-27px] bg-white w-[20%] lg:mt-[-30px] xl:mt-[-50px] "> Hot Offers</h1>
                 <div className="flex flex-row w-full h-[80%] items-center justify-center">
                    <button className="w-[10%] "></button>
                    <ul className="flex flex-row items-center w-[1090px] justify-between h-[80%]  ">

                          <Listitem type="slider" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
                          <Listitem type="slider" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
                          <Listitem type="slider" price={100} id="151515" imgeurl="" name="blue shirt wit v cut sex" quantity={1}></Listitem>
                    </ul>
                    <button className="w-[10%]"></button>

                 </div>
          </section>
    )
}