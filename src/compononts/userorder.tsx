import React from "react";
import {motion} from 'framer-motion'
import { Location } from "./location";


export const Orderuser:React.FC<{details:string,address:string,
    id:string,state:string,totalprice:number,payment:string,at:string,name:string,location:{longitude:number,latitude:number}|null}>=(props)=>{
    console.log(props.location)
      let classname='text-purple-800 font-bold'
if (props.state==='OutForDelivery'){
  classname='text-orange-500 font-bold'
}
if (props.state==='Done'){
  classname='text-green-600 font-bold'
}
if (props.state==='Cancel'){
  classname='text-red-600 font-bold'
}
if (props.state==='Prepearing'){
  classname='text-purple-900 font-bold'
}

    return(
                                              
 <motion.li   variants={{visible:{opacity:100,scale:1},invisible:{opacity:0,scale:0.5}}}
  key={props.id} className="flex flex-col  w-[47%]  sm:w-[30%] bg-white h-[30%] sm:h-[45%] text-purple-800  rounded-2xl 
   items-center justify-around text-[10px]  sm:text-[12.5px] lg:-text-[17px] xl:text-[19px]  2xl:text-[23px] " >
        <div className="h-[80%] w-[95%] justify-around flex flex-row ">
            <div className="w-[40%] h-[80%] self-center text-[0.2em] sm:text-[0.15em]">
                {!props.location?<p className="h-full flex items-center text-center font-bold self-center text-[3.7em] sm:text-[5em]"> No location adedd</p>:
                <Location location={[props.location.latitude,props.location.longitude]}></Location>
                 }
                
            </div>
             <div className="flex flex-col text-[0.7em] w-[45%] h-[90%] items-center justify-around">
            <p className="text-center font-semibold"> {props.details}</p>
            <p> At : {props.at}</p>
            <p className="text-[0.9em] text-center"> To : {props.address} </p>
               <p > State : <span className={classname}>{props.state}</span></p>
               <p  className="font-semibold"> Payment: {props.payment}</p>
             </div>
         
        </div>
          
               <p className="font-bold h-[10%] text-[0.9em]"> TotalPrice: {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.totalprice)}</p>
  
        </motion.li>

    )
}