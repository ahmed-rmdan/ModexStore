import React from "react";

function handlesignin(){

}


export const Signup:React.FC<{}>=()=>{
    return(
            <div className=" flex items-center justify-center h-[760px] text-[12px] sm::text-[14px] xl:text-[16px]   bg-gray-200">

                  <div className="bg-white flex flex-col items-center justify-around h-[90%] rounded-4xl w-[85%] sm:w-[70%] lg:w-[50%]">
                      <h1 className=" flex  underline text-purple-800 font-bold h-[5%] text-[2.3em] justify-center items-center ">Sign Up</h1>
                     <form className="flex flex-col gap-[1%] h-[90%] w-[95%] sm:w-[75%] items-center  justify-start  " onSubmit={handlesignin}>
                          <div className="flex flex-col h-[12%]  w-[60%] items-center justify-center ">
                             <p className="text-[1.6em] h-[50%] text-purple-800">name</p>
                        <input className="h-[50%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]" type="text" name="name"></input>
                        </div >
                        <div className="flex flex-col h-[12%]  w-[60%] items-center justify-center ">
                             <p className="text-[1.6em] h-[50%] text-purple-800">UserName</p>
                        <input className="h-[50%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]" type="text" name="username"></input>
                        </div >
                        <div className="flex flex-col h-[12%]  w-[60%] items-center justify-center ">
                             <p className="text-[1.6em] h-[50%] text-purple-800">Password</p>
                        <input className="h-[50%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]" type="text" name="password"></input>
                        </div >
                          <div className="flex flex-col h-[12%]  w-[60%] items-center justify-center ">
                             <p className="text-[1.6em] h-[50%] text-purple-800">Confirm Password</p>
                        <input className="h-[50%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]" type="password" name="password"></input>
                        </div >
                            <div className="flex flex-col h-[12%]  w-[60%] items-center justify-center ">
                             <p className="text-[1.6em] h-[50%] text-purple-800">Email</p>
                        <input className="h-[50%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]" type="email" name="email"></input>
                        </div >
                            <div className="flex flex-col h-[12%]  w-[60%] items-center justify-center ">
                             <p className="text-[1.6em] h-[50%] text-purple-800">Telphone</p>
                        <input className="h-[50%] w-full border-2 border-purple-800 rounded-2xl text-[1.3em]" type="number" name="telphone"></input>
                        </div >
                           

                           <div className="flex flex-col items-center justify-around w-[22%] sm:w-[17%] gap-1 h-[15%]">
                                 <p className="text-red-600 flex h-[50%]  items-center  "  >sasdadsadsadasdsadasd </p>
                              <button className="buttonstyle h-[50%] w-full text-[1.4em] text-center" >SignUp</button>
                               
                           </div>
                           
                    </form>
                
                  </div>
                     
            </div>
                
                      
    )
          
}