
import React from "react";






export const Resetpass:React.FC<{}>=()=>{


    return(       
       
       <div className="bg-gray-200 flex justify-center items-center w-full h-[740px] sm:h-[950px] text-[9px]  sm:text-[12.5px] md:text-[14px] lg:-text-[18px] xl:text-[17px] ">
                  
               
                  <div className="bg-white flex  flex-col   text-center text-[2em] font-bold text-purple-800 items-center leading-[2.5em] w-[95%] sm:w-[85%] xl:w-[60%] h-[50%] sm:h-[50%] justify-start gap-[20%] rounded-4xl">
                                      <h1 className=" flex  underline text-purple-800 text-[1.7em] justify-center items-center ">Reset password</h1>
                                  <div className=" flex flex-col items-center justify-center gap-[10%] w-[85%] sm:w-[70%] lg:w-[60%] h-[40%]">
                                        <input type="text" className="h-[40%] w-[85%] 2xl:w-[80%] text-[1em] border-2 rounded-2xl " placeholder="Email-address"/>
                                          <p className="text-red-500 flex items-center justify-center text-[0.7em] w-full h-[10%] text-center"> sdasaasdsdsadsad </p>
                                      <button className=" buttonstyle text-[1em] flex items-center justify-center  text-center h-[30%] w-[30%] 2xl:w-[23%]"> Send</button>
                                   </div>
                                              
                  </div>

        </div>


                      )        
                   
                    }