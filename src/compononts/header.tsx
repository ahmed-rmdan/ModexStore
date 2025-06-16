import React from "react";


export const Header:React.FC<{}>=()=>{
    return(
           <nav className="flex flex-row  w-full p-10  justify-between items-center text-black h-[80px]  ">
             <h1 className="text-2xl  font-bold w-[15%]" > Clothes Shop</h1>
             <div className="flex flex-row items-center justify-evenly w-[40%] text-black font-semibold ">
                <button className="cursor-pointer hover:text-purple-800 hover:text-[18px] transition-all duration-200"> Shop</button>
                <button className="cursor-pointer hover:text-purple-800 hover:text-[18px] transition-all duration-200"> categories</button>
                <button className="cursor-pointer hover:text-purple-800 hover:text-[18px] transition-all duration-200"> contact</button>
                <button className="cursor-pointer hover:text-purple-800 hover:text-[18px] transition-all duration-200"> LOCATIONS</button>
                <button className=""> cart 0</button>
             </div>
             <form className="flex flex-row justify-between w-[25%]">

              <div className="flex flex-row gap-2.5 items-center ">
                <p>user</p>
                <input type="text" className="w-[100px] border-black border-2"></input>
             </div>
             <div className="flex flex-row gap-2.5 items-center ">
                   <p>password</p>
                <input type="text" className="w-[100px] border-black border-2 focus:border-purple-800 focus:border-2"></input>
             
             </div>
             <button className=" border-2 border-purple-800 bg-purple-800 text-white rounded-[10px] w-[90px] cursor-pointer">log in</button>

             </form>
          
             
           </nav>
    )
}