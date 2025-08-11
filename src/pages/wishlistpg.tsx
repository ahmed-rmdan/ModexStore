import React from "react";

import { Listitem } from "../compononts/listitem";
import { PAGES } from "../compononts/pages";
import {motion} from 'framer-motion'
const wishlists= [{type:'wishlist',id:'sadsafa',price:48,imgeurl:'',name:'tshirt',quantity:1},{type:'wishlist',id:'suiilk',price:48,imgeurl:'',name:'tshirt',quantity:1},
    {type:'wishlist',id:'suiilertk',price:48,imgeurl:'',name:'tshirt',quantity:1}
]



export const Wishlist:React.FC<{}>=()=>{
    return(
            <section className="w-[100%] flex flex-col gap-[2%] h-[800px] sm:-h-[700px] lg:h-[1100px] items-center  bg-gray-200 text-[8px] md:text-[10px] lg:text-[13px] xl:text-[13px]  2xl:text-[15px] ">
                      
                      
                                <h1 className="text-purple-800 text-[2.5em] underline font-bold mt-[30px]"> My Wishlist</h1>
                              

                    
                       <motion.ul variants={{invisible:{opacity:0,scale:0.5},visible:{opacity:1,scale:1,transition:{staggerChildren: 0.3}}}} initial='invisible' animate='visible'  className="flex flex-row flex-wrap justify-around h-[80%] sm:h-[70%] xl:h-[80%] md:w-[95%] lg:w-[85%] xl:w-[80%]  items-center  ">

                                {wishlists.map(elm=>{
                                        return <Listitem type={elm.type} price={elm.price} id={elm.id} imgeurl="" name={elm.name} quantity={1}></Listitem>
                                })}
                               
                       
                       </motion.ul>

                       <PAGES></PAGES>                        

            </section>




    )
}