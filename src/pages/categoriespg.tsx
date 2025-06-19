import React from "react";
import { Header } from "../compononts/header";
import { End } from "../compononts/end";
import { Catagories } from "../compononts/catagories";


export const Categoriespg:React.FC<{}>=()=>{
    return(
           <>
       <Header></Header>
                      
                      <Catagories></Catagories>

             <End></End>
             

           </>
    )
}