import React from "react"
import { NavLink} from "react-router-dom"
import { useAppDispatch } from "../store/hook";
import { cartactions } from "../store/store";
import { Heart } from "lucide-react";
import {motion} from 'framer-motion'

export const Listitem:React.FC<{imgeurl:string,name:string,quantity:number,price:number,type:string,id:string}>=(props)=>{
    const dispatch=useAppDispatch()
  function handleAddcart(){
dispatch(cartactions.additeem({price:props.price,name:props.name,id:props.id,quantity:1}))
  }
  function handleremove(){
    dispatch(cartactions.removeitem({id:props.id}))
  }
  function handleincrease(){
    dispatch(cartactions.increase({id:props.id}))
  }
    function handledecrease(){
    dispatch(cartactions.decrease({id:props.id}))
  }


if(props.type==='cart' ){

    return(
      
                 <motion.li key={props.id} layout   initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -30, opacity: 0 }} transition={{bounce:0}}  className="flex flex-col min-w-[90%] max-w-[90%] bg-white min-h-[7em] justify-around" >
            <div className="flex flex-row w-full h-[65%] justify-around">
                   <img src={props.imgeurl} className="w-[40%] h-full" >
                
                  
                   </img>   
                   <div className="maininfo w-[55%] h-full flex flex-col items-center gap-[3%] justify-around ">
                         <p className="text-[0.7em] text-center text-purple-800 font-bold">{props.name}</p>
                         <p className="text-[0.6em] text-purple-800">quantity: {props.quantity}</p>
                         <p className="text-[0.6em] text-purple-800"> {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price*props.quantity)} </p>
                   </div>
             

             </div>
             <div className="itembuttons h-[30%] w-full flex flex-row justify-around items-center">
                <button className=" text-[0.9em] cursor-pointer  " onClick={handleincrease} >+</button>
                <button className=" text-[0.9em] cursor-pointer  " onClick={handledecrease} >-</button>
                <button className="buttonstyle text-[0.7em] w-[35%]  " onClick={handleremove} >remove</button>
                

             </div>
        </motion.li>

     
     


   
    )
}
if(props.type==='slider' ){
   
    return(

        <li className="flex flex-col min-w-[250px] max-w-[250px] bg-gray-100 h-[100%] text-2xl rounded-2xl  items-center justify-around" >
            <div className="flex flex-row w-[95%] h-[60%] justify-around">
                   <img src={props.imgeurl} className="w-[40%] h-full" >
                
                  
                   </img>   
                   <div className="maininfo w-[55%] flex flex-col items-center justify-around ">
                         <p className="text-[0.7em] text-center">{props.name}</p>
                       
                          <p className="text-[0.6em] text-red-600 line-through"> {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(200)}</p>
                         <p className="text-[0.6em] text-purple-800">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price)} </p>
                   </div>
             

             </div>
             <div className="itembuttons h-[25%] w-full flex flex-row justify-around items-center">
           
                <button className="buttonstyle text-[0.6em] w-[35%] h-[50%] font-bold  " onClick={handleAddcart} >Add to cart</button>
               <NavLink className="buttonstyle text-[0.5em] w-[40%] h-[50%] flex items-center justify-center font-bold   " to={`/product/${props.id}`}>Go to Product</NavLink> 
                

             </div>
        </li>
    )
}
if(props.type==='products')
    return(

 <li className="flex flex-col w-[90%] bg-gray-100 h-[150px]  rounded-2xl  items-center justify-around text-[10.2px] sm:text-[15px] lg:text-[20px] xl:text-2xl" >
            <div className="flex flex-row w-[95%] h-[60%] justify-around">
                   <img src={props.imgeurl} className="w-[40%] h-full" >
                
                  
                   </img>   
                   <div className="maininfo w-[55%] flex flex-col items-center justify-around ">
                         <p className="text-[0.8em] text-center">{props.name}</p>
                       
                          
                         <p className="text-[0.9em] text-purple-800">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price)} </p>
                   </div>
             

             </div>
             <div className="itembuttons h-[25%] w-full flex flex-row justify-center gap-[20%] items-center">
           
                <button className="buttonstyle text-[0.8em] w-[26%] sm:w-[23%] 2xl:w-[20%] h-[77%]  " onClick={handleAddcart} >Add to cart</button>
                <NavLink to={`/product/${props.id}`} className="buttonstyle text-[0.8em] w-[31%] sm:w-[24%] 2xl:w-[20%] h-[77%] flex items-center justify-center  " >go to product</NavLink>
                {/* <Heart className="fill-red-500 cursor-pointer w-[10%] sm:w-[8%]" size={'1.5em'} width={'8%'} color="red" ></Heart> */}

             </div>
        </li>





    )
    if(props.type==='wishlist')
    return(

 <motion.li  variants={{visible:{opacity:100,scale:1},invisible:{opacity:0,scale:0.5}}}  transition={{type:'spring',bounce:0.3}}
 key={props.id} className="flex flex-col  w-[47%]  sm:w-[30%] bg-white h-[30%] sm:h-[45%]  rounded-2xl  items-center justify-around text-[9px]  sm:text-[12.5px] lg:-text-[17px] xl:text-[19px]  2xl:text-[23px] " >
            <div className="flex flex-row w-[95%] h-[60%] justify-around">
                   <img src={props.imgeurl} className="w-[50%] h-full" >
                   </img>   
                   <div className="maininfo w-[45%] flex flex-col items-center justify-around ">
                         <p className="text-[0.8em] text-purple-800 font-bold text-center">{props.name}</p>
                         <p className="text-[0.9em] text-purple-800">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price)} </p>
                   </div>
             

             </div>
             <div className="itembuttons h-[30%] w-full flex flex-row justify-center gap-[5%] items-center">
           
                <button className="buttonstyle text-[0.8em]  h-[50%] w-[35%] sm:w-[23%] md:w-[25%]  " onClick={handleAddcart} >Add to cart</button>
                <NavLink to={`/product/${props.id}`} className="buttonstyle text-[0.8em] h-[50%] w-[35%] sm:w-[24%] md:w-[30%]  flex items-center justify-center  " >go to product</NavLink>
                <Heart className="fill-red-500 cursor-pointer h-[50%] w-[20%] sm:w-[15%]" size={'1.5em'} width={'7%'} color="red" ></Heart>

             </div>
        </motion.li>
    )



        if(props.type==='purchase')
    return(

 <li className="flex flex-col  w-[90%]  sm:w-[90%] bg-white min-h-[45%]  rounded-2xl  items-center justify-around text-[9px]  sm:text-[12.5px] lg:-text-[17px] xl:text-[19px]  2xl:text-[23px] " >
            <div className="flex flex-row w-[95%] h-[60%] justify-around">
                   <img src={props.imgeurl} className="w-[40%] h-full" >
                
                  
                   </img>   
                   <div className="maininfo w-[45%] flex flex-col items-center justify-around ">
                         <p className="text-[0.8em] text-purple-800 font-bold text-center">{props.name}</p>
                       
                          <p className="text-[0.9em] text-purple-800">quantity: {props.quantity}</p>
                         <p className="text-[0.9em] text-purple-800">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price)} </p>
                   </div>
             

             </div>
        
        </li>
    )
if(props.type==='admin'){
    return(
        <li className="flex flex-col  w-[90%]   bg-white  min-h-[23%]  rounded-2xl text-purple-800  items-center justify-around  text-[9px]  sm:text-[12.5px] lg:-text-[17px] xl:text-[16px]  2xl:text-[17px]" key={props.id}>
            <div className="flex flex-row h-[60%] w-full justify-around">
                   <img src={props.imgeurl} className="w-[40%] h-full" >
                   </img>
                   <div className="flex flex-col justify-around items-start w-[55%]">
                         <p className="font-bold">{props.name}</p>
                         <p className="type">Type : {props.type}</p>
                         <p className="  text-[0.75em] w-full   whitespace-normal break-words overflow-y-auto  h-[25%] "> <span className="text-[1em]"> Info : </span>saffasfasfasfasfasfasfasfasfadasffasسشبسشبشسببشسبشسبشسبشسبشسبشبسfasfasfasfasfafasfasfsfg </p>
                         <p className="text-purple-900 font-semibold">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price)}  </p>
                   </div>
             </div>
              <div className=" flex flex-row items-center text-[1.2em] font-semibold gap-[15%] justify-center w-full h-[25%]">
                         <button className=" buttonstyle text-center w-[22%]  sm:w-[16%] h-[75%]" >Delete</button>
                        <NavLink to={`/admin/editproduct/${props.id}`} className=" buttonstyle text-center w-[22%] sm:w-[16%] h-[75%]" > Edit  </NavLink>

                    </div>
        </li>
    )
}


if(props.type==='offer'){
    return(
        <motion.li 
         className="flex flex-col  w-[90%]   bg-white  min-h-[23%] max-h-[23%]  rounded-2xl text-purple-800  items-center justify-around  text-[9px]  sm:text-[12.5px] lg:-text-[17px]   2xl:text-[18px]" key={props.id}>
            <div className="flex flex-row h-[60%] w-full justify-around">
                   <img src={props.imgeurl} className="w-[40%] h-full" >
                   </img>
                   <div className="flex flex-col justify-around items-start w-[55%]">
                         <p className="font-bold">{props.name}</p>
                         <p className="type">Type : {props.type}</p>
                        
                         <p className="  text-[0.75em] w-full   whitespace-normal break-words overflow-y-auto  min-h-[25%] "> <span className="text-[1em]"> Info : </span>saffasfasfasfasfasfasfasfasfadasffasسشبسشبشسببشسبشسبشسبشسبشسبشبسfasfasfasfasfafasfasfsfg </p>
                         <div className="flex flex-row w-[100%] text-[0.9em] items-center justify-around h-[25%]">
                                   <p className="text-purple-900 font-semibold  w-[47%]">newprice : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price)}</p>
                                   <p className="text-red-600 font-semibold w-[47%]">oldprice : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price)}</p>
                         </div>
                        
                   </div>
             </div>
              <div className=" flex flex-row items-center text-[1.2em] font-semibold gap-[15%] justify-center w-full h-[25%]">
                         <button className=" buttonstyle text-center w-[22%]  sm:w-[16%] h-[65%] 2xl:h-[80%]" >Delete</button>
                        <NavLink to={`/admin/editproduct/${props.id}`} className=" buttonstyle text-center text-[1.1em] self-center w-[22%] sm:w-[16%] h-[65%] 2xl:h-[80%]" > Edit  </NavLink>

                    </div>
        </motion.li>
    )
}


    
}