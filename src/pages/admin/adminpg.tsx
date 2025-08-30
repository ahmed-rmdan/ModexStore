
import React, { useEffect } from "react"
import { Headeradmin } from "../../compononts/admin/navadmin"
import { Dshboard } from "../../compononts/admin/dashboard"
import { Outlet } from "react-router"
import { useMutation } from "@tanstack/react-query"
import { isadmin } from "../../https/https"
import { useNavigate } from "react-router"
import { useLocation } from "react-router-dom";


export const Adminpg:React.FC<{}>=()=>{
const navigate=useNavigate()
const location=useLocation()
const {mutate}=useMutation({
    mutationKey:['users'],
    mutationFn:isadmin,
    onError:()=>{
          navigate('/admin/login')
    },
    onSuccess:()=>{
        if(location.pathname==='/admin'||location.pathname==='/admin/'){
             navigate('/admin/products/allproducts')
        }
    },
    
    
})

useEffect(()=>{
mutate()
},[location.pathname])


    return(
        <div className="flex flex-col ">
              <Headeradmin></Headeradmin>
              <div className="flex flex-row text-[2px] sm:text-[3.5px]   lg:text-[4px]  xl:text-[4.5px] ">
             
                <Dshboard></Dshboard>
                 <Outlet></Outlet> 
              
              </div>
        </div>
    )
}

