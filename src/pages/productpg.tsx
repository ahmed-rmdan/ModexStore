import React from "react";
import { Header } from "../compononts/header";
import { End } from "../compononts/end";
import { Product } from "../compononts/product";


export const Productpg:React.FC<{}>=()=>{
    return(
           <>
       <Header></Header>
                      
             <Product></Product>

             <End></End>
             

           </>
    )
}