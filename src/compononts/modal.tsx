import React from "react";
import { createPortal } from "react-dom";
import { Dialog } from "./dialog";


export const Modal:React.FC<{}>=()=>{
    
    const elemnt=document.getElementById('dialog')
if(elemnt===null)
    return;
else{
  return createPortal(
    <Dialog open=''></Dialog>


    ,elemnt
)
}
  
}
