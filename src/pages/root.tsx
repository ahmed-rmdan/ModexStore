import React from "react";
import { Header } from "../compononts/header";
import { End } from "../compononts/end";
import { Outlet } from "react-router-dom";
import { Modal } from "../compononts/modal";


export const Root:React.FC<{}>=()=>{
    return(
           <>
       <Header></Header>
         <Modal></Modal>             
           <Outlet></Outlet>   

             <End></End>
             

           </>
    )
}