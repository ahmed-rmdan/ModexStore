import React from "react";
import { NavLink } from "react-router-dom";
import { Location } from "../location";


export const Orderadmin:React.FC<{details:string,address:string,id:string,state:string,totalprice:number,date:string,username:string,location:[number,number],payment:string}>=(props)=>{
    
    return(
                                              
 <li  key={props.id} className="flex flex-col   w-[90%]   bg-white min-h-[32%] max-h-[32%]  text-purple-800  rounded-2xl  items-center justify-around text-[9px]  sm:text-[12.5px] lg:-text-[17px] xl:text-[19px] " >
            <div className="flex flex-row items-center justify-around w-[95%] h-[80%]">
                
                       <div className="flex h-full items-center w-[45%] text-[0.25em]" >
                           <Location  location={props.location}></Location>
                       </div>
                      <div className="flex flex-col w-[45%] h-full  justify-around">
                            <p className="font-bold"> {props.username}</p>
                            <p> {props.details}</p>
                             <p> At : {props.date}</p>
                            <p> To : {props.address}</p>
                            <p className="font-semibold"> Payment : {props.payment}</p>
                             <p > State : {props.state}</p>
                          <p className="font-bold"> TotalPrice: {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.totalprice)}</p> 
                      </div>
                   
                
            </div>

           <div className="flex flex-row h-[12%] xl:h-[15%] items-center  w-full text-[1.1em] justify-center gap-[15%]"> 
            <NavLink className='buttonstyle font-bold text-center self-center h-[75%] xl:h-[75%] w-[20%] xl:w-[12%] ' to={`/admin/orders/delete/${props.id}`}> Delete </NavLink>
            <NavLink className='buttonstyle font-bold self-center text-center h-[75%] xl:h-[75%] w-[20%] xl:w-[12%] ' to={`/admin/orders/edit/${props.id}`}> Edit </NavLink>
           </div>
            
 </li>

    )
}