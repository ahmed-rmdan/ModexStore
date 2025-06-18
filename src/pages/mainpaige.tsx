import React from "react";
import { Header } from "../compononts/header";
import { Welcome } from "../compononts/welcome";
import { Offers } from "../compononts/offers";
import { End } from "../compononts/end";
import { Modal } from "../compononts/modal";


export const Mainpg:React.FC<{}>=()=>{
    return(
           <>
           <Modal></Modal>
       <Header></Header>
       <Welcome></Welcome>
       <Offers></Offers>

             <End></End>
             

           </>
    )
}