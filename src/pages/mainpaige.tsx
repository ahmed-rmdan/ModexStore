import React from "react";

import { Welcome } from "../compononts/welcome";
import { Offers } from "../compononts/offers";




export const Mainpg:React.FC<{}>=()=>{
    return(
           <>
      
      
       <Welcome></Welcome>
       <Offers></Offers>

             

           </>
    )
}