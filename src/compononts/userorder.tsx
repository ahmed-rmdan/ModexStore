import React from "react";
import {motion} from 'framer-motion'


export const Orderuser:React.FC<{details:string,address:string,id:string,state:string,totalprice:number,date:string,payment:string}>=(props)=>{
    
    return(
                                              
 <motion.li  variants={{visible:{opacity:100,scale:1},invisible:{opacity:0,scale:0.5}}} transition={{duration:1}}   key={props.id} className="flex flex-col  w-[47%]  sm:w-[30%] bg-white h-[30%] sm:h-[45%] text-purple-800  rounded-2xl  items-center justify-around text-[9px]  sm:text-[12.5px] lg:-text-[17px] xl:text-[19px]  2xl:text-[23px] " >
            <p> {props.details}</p>
            <p> At : {props.date}</p>
            <p> To : {props.address}</p>
               <p className="font-semibold"> State : {props.state}</p>
               <p > Payment: {props.payment}</p>
               <p className="font-bold"> TotalPrice: {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.totalprice)}</p>
  
        </motion.li>

    )
}