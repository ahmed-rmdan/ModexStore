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
              <button className="fixed flex items-center self-end top-[0%] h-[10%] w-[10%] sm:w-[5%]   text-[2.5em]
               text-purple-900 cursor-pointer hover:text-white" onClick={handleclose}> X</button>

              <div className="fixed flex flex-row justify-center items-center top-[10%] h-[90%] w-[95%] ">
               <div className=" min-w-[10%] max-w-[10%]">
                 { page!==0 &&<ArrowLeftFromLine size={'3em'} className="min-w-full max-w-full cursor-pointer text-purple-900 
                  hover:text-white" onClick={handleprev}></ArrowLeftFromLine>}
                      </div>
              
               <div className="flex flex-row overflow-hidden min-w-[77%] self-center max-w-[77%] h-[50%] sm:w-[60%] sm:h-[80%]">
                          <motion.ul initial={{x:`-${props.noimge*100}%`}}  animate={{x:`-${page*100}%`}} transition={{bounce:0.5}} className="flex flex-row h-full w-full" >
                    {props.imges.map(elm=>{
                        return  <img key={elm} src={elm} className=" min-w-[100%] max-w-[100%] min-h-[100%] max-h-[100%] "></img>
                    })}

               </motion.ul>
               </div>
           
               <div className=" min-w-[10%] max-w-[10%]">
               {page!==imgeslength-1 &&<ArrowRightFromLine size={'3em'} className=" max-w-full min-w-full cursor-pointer text-purple-900 hover:text-white " onClick={handlenext}></ArrowRightFromLine>}
               </div>
               
              </div>
       </div>
       
       </motion.dialog>
    )

}

   
}