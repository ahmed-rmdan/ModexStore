
import React from "react";
import {Location} from "./location";

export const Locations:React.FC<{}>=()=>{
   
    return(
         <section className="container text-center flex flex-col h-[1750px] text-[4.3px] sm:text-[5px] mx-auto justify-around">
                <p className="text-[9em] font-bold text-purple-800 underline h-[100px]">Branch Locations</p>
                <div className="locations">
                     <div className="flex flex-col w-[50%] h-[400px]  text-purple-800 ">
                           <p className="text-[7em] font-bold h-[50px] self-center">Cairo</p>
                           <Location location={[30.045592,31.237981]}></Location>
                     </div>
                     <div className="flex flex-col w-[50%] h-[400px]  text-purple-800 mx-[50%]">
                           <p className="text-[7em] font-bold h-[50px] self-center">Giza</p>
                           <Location location={[30.009107,31.200841]}></Location>
                     </div>
                     <div className="flex flex-col w-[50%] h-[400px]  text-purple-800 ">
                            <p className="text-[7em] font-bold h-[50px] self-center">Alexandria</p>
                            <Location location={[31.198346567984313,29.894763728265215]}></Location>
                     </div>
                     <div className="flex flex-col w-[50%] h-[400px]  text-purple-800 mx-[50%]">
                             <p className="text-[7em] font-bold h-[50px] self-center">Tanta</p>
                             <Location location={[30.78784930823166,31.001840190007467]}></Location>
                     </div>

                </div>
               
                  
         </section>


    )
}