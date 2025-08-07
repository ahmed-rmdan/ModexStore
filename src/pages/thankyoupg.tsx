
import React from "react";


import { NavLink } from "react-router-dom";



export const Thankyoupg:React.FC<{}>=()=>{


    return(       
       
       <div className="bg-gray-200 flex justify-center items-center w-full h-[740px] sm:h-[950px] text-[9px]  sm:text-[12.5px] md:text-[14px] lg:-text-[18px] xl:text-[17px] ">
                  
               
                  <div className="bg-white flex  flex-col text-center text-[3em] font-bold text-purple-800 items-center leading-[2.5em] w-[95%] sm:w-[85%] xl:w-[60%] h-[70%] justify-start gap-[13%] rounded-2xl">
                                        <p className=" mt-[19%] sm:mt-[9%]  xl:mt-[5%] w-[90%]">Thank you <span className="text-purple-900">AHMED</span>  <br/>
                                         for your purchasing 
                                        <br/>
                                              you can check your order state in <NavLink className="text-purple-900 font-extrabold hover:underline" to={'/myorders'}>MyOrders</NavLink>
                                            


                                        </p>
                                        
                                  
                  </div>

        </div>


                      )        
                   
                    }