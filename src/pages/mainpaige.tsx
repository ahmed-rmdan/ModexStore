import React from "react";
import { Header } from "../compononts/header";
import { Welcome } from "../compononts/welcome";
import { Offers } from "../compononts/offers";

export const Mainpg:React.FC<{}>=()=>{
    return(
           <>
       <Header></Header>
       <Welcome></Welcome>
       <Offers></Offers>
             
           </>
    )
}