import React from "react";

import { Orderuser } from "../compononts/userorder";
import { PAGES } from "../compononts/pages";


export const Myorders:React.FC<{}>=()=>{
    return(
            <section className="w-[100%] flex flex-col gap-[2%] h-[800px] sm:-h-[700px] lg:h-[1100px] items-center  bg-gray-200 text-[8px] md:text-[10px] lg:text-[13px] xl:text-[13px]  2xl:text-[15px] ">
                      
                      
                                <h1 className="text-purple-800 text-[2.5em] underline font-bold mt-[30px]"> My Orders</h1>
                              

                    
                       <ul className="flex flex-row flex-wrap justify-around h-[80%] sm:h-[70%] xl:h-[80%] md:w-[95%] lg:w-[85%] xl:w-[80%]  items-center  ">
                            <Orderuser payment="OnDelivery" details="1x shoes + 2 tshirts" totalprice={700} address="ALHARM - GIZA - MAROYOTYA" state="preparing" id='sriqr8' date="8/7/2025" ></Orderuser>
                            <Orderuser  payment="OnDelivery" details="1x shoes + 2 tshirts" totalprice={700} address="ALHARM - GIZA - MAROYOTYA" state="preparing" id='sabbc8' date="8/7/2025" ></Orderuser>
                            <Orderuser  payment="OnDelivery" details="1x shoes + 2 tshirts" totalprice={700} address="ALHARM - GIZA - MAROYOTYA" state="preparing" id='safeq8' date="8/7/2025"></Orderuser>
                            <Orderuser  payment="OnDelivery" details="1x shoes + 2 tshirts" totalprice={700} address="ALHARM - GIZA - MAROYOTYA" state="preparing" id='szqerdlf88' date="8/7/2025"></Orderuser>
                       
                       </ul>

                       <PAGES></PAGES>                        

            </section>




    )
}