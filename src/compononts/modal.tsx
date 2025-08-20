import React from "react";
import { createPortal } from "react-dom";
import { Dialog } from "./dialog";
import { useAppSelector } from "../store/hook";

export const Modal:React.FC<{}>=()=>{
    const dialogselector=useAppSelector((state)=>state.dialog)
    console.log(dialogselector.dialog)
    const elemnt=document.getElementById('dialog')
if(elemnt===null)
    return;
else{
  return createPortal(
    <Dialog imges={dialogselector.imges} open={dialogselector.dialog} noimge={dialogselector.noimge}></Dialog>


    ,elemnt
)
}
  
}
