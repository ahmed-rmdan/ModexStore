import React from "react";

import { Orderadmin } from "../../compononts/admin/orderadmin";
import { PAGES } from "../../compononts/pages";


export const Ordersadminpg:React.FC<{}>=()=>{
   
    return(
            <div className=" flex flex-col items-center justify-around h-[760px] sm:h-[1050px] w-full  bg-gray-200">

                           <h1 className=" flex underline text-purple-800 text-[12em] h-[5%] justify-center items-center font-bold ">Orders</h1>
                                                 
                                                <ul className="flex flex-col min-h-[80%] w-[85%] sm:w-[70%] justify-between  items-center">  
                                                    <Orderadmin payment="ondelivery" username="ahmed" location={[30.78784930823166,31.001840190007467]} details="1x shoes + 2 tshirts" totalprice={700} address="ALHARM - GIZA - MAROYOTYA" state="preparing" id='szqerdlf88' date="8/7/2025"></Orderadmin>
                                                      <Orderadmin payment="ondelivery" username="ahmed" location={[30.78784930823166,31.001840190007467]} details="1x shoes + 2 tshirts" totalprice={700} address="ALHARM - GIZA - MAROYOTYA" state="preparing" id='szqerdlf88' date="8/7/2025"></Orderadmin>
                                                      <Orderadmin payment="ondelivery" username="ahmed" location={[30.78784930823166,31.001840190007467]} details="1x shoes + 2 tshirts" totalprice={700} address="ALHARM - GIZA - MAROYOTYA" state="preparing" id='szqerdlf88' date="8/7/2025"></Orderadmin>
                                                     
                                                      
                                                </ul>
                                                <div className=" flex items-center justify-center text-[3.5em] h-[5%]">
                                                    <PAGES ></PAGES>
                                                </div>
                                                
                     
            </div>
                
                      
    )
          
}