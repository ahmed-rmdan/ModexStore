import React from "react";
import { ArrowRightFromLine } from 'lucide-react';
import { ArrowLeftFromLine } from 'lucide-react';
import { useAppDispatch } from "../store/hook";
import { dialogactions } from "../store/store";
import {motion} from 'framer-motion'
export const Dialog:React.FC<{open:string,imges:string[]}>=(props)=>{
    const dispatch=useAppDispatch()
console.log(props.open)
function handleclose(){
dispatch(dialogactions.hidedialog())
}
if(props.open==='imges'){
 return(
       <motion.dialog  open={props.open==='imges'} >
       <div className="fixed w-full  items-center flex flex-col h-full z-[20000] bg-[#000000d5]">
              <button className="fixed flex items-center self-end top-[0%] h-[10%] w-[7%] sm:w-[5%]  text-[2.2em] cursor-pointer hover:text-white " onClick={handleclose}> X</button>
              <div className="fixed flex flex-row justify-between items-center top-[10%] h-[90%] w-[95%] ">
               <ArrowLeftFromLine size={'3em'} className="w-[10%] cursor-pointer"></ArrowLeftFromLine>
               <img className=" w-[77%] h-[50%] sm:w-[60%] sm:h-[80%]"></img>
               <ArrowRightFromLine size={'3em'} className="w-[10%] cursor-pointer"></ArrowRightFromLine>
              </div>
       </div>
       
       </motion.dialog>
    )

}

   
}