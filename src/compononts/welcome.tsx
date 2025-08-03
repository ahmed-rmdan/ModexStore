import React from "react";
import fationimg from '../assets/young-stylish-confident-happy-handsome-businessman-model-suit-cloth-lifestyle-street-standing-near-wall.jpg'
import { NavLink } from "react-router-dom";
export const Welcome:React.FC<{}>=()=>{
    return(
           <div className="container flex flex-row text-black h-[650px]  mx-auto  text-[2.5px] md:text-[4.5px] md:h-[900px] lg:text-[5px] xl:text-[7px] ">
                <div className="flex w-[50%] items-center justify-center flex-col gap-[35px] md:gap-[60px] ">
                   <p className="text-center text-[9em] leading-[80px] lg:leading-[100px] ">WELCOME TO OUR STORE <br/>we have <span className="text-purple-800"> clothes</span> </p>
                  <NavLink to={'/products'}><button className="buttonstyle w-[7.5em] h-[2.5em] text-[4.6em]   md:w-[7em] md:h-[2em]  md:text-[4em]  md:h-[2.3em]   " >Shop Now!</button></NavLink> 
                </div>
                <div className="w-[50%] h-full" >
                    <img src={fationimg} className="w-[100%] h-[100%]">
                    </img>

                </div>  
           </div>   
    )
}