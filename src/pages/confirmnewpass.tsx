
import React from "react";
import { useRef } from "react";

import { useMutation } from "@tanstack/react-query";
import { confirmnewpass } from "../https/https";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Confirmnewpass:React.FC<{}>=()=>{
 const [searchParams, setSearchParams] = useSearchParams();
 const navigate=useNavigate()
const emailinput=useRef<HTMLInputElement|null>(null)
const {mutate,isError,error}=useMutation({
    mutationFn:confirmnewpass,
    onSuccess:()=>{
        navigate('/signin')
    }
})

function handleconfirm(ev:React.FormEvent<HTMLFormElement>){
    ev.preventDefault()
    
    const data = new FormData(ev.currentTarget);
    const email=searchParams.get('email')
    const token=searchParams.get('token')
    if(!email || !token) return
  mutate({form:data,email,token})
}
console.log(isError)


    return(       
       
       <div className="bg-gray-200 flex justify-center items-center w-full h-[700px] sm:h-[850px] text-[9px]  sm:text-[12.5px] md:text-[11px] lg:-text-[15px] xl:text-[16px] ">
                  
               
                  <div className="bg-white flex  flex-col   text-center text-[2em] font-bold text-purple-800 items-center leading-[2.5em] w-[95%] sm:w-[75%] xl:w-[55%] h-[40%] sm:h-[50%] justify-start gap-[17%] rounded-4xl">
                                      <h1 className=" flex  underline text-purple-800 text-[1.4em] justify-center items-center ">Set New Password</h1>
                                  <form onSubmit={handleconfirm} className=" flex flex-col items-center justify-center gap-[13%] w-[85%] sm:w-[70%] lg:w-[60%] h-[40%]">
                                        <input ref={emailinput} name="newpass" type='password' className="h-[38%] w-[85%] 2xl:w-[80%] text-[1em] border-2 rounded-2xl " placeholder="new password"/>
                                        <input ref={emailinput} name="confirmnewpass" type='password' className="h-[38%] w-[85%] 2xl:w-[80%] text-[1em] border-2 rounded-2xl " placeholder="confirm new password"/>
                                    <p className="text-red-500 flex items-center justify-center text-[0.7em] w-full h-[10%] text-center">{isError?error.message:''}</p>
                                      <button className=" buttonstyle text-[1em] flex items-center justify-center  text-center h-[30%] w-[32%] 2xl:w-[25%]" > Confirm</button>
                                   </form>
                                              
                  </div>

        </div>


                      )        
                   
                    }