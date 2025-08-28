import React from "react";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hook";
import { useractions } from "../../store/store";

export const Dshboard:React.FC<{}>=()=>{
const [click,setclick]=useState<boolean>(false)
const navigate=useNavigate()
const dispatch=useAppDispatch()
function handleclick(){
    setclick(prev=>!prev)
}

function handlelogout(){
  const confirm=window.confirm('you are logging out are you sure ?')
  if(!confirm) return;
  dispatch(useractions.deletethetoken())
  navigate('/admin')
}
const token=localStorage.getItem('token')

  return(                 
           <div className="flex flex-col gap-[35px] sm:gap-[60px]  lg:gap-[40px] ] h-[600px] sm:h-[700px] xl:h-[800px] w-[30%] xl:w-[25%] items-center justify-center bg-white   ">
                  <div className="flex flex-col items-center justify-start h-[380px] sm:h-[450px] lg:h-[450px] xl:h-[500px] gap-[30px] sm:gap-[35px] lg:gap-[25px] xl:gap-[35px] text-[6em] ">
                        <button onClick={handleclick} className="cursor-pointer relative hover:text-purple-800 "> 
                        Products      
                                     </button>
                                    { click? <div className=" flex flex-col lg:min-h-[200px] items-center justify-center xl:mt-[-20px] gap-[10px] text-[0.75em] sm:text-[0.6em] w-[70%] ">
                                            <NavLink to={'/admin/products/allproducts'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> All Product</NavLink>
                                            <NavLink to={'/admin/products/t-shirts'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> T-shirts</NavLink>
                                            <NavLink to={'/admin/products/pants'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> Pants</NavLink>
                                            <NavLink to={'/admin/products/jeans'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> Jeans</NavLink>
                                            <NavLink to={'/admin/products/socks'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> Socks</NavLink>
                                            <NavLink to={'/admin/products/jackets'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> Jackets</NavLink>
                                            <NavLink to={'/admin/products/shoes'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> Shoes</NavLink>

                                     </div>:''}
                <NavLink to={'/admin/addproduct'} className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}> Add Product</NavLink>
                <NavLink className={({isActive})=>isActive?"cursor-pointer text-purple-800 underline ":"cursor-pointer hover:text-purple-800 "}  to={'/admin/orders'}> Orders</NavLink>
               <NavLink className={({isActive})=>isActive?"cursor-pointer underline  text-purple-800":"cursor-pointer hover:text-purple-800 "} to={'/admin/offers'}> Offers</NavLink> 
                  </div>
                  { !token?'':
                  <div className="flex flex-col h-[80px] sm:h-[120px] lg:h-[80px] w-[80%] border-t-1  items-center justify-center ">
             <button className="  text-red-600  w-[5em] cursor-pointer text-[5.5em]  hover:underline" onClick={handlelogout}>LogOut</button>  
                        
                 </div> }



                
            </div>
     
        
            
            
            

            
          
             
           

  )
}
    
