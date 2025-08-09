
import React from "react";


import { NavLink } from "react-router-dom";



export const Thankyoupg:React.FC<{}>=()=>{


    return(       
       
       <div className="bg-gray-200 flex justify-center items-center w-full h-[740px] sm:h-[950px] text-[9px]  sm:text-[12.5px] md:text-[14px] lg:-text-[18px] xl:text-[17px] ">
                  
               
                  <div className="bg-white flex  flex-col   text-center text-[2.7em] font-bold text-purple-800 items-center leading-[2.5em] w-[95%] sm:w-[85%] xl:w-[60%] h-[70%] justify-center gap-[5%] rounded-2xl">
                                         <progress value={100} max={100} className="custom-progress border-4  border-purple-800 rounded-[8px] w-[70%] sm:w-[50%] h-[2%] xl:h-[2.5%] 2xl:h-[3.5%] "></progress> 
                                        <p className=" mt-[19%] sm:mt-[9%] items-start  xl:mt-[5%] w-[90%]">thank you <span className="text-purple-900">AHMED</span>  <br/>
                                         for your purchasing 
                                        <br/>
                                              you can check your order state in <NavLink className="text-purple-900 font-extrabold hover:underline" to={'/myorders'}>MyOrders</NavLink>
                                            


                                        </p>
                                        
                                  
                  </div>

        </div>


                      )        
                   
                    }