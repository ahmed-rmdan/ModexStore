import React from "react";


export const Product:React.FC<{}>=()=>{
    return(
           <div className="container flex flex-row text-black h-[400px]  mx-auto text-[3px] sm:text-[4px] md:text-[4px] lg:text-[6px] xl:text-[7px] ">
                    <img className="w-[45%] h-full">

                    </img>
                
                   <div className="maininfo w-[55%] flex flex-col items-center justify-around ">
                         <p className="text-[0.8em] text-center"></p>
                       
                          
                         <p className="text-[0.9em] text-purple-800">price : 100 </p>
                   </div>


           </div>   
    )
}