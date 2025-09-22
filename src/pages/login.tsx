import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { login } from "../https/https";
import { useAppDispatch } from "../store/hook";
import { useractions } from "../store/store";
import { useAppSelector } from "../store/hook";


export const Login:React.FC<{}>=()=>{
 const activepage=useAppSelector((state)=>state.pagination.page)
      const dispatch=useAppDispatch()
      const queryClient=new QueryClient()
const navigate=useNavigate()
const {mutate,isError,error,isPending}=useMutation({
mutationKey:['user'],
mutationFn:login,
onSuccess:(data) =>{   
      console.log(data.token)
      dispatch(useractions.setthetoken({token:data.token}))
      setTimeout(()=>{
             dispatch(useractions.deletethetoken())
             navigate('/')
      },3300000)
   queryClient.clear()
    queryClient.invalidateQueries({queryKey:['wishlist',activepage]})
     queryClient.invalidateQueries({queryKey:['orders',activepage]})
     
  return navigate('/')
}
})


function handlesignin(ev:React.FormEvent<HTMLFormElement>){
    ev.preventDefault()
      const data = new FormData(ev.currentTarget);
         mutate(data)


}

    return(
            <div className=" flex items-center justify-center h-[760px] text-[12px] sm::text-[14px] xl:text-[16px]   bg-gray-200">

                  <div className="bg-white flex flex-col items-center justify-around h-[70%] rounded-4xl w-[85%] sm:w-[70%] lg:w-[50%]">
                      <h1 className=" flex  underline text-purple-800 text-[2.3em] justify-center items-center font-bold ">Sign In</h1>
                <form className="flex flex-col h-[55%] w-[95%] sm:w-[75%] items-center  justify-start  " onSubmit={handlesignin}>
                        <div className="flex flex-col h-[36%] gap-[10%] w-[65%] items-center justify-center ">
                             <p className="text-[1.6em] text-purple-800">UserName</p>
                        <input className="h-[36%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]" type="text" name="username"></input>
                        </div >
                        <div className="flex flex-col h-[36%] gap-[10%] w-[65%] items-center justify-center ">
                              <p className="text-[1.6em] text-purple-800"> PassWord</p>
                        <input className="h-[36%] w-full border-2 border-purple-800 text-[1.3em] rounded-2xl" type='password' name='password'></input>
                        </div>
                           <div className="flex flex-col items-center justify-around w-[95%]  h-[12%]">
                                 <p className="text-red-600 text-center font-semibold"  >
                                    {isError?error.message:''}
                                    
                                     </p>
                           </div>
                           <button className="buttonstyle w-[22%] sm:w-[22%] h-[15%] xl:w-[17%] text-[1.5em] font-bold text-center"  disabled={isPending} >Login</button>
                           
                    </form>
                    <NavLink to={'/resetpass'} className="h-[7%] text-[1.1em] font-semibold text-red-500 cursor-pointer hover:underline">forgot your password ?</NavLink>

                  <NavLink to='/signup' className="buttonstyle flex justify-center items-center text-center font-semibold  w-[27%] sm:w-[17%] 2xl:w-[14%]  h-[6%] sm:h-[6%] xl:h-[8%]  text-[1.5em]">SignUp</NavLink>
                  </div>
                     
            </div>
                
                      
    )
          
}