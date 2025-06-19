import React from "react";
import { Header } from "../compononts/header";
import { End } from "../compononts/end";
import { Producs } from "../compononts/products";


export const Shoppg:React.FC<{}>=()=>{
    return(
           <>
       <Header></Header>
                      
               <Producs></Producs>     

             <End></End>
             

           </>
    )
}