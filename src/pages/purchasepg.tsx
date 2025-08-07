




import React from "react";
import { Listitem } from "../compononts/listitem";
import { useAppSelector } from "../store/hook";
import { useRef } from "react";




export const Puchasepg:React.FC<{}>=()=>{
const cart=useAppSelector((state)=>state.cart)

   const totalprice=cart.reduce((curr,elm)=>{
    return  curr+(elm.quantity*elm.price)
},0)


const address=useRef(null)


    return(       



       
       <div className="bg-gray-200 flex justify-center items-center w-full h-[950px] text-[9px]  sm:text-[12.5px] lg:-text-[17px] xl:text-[17px] ">
                  
               
                  <div className="bg-white flex flex-col items-center w-[95%] sm:w-[65%] h-[90%] justify-center gap-[7%] rounded-2xl">
                    
                      <progress value={30} max={100} className="custom-progress border-2  border-purple-800 rounded-[8px] w-[45%] sm:w-[30%] h-[1.4em] "></progress>
                 
                     


                         <div className="flex flex-col h-[30%] w-[80%] sm:w-[60%] items-center justify-center gap-[5%] overflow-auto bg-gray-100 rounded-2xl">
                                            <Listitem type="purchase" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                              <Listitem type="purchase" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                                 <Listitem type="purchase" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                                <Listitem type="purchase" price={100} id="151515" imgeurl="" name="blue shirt wit v cut " quantity={1}></Listitem>
                                   
                         </div>
                          <p className="text-purple-800  text-[1.6em] font-extrabold"> Your TotalPrice : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(totalprice)} </p>
                              <div className="flex flex-col items-center justify-around w-[95%] sm:w-[80%] h-[20%]">

                                   <input className="w-[55%] rounded-[8px] text-[1.2em] border-2 border-purple-800  h-[25%]" type='text' required ref={address} placeholder="Delivery Address" />
                                        <p className="text-purple-800 text-[1.5em]">&</p>
                                      <button className="buttonstyle w-[45%] 2xl:w-[27%] text-center text-[1.1em] h-[17%] sm:h-[20%]">Click here to Add Location</button>

                             </div>

                    <button className="buttonstyle w-[32%] xl:w-[20%] h-[5%] text-[1.5em]">Go To Payment</button>


                  </div>





        </div>





                     



                      )  
                    
                    
                    
                    
                    
                    }





