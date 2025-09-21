import React from "react";
import { useAppDispatch } from "../../store/hook";
import { QueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useractions } from "../../store/store";
import { loginadmin } from "../../https/https";

export const Loginadmin:React.FC<{}>=()=>{

         const dispatch=useAppDispatch()
      const queryClient=new QueryClient()
const navigate=useNavigate()
const {mutate,isError,error}=useMutation({
mutationKey:['user'],
mutationFn:loginadmin,
onSuccess:(data) =>{   
      dispatch(useractions.setthetoken({token:data.token}))
          setTimeout(()=>{
                    dispatch(useractions.deletethetoken())
                    navigate('/admin')
             },3300000)
   queryClient.invalidateQueries({ queryKey: ['user'] })
  return navigate('/admin/products/allproducts')
}
})


function handlesignin(ev:React.FormEvent<HTMLFormElement>){
    ev.preventDefault()
      const data = new FormData(ev.currentTarget);
         mutate(data)

}
    return(
            <div className=" flex items-center justify-center h-[670px] sm:h-[870px] w-full text-[1.3em] sm:text-[1.1em]   bg-gray-200">

                  <div className="bg-white flex flex-col items-center justify-center gap-[6%] h-[55%] sm:h-[70%] rounded-4xl w-[90%] sm:w-[85%]   xl:w-[70%] 2xl:w-[60%] ">
                      <h1 className=" flex  underline text-purple-800 text-[9em] font-bold justify-center items-center ">Sign In</h1>
                <form className="flex flex-col h-[70%] sm:h-[55%] w-[95%] sm:w-[90%] lg:sm:w-[75%] items-center  justify-start  " onSubmit={handlesignin}>
                        <div className="flex flex-col h-[36%] gap-[10%] w-[60%] items-center justify-center ">
                             <p className="text-[4.6em] text-purple-800">UserName</p>
                        <input className="h-[36%] w-full border-2 border-purple-800 rounded-2xl text-[4.3em]" type="text" name="username"></input>
                        </div >
                        <div className="flex flex-col h-[36%] gap-[10%] w-[60%] items-center justify-center ">
                              <p className="text-[4.6em] text-purple-800"> PassWord</p>
                        <input className="h-[36%] w-full border-2 border-purple-800 text-[4.3em] rounded-2xl" type='password' name='password'></input>
                        </div>
                          <div className="flex flex-col items-center justify-around w-[95%]  h-[8%]">
                                 <p className="text-red-600 flex items-center justify-center text-[3.5em]  text-center font-semibold"  >
                                    {isError?error.message:''}
                    
                                     </p>
                           </div>
                           <div className="flex flex-row items-center justify-around w-[27%] sm:w-[22%] lg:w-[17%] gap-1 h-[23%]">
                                 <p className="text-red-600" style={{height:'15px'}} > </p>
                              <button className="buttonstyle h-[55%] w-full text-[5.2em] sm:text-[4.8em] text-center font-bold" >login</button>
                               
                           </div>
                           
                    </form>
                  

                  
                  </div>
                     
            </div>
                
                      
    )
          
}