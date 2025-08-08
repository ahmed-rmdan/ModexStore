import React from "react";



export const Orderuser:React.FC<{details:string,address:string,id:string,state:string,totalprice:number,date:string}>=(props)=>{
    
    return(
                                              
 <li  className="flex flex-col  w-[47%]  sm:w-[30%] bg-white h-[30%] sm:h-[45%] text-purple-800  rounded-2xl  items-center justify-around text-[9px]  sm:text-[12.5px] lg:-text-[17px] xl:text-[19px]  2xl:text-[23px] " >
            <p> {props.details}</p>
            <p> At : {props.date}</p>
            <p> To : {props.address}</p>
               <p > State : {props.state}</p>
               <p className="font-bold"> TotalPrice: {props.totalprice}</p>
  
        </li>

    )
}