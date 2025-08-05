import React from "react";
import { NavLink } from "react-router-dom";
function handlesignin(){

}


export const Login:React.FC<{}>=()=>{
    return(
            <div className=" flex items-center justify-center h-[760px] text-[12px] sm::text-[14px] xl:text-[16px]   bg-gray-200">

                  <div className="bg-white flex flex-col items-center justify-around h-[70%] rounded-4xl w-[85%] sm:w-[70%] lg:w-[50%]">
                      <h1 className=" flex  underline text-purple-800 text-[2.3em] justify-center items-center ">Sign In</h1>
                <form className="flex flex-col h-[55%] w-[95%] sm:w-[75%] items-center  justify-start  " onSubmit={handlesignin}>
                        <div className="flex flex-col h-[36%] gap-[10%] w-[60%] items-center justify-center ">
                             <p className="text-[1.6em] text-purple-800">UserName</p>
                        <input className="h-[36%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]" type="text" name="username"></input>
                        </div >
                        <div className="flex flex-col h-[36%] gap-[10%] w-[60%] items-center justify-center ">
                              <p className="text-[1.6em] text-purple-800"> PassWord</p>
                        <input className="h-[36%] w-full border-2 border-purple-800 text-[1.3em] rounded-2xl" type='password' name='password'></input>
                        </div>
                           <div className="flex flex-col items-center justify-around w-[22%] sm:w-[17%] gap-1 h-[23%]">
                                 <p className="text-red-600" style={{height:'15px'}} > </p>
                              <button className="buttonstyle h-[50%] w-full text-[1.5em] text-center" >login</button>
                               
                           </div>
                           
                    </form>
                    <button className="h-[7%] text-[1.1em] text-red-500 cursor-pointer hover:underline">reset yout password</button>

                  <NavLink to='/signup' className="buttonstyle item-center text-center  w-[25%] sm:w-[15%]  h-[6%] sm:h-[6%] xl:h-[7%]  text-[1.5em]">SignUp</NavLink>
                  </div>
                     
            </div>
                
                      
    )
          
}