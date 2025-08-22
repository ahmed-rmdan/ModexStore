import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Searchproduct:React.FC<{}>=()=>{
    const search=useRef<null|HTMLInputElement>(null)
    const navigate=useNavigate()
   function handleclick(){
        if(search.current?.value===null || search.current?.value==='' ) return
       navigate(`/products/search/${search.current?.value}`)

   }
    return(
           
                       <div className="flex flex-row items-center  justify-center gap-[5%] h-[40px] sm:h-[50px] w-[65%] sm:w-[40%] xl:w-[30%]">
                                 <input type='text' placeholder="product name" className="w-[70%] h-[90%] text-[1.3em] sm:text-[1.1em] bg-white
                                  border-purple-800 border-2 rounded-2xl" ref={search}></input>
                                 <button className=" buttonstyle w-[30%] h-[70%] text-[1.2em]" onClick={handleclick}>Search</button>
                       </div>

    )
}