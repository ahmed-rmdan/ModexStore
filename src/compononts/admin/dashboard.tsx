import React from "react";

import { NavLink } from "react-router-dom";



export const Dshboard:React.FC<{}>=()=>{

  return(

            
             
           <div className="flex flex-col gap-[60px] sm:gap-[90px] h-[500px] sm:h-[700px] xl:h-[800px] w-[30%] xl:w-[25%] items-center justify-center bg-white   ">
                  <div className="flex flex-col items-center justify-center h-[300px] gap-[50px] xl:gap-[70px] text-[6em] ">
                        <NavLink to={'/admin/products'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> Products</NavLink>
                <NavLink to={'/admin/addproduct'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> Add Product</NavLink>
                <NavLink className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}  to={'/admin/orders'}> Orders</NavLink>
               <NavLink className={({isActive})=>isActive?"cursor-pointer underline  text-purple-800":"cursor-pointer hover:text-purple-800 "} to={'/admin/offers'}> Offers</NavLink> 
                  </div>
                  <div className="flex flex-col h-[80px] sm:h-[150px] w-[80%] border-t-1  items-center justify-center ">
               

           
             <button className="  text-red-600  w-[5em] cursor-pointer text-[5.5em]  hover:underline">LogOut</button>  
                         

                  </div>



                
            </div>
     
        
            
            
            

            
          
             
           

  )
}
    
