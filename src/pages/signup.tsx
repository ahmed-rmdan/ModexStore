import React from "react";
import { useMutation } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createuser } from "../https/https";

export const Signup:React.FC<{}>=()=>{
const queryClient=new QueryClient()
const navigate=useNavigate()
const {mutate,isError,error,isPending}=useMutation({
mutationKey:['user'],
mutationFn:createuser,
onSuccess:()=>{   
   queryClient.invalidateQueries({ queryKey: ['user'] })
  return navigate('/')
}
})



function handlesignup(ev:React.FormEvent<HTMLFormElement>){

     
     ev.preventDefault()
      const data = new FormData(ev.currentTarget);
      mutate(data)

}

    return(
            <div className=" flex items-center justify-center h-[760px] text-[12px] sm::text-[14px] xl:text-[16px]   bg-gray-200">

                  <div className="bg-white flex flex-col items-center justify-around h-[90%] rounded-4xl w-[85%] sm:w-[70%] lg:w-[50%]">
                      <h1 className=" flex  underline text-purple-800 font-bold h-[5%] text-[2.3em] justify-center items-center ">Sign Up</h1>
                     <form className="flex flex-col gap-[1%] h-[90%] w-[95%] sm:w-[75%] items-center  justify-start  " onSubmit={handlesignup}>
                          <div className="flex flex-col h-[12%]  w-[70%] items-center justify-center ">
                             <p className="text-[1.6em] h-[50%] text-purple-800">name</p>
                        <input className="h-[50%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]" maxLength={20}  minLength={5} required type="text" name="name"></input>
                        </div >
                        <div className="flex flex-col h-[12%]  w-[70%] items-center justify-center ">
                             <p className="text-[1.6em] h-[50%] text-purple-800">UserName</p>
                        <input className="h-[50%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]" maxLength={20} minLength={6} required type="text" name="username"></input>
                        </div >
                        <div className="flex flex-col h-[12%]  w-[70%] items-center justify-center ">
                             <p className="text-[1.6em] h-[50%] text-purple-800">Password</p>
                        <input className="h-[50%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]" maxLength={20} minLength={6} required type="password" name="password"></input>
                        </div >
                          <div className="flex flex-col h-[12%]  w-[70%] items-center justify-center ">
                             <p className="text-[1.6em] h-[50%] text-purple-800">Confirm Password</p>
                        <input className="h-[50%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]" maxLength={20} minLength={6} required type="password" name="confirmpassword"></input>
                        </div >
                            <div className="flex flex-col h-[12%]  w-[70%] items-center justify-center ">
                             <p className="text-[1.6em] h-[50%] text-purple-800">Email</p>
                        <input className="h-[50%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]" minLength={6} required type="email" name="email"></input>
                        </div >
                            <div className="flex flex-col h-[12%]  w-[70%] items-center justify-center ">
                             <p className="text-[1.6em] h-[50%] text-purple-800">Telphone</p>
                        <input className="h-[50%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]"  required type="number" name="telphone"></input>
                        </div >
                           

                           <div className="flex flex-col items-center justify-around w-[70%] gap-1 h-[15%]">
                             <p className="text-red-600 flex h-[25%] w-[95%] sm:w-[85%]  text-center justify-center items-center  "  >
                                              {isError?error.message:''}
                                  </p>  
                                 
                              <button className="buttonstyle w-[37%] sm:w-[28%] 2xl:w-[25%] h-[50%]  text-[1.4em] font-bold text-center" disabled={isPending} >SignUp</button>
                               
                           </div>
                           
                    </form>
                
                  </div>
                     
            </div>
                
                      
    )
          
}