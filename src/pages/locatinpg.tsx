import React from "react";
import { Header } from "../compononts/header";
import { End } from "../compononts/end";
import { Locations } from "../compononts/locations";


export const Locationspg:React.FC<{}>=()=>{
    return(
           <>
       <Header></Header>
   <Locations></Locations>

             <End></End>
             

           </>
    )
}