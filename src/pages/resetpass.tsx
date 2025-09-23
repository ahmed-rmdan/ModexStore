
import React from "react";
import { useRef } from "react";
import { resetpassword } from "../https/https";
import { useMutation } from "@tanstack/react-query";



export const Resetpass:React.FC<{}>=()=>{

const emailinput=useRef<HTMLInputElement|null>(null)
const {mutate,isError,error,isPending}=useMutation({mutationFn:resetpassword})
function handlesend(){
  const email=emailinput.current?.value
  console.log(email)
  if(!email){
    return;
  }
  mutate(email)
}
console.log(isError)


    return(       
       
       <div className="bg-gray-200 flex justify-center items-center w-full h-[700px] sm:h-[850px] text-[9px]  sm:text-[12.5px] md:text-[11px] lg:-text-[15px] xl:text-[16px] ">
                  
               
                  <div className="bg-white flex  flex-col   text-center text-[2em] font-bold text-purple-800 items-center leading-[2.5em] w-[95%] sm:w-[75%] xl:w-[55%] h-[40%] sm:h-[50%] justify-start gap-[17%] rounded-4xl">
                                      <h1 className=" flex  underline text-purple-800 text-[1.4em] justify-center items-center ">Reset password</h1>
                                  <div className=" flex flex-col items-center justify-center gap-[10%] w-[85%] sm:w-[70%] lg:w-[60%] h-[40%]">
                                        <input ref={emailinput} type="email" className="h-[35%] w-[85%] 2xl:w-[80%] text-[1em] border-2 rounded-2xl " placeholder="Email-address"/>
                                    <p className="text-red-500 flex items-center justify-center text-[0.7em] w-full h-[10%] text-center">{isError?error.message:''}</p>
                                      <button className=" buttonstyle text-[1em] flex items-center justify-center  text-center h-[30%] w-[30%] 2xl:w-[24%]" onClick={handlesend}> {isPending?'..pending':'Send'}</button>
                                   </div>
                                              
                  </div>

        </div>


                      )        
                   
                    }