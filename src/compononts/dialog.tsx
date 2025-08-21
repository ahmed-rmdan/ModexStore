import React from "react";
import { ArrowRightFromLine } from 'lucide-react';
import { ArrowLeftFromLine } from 'lucide-react';
import { useAppDispatch } from "../store/hook";
import { dialogactions } from "../store/store";
import {motion} from 'framer-motion'
import { useAppSelector } from "../store/hook";

export const Dialog:React.FC<{open:string,imges:string[],noimge:number}>=(props)=>{


if(props.open==='imges'){
       
    const page=useAppSelector((state)=>state.dialog.noimge)
    const dispatch=useAppDispatch()
 
  console.log(page)
const imgeslength=props.imges.length


function handleclose(){
dispatch(dialogactions.hidedialog())
}
function handlenext(){
    console.log(imgeslength)
if(page===imgeslength-1) return;
else{
 dispatch(dialogactions.increasepage())
}


}
function handleprev(){
if(page===0) return
dispatch(dialogactions.decreasepage())

}

 return(
       <motion.dialog  open={props.open==='imges'} >
       <div className="fixed w-full  items-center flex flex-col h-full z-[20000] bg-[#000000d5]">
              <button className="fixed flex items-center self-end top-[0%] h-[10%] w-[7%] sm:w-[5%]  text-[2.2em] cursor-pointer hover:text-purple-800" onClick={handleclose}> X</button>
              <div className="fixed flex flex-row justify-between items-center top-[10%] h-[90%] w-[95%] ">
               <ArrowLeftFromLine size={'3em'} className="w-[10%] cursor-pointer hover:text-purple-800 " onClick={handleprev}></ArrowLeftFromLine>
               <div className="flex flex-row overflow-hidden w-[77%] h-[50%] sm:w-[60%] sm:h-[80%]">
                          <motion.ul initial={{x:`-${props.noimge*100}%`}}  animate={{x:`-${page*100}%`}} transition={{bounce:0.5}} className="flex flex-row h-full w-full" >
                    {props.imges.map(elm=>{
                        return  <img key={elm} src={elm} className=" min-w-[100%] max-w-[100%] min-h-[100%] max-h-[100%] "></img>
                    })}

               </motion.ul>
               </div>
           
               
               <ArrowRightFromLine size={'3em'} className="w-[10%] cursor-pointer hover:text-purple-800 " onClick={handlenext}></ArrowRightFromLine>
              </div>
       </div>
       
       </motion.dialog>
    )

}

   
}