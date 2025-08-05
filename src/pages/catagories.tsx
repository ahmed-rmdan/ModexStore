import React from "react"
import tshirts from '../assets/t-shirt-svgrepo-com.svg'
import jackets from '../assets/jacket-svgrepo-com.svg'
import jeans from '../assets/jeans-4-svgrepo-com.svg'
import shirts from '../assets/shirt-svgrepo-com.svg'
import shoes from '../assets/shoes-shoe-svgrepo-com.svg'
import socks from '../assets/socks-svgrepo-com.svg'
import { NavLink } from "react-router-dom"
const catagories:{name:string,img:string}[]=[{name:'T-shirts',img:tshirts},{name:'Jackets',img:jackets},{name:'Jeans',img:jeans},{name:'Shirts',img:shirts},
    {name:'shoes',img:shoes},{name:'Socks',img:socks}
]


export const Catagories:React.FC<{}>=()=>{
    return(
          <section className="container h-[760px] items-center mx-auto flex flex-col justify-start gap-[50px] ">
                     <h1 className="color text-center text-purple-800 font-bold text-[2em] sm:text-[3em] underline">Categories</h1>
                      
                      <div className=" grid  sm:w-[90%] items-center self-center gap-y-[20px] mb-[20px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">

                               {catagories.map(elm=>{
                                return <NavLink to={`/products/${elm.name}`}><button className=" h-[70px] sm:h-[100px] bg-gray-100 w-[250px] sm:w-[340px]  xl:w-[350px] hover:bg-gray-300 cursor-pointer" ><div className="flex flex-row w-full h-full">
                                 <img className="w-[50%] h-[100%]" src={elm.img}></img>
                                 <p className="flex text-purple-800 font-bold text-2xl self-center w-[50%] h-[100%] items-center justify-center  ">{elm.name}</p>
                                </div>
                                </button></NavLink> 
                               })}
                       
                                
                                
                            
                      </div>

                        



          </section>  
    )
}     