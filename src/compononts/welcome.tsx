import React from "react";
import fationimg from '../assets/young-stylish-confident-happy-handsome-businessman-model-suit-cloth-lifestyle-street-standing-near-wall.jpg'
import { NavLink } from "react-router-dom";
export const Welcome:React.FC<{}>=()=>{
    return(
           <div className="container flex flex-row text-black h-[900px]  mx-auto text-[2.5px] sm:text-[4px] md:text-[4px] lg:text-[6px] xl:text-[7px] ">
                <div className="flex w-[50%] items-center justify-center flex-col gap-[60px] ">
                   <p className="text-center text-[9em] leading-[80px] lg:leading-[100px] ">WELCOME TO OUR STORE <br/>we have <span className="text-purple-800"> clothes</span> </p>
                  <NavLink to={'/products'}><button className="buttonstyle w-[100px] sm:w-[140px] h-[50px] text-[18px] sm:text-[22px] " >Shop Now!</button></NavLink> 
                </div>
                <div className="w-[50%] h-full" >
                    <img src={fationimg} className="w-[100%] h-[100%]">
                    </img>

                </div>  
           </div>   
    )
}