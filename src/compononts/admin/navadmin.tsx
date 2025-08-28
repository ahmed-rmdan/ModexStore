import React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hook";
import { useractions } from "../../store/store";
import { useNavigate } from "react-router-dom";

export const Headeradmin:React.FC<{}>=()=>{
  const dispatch=useAppDispatch()
   const navigate=useNavigate()
useEffect(()=>{
  const token=localStorage.getItem('token')
  if(!token){
 return;
  }else{
   const tokendate:number=JSON.parse(localStorage.getItem('date') as string)
   console.log(tokendate)
   
   if(!tokendate){
    dispatch(useractions.getthetoken())
    setTimeout(()=>{
        dispatch(useractions.deletethetoken())
        navigate('/admin')
    },3300000)

   }else{
    const expiredtime=Date.now() - tokendate
   console.log(expiredtime)
   if(expiredtime>3300000){
    dispatch(useractions.deletethetoken())
   
   }else{
    const timeleft=3300000-expiredtime
    console.log(timeleft)
     dispatch(useractions.getthetoken())
         setTimeout(()=>{
        dispatch(useractions.deletethetoken())
        navigate('/')
    },timeleft)   
      
   }

   }
  


  }



},[])

return(
           <nav className="flex flex-row sticky bg-white z-[10000]  w-full  p-3  sm:p-10 justify-around items-center text-center text-black text-[2px] sm:text-[4px]   lg:text-[4.5px] xl:text-[5.5px] 2xl:text-[6px] h-[40px]   ">
            <h1 className=" text-start  text-purple-900 font-bold w-[35%]   text-[7em]     "  > Modex Store</h1>
             <p className="  text-start  w-[50%]  text-[5.8em]  font-bold  text-purple-800     ">
               Admin Dshboard
             
             </p>
             
             
           </nav>
    )
}

    
