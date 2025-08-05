import React from "react";



export const Searchproduct:React.FC<{}>=()=>{
    return(
           
                       <div className="flex flex-row items-center  justify-between h-[40px] sm:h-[50px] w-[65%] sm:w-[40%] xl:w-[30%]">
                                 <input type='text' placeholder="product name" className="w-[60%] h-[90%] text-[1.3em] sm:text-[1.1em] bg-white border-purple-800 border-2 rounded-2xl"></input>
                                 <button className=" buttonstyle w-[30%] h-[70%] text-[1.2em]">Search</button>
                       </div>

    )
}