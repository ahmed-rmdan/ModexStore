import React from "react";

function handlesignin(){

}


export const Loginadmin:React.FC<{}>=()=>{
    return(
            <div className=" flex items-center justify-center h-[670px] sm:h-[870px] w-full text-[1.3em] sm:text-[1.1em]  bg-gray-200">

                  <div className="bg-white flex flex-col items-center justify-around h-[50%] sm:h-[70%] rounded-4xl w-[90%] sm:w-[85%]  xl:w-[70%] ">
                      <h1 className=" flex  underline text-purple-800 text-[7em] font-bold justify-center items-center ">Sign In</h1>
                <form className="flex flex-col h-[55%] w-[95%] sm:w-[75%] items-center  justify-start  " onSubmit={handlesignin}>
                        <div className="flex flex-col h-[36%] gap-[10%] w-[60%] items-center justify-center ">
                             <p className="text-[4.6em] text-purple-800">UserName</p>
                        <input className="h-[36%] w-full border-2 border-purple-800 rounded-2xl text-[4.3em]" type="text" name="username"></input>
                        </div >
                        <div className="flex flex-col h-[36%] gap-[10%] w-[60%] items-center justify-center ">
                              <p className="text-[4.6em] text-purple-800"> PassWord</p>
                        <input className="h-[36%] w-full border-2 border-purple-800 text-[4.3em] rounded-2xl" type='password' name='password'></input>
                        </div>
                           <div className="flex flex-col items-center justify-around w-[22%] sm:w-[17%] gap-1 h-[23%]">
                                 <p className="text-red-600" style={{height:'15px'}} > </p>
                              <button className="buttonstyle h-[50%] w-full text-[4.5em] text-center" >login</button>
                               
                           </div>
                           
                    </form>
                    <button className="h-[7%] text-[4.1em] text-red-500 cursor-pointer hover:underline">reset yout password</button>

                  
                  </div>
                     
            </div>
                
                      
    )
          
}