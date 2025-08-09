import React from "react"


export const Ordereditpg:React.FC<{}>=()=>{


    


    return(

                <div className="flex w-full flex-col items-center justify-center gap-[5%] bg-gray-200 h-[670px] sm:h-[900px] ">
                          <h1 className=" flex  underline text-purple-800 ] text-[10em] font-bold justify-center items-center "> Edit Order</h1>
                      <form className=" flex flex-col text-[5.8em] sm:text-[4.8em] lg:text-[4.2em] 2xl:text-[5em] justify-center gap-[8%] text-purple-800  bg-white items-center h-[40%] w-[92%] sm:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] rounded-2xl"  >
                              
                        <div className="h-[30%] flex w-[95%] sm:w-[70%] lg:w-[50%] justify-center  flex-row items-center gap-[5%]">
                              <p className="w-[40%] text-[1.3em] font-semibold text-center">state :</p>
                             <select className="w-[40%] text-center  border-2 border-purple-900" name="type" required>
                            <option>OnDelivery</option>
                            <option>Prepearing</option>
                            <option>OutForDelivery</option>
                            <option>Done</option>
                          
                             </select>
                        </div>
                                     
                              <button className="buttonstyle font-bold w-[28%] text-[1.3em] sm:w-[20%] lg:w-[15%] h-[17%]  sm:h-[16%] " >Edit</button>
                                 
                    </form>
                                     
                </div>   
                
                
      
    )
}