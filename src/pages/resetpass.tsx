
import React from "react";






export const Resetpass:React.FC<{}>=()=>{


    return(       
       
       <div className="bg-gray-200 flex justify-center items-center w-full h-[740px] sm:h-[950px] text-[9px]  sm:text-[12.5px] md:text-[14px] lg:-text-[18px] xl:text-[17px] ">
                  
               
                  <div className="bg-white flex  flex-col   text-center text-[2em] font-bold text-purple-800 items-center leading-[2.5em] w-[95%] sm:w-[85%] xl:w-[60%] h-[55%] sm:h-[65%] justify-start gap-[15%] rounded-4xl">
                                       <h1 className=" flex  underline text-purple-800 text-[1.7em] justify-center items-center ">Reset password</h1>
                                       <div className=" flex flex-col items-center justify-center gap-[17%] w-[80%] sm:w-[70%] lg:w-[55%] h-[30%]">
                                                <input type="text" className="h-[30%] w-[85%] 2xl:w-[80%] text-[0.9em] border-2 rounded-2xl " placeholder="Email-address"/>
                                            <button className=" buttonstyle text-[0.9em] flex items-center justify-center  text-center h-[27%] w-[30%] 2xl:w-[25%]"> Send</button>
                                       </div>
                               
                                        
                                  
                  </div>

        </div>


                      )        
                   
                    }