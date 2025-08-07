
import React from "react";

import stripelogo from '../assets/stripeLogo.svg'



export const Paymentpg:React.FC<{}>=()=>{
function handlestripechecout(){

}

    return(       
       
       <div className="bg-gray-200 flex justify-center items-center w-full h-[740px] sm:h-[950px] text-[9px]  sm:text-[12.5px] md:text-[14px] lg:-text-[18px] xl:text-[17px] ">
                  
               
                  <div className="bg-white flex flex-col items-center w-[95%] sm:w-[85%] xl:w-[65%] h-[90%] justify-center gap-[13%] rounded-2xl">
                                             <progress value={70} max={100} className="custom-progress border-4  border-purple-800 rounded-[8px] w-[55%] sm:w-[45%] h-[2.5%] "></progress>
                              
                                         <button className="flex flex-row items-center justify-center gap-[5%] w-[68%] lg:w-[50%] h-[15%]   sm:h-[18%] border-4  text-[1.5em]  border-blue-600 cursor-pointer text-blue-600 font-bold rounded-2xl hover:border-blue-800  " onClick={handlestripechecout}>
                                     <img src={stripelogo}   className="w-[40%] " ></img>
                                                      Pay by using stripe
                                            </button>
                                               <p className="text-[2em] font-bold text-purple-700">OR</p>
                                         <button className="text-[2em] font-extrabold text-purple-800  hover:text-purple-800 hover:underline cursor-pointer " > Pay on Delivery</button>
                             
                              
               
                                


                  </div>





        </div>


                      )        
                   
                    }