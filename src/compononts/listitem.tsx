import React from "react"
import { NavLink} from "react-router-dom"

export const Listitem:React.FC<{imgeurl:string,name:string,quantity:number,price:number,type:string,id:string}>=(props)=>{
  
if(props.type==='cart' ){
   
    return(

        <li className="flex flex-col w-[90%] bg-white h-[7em] justify-around" >
            <div className="flex flex-row w-full h-[65%] justify-around">
                   <img src={props.imgeurl} className="w-[40%] h-full" >
                
                  
                   </img>   
                   <div className="maininfo w-[55%] flex flex-col items-center justify-around ">
                         <p className="text-[0.7em] text-center">{props.name}</p>
                         <p className="text-[0.6em]">quantity: {props.quantity}</p>
                         <p className="text-[0.7em] text-purple-800">price : {props.price*props.quantity} </p>
                   </div>
             

             </div>
             <div className="itembuttons h-[30%] w-full flex flex-row justify-around items-center">
                <button className=" text-[0.9em] cursor-pointer  " >+</button>
                <button className=" text-[0.9em] cursor-pointer  " >-</button>
                <button className="buttonstyle text-[0.7em] w-[35%]  " >remove</button>
                

             </div>
        </li>
    )
}
if(props.type==='slider' ){
   
    return(

        <li className="flex flex-col min-w-[300px] max-w-[300px] bg-gray-100 h-[100%] text-2xl rounded-2xl  items-center justify-around" >
            <div className="flex flex-row w-[95%] h-[60%] justify-around">
                   <img src={props.imgeurl} className="w-[40%] h-full" >
                
                  
                   </img>   
                   <div className="maininfo w-[55%] flex flex-col items-center justify-around ">
                         <p className="text-[0.7em] text-center">{props.name}</p>
                       
                          <p className="text-[0.8em] text-red-600 line-through"> 120</p>
                         <p className="text-[0.9em] text-purple-800">price : {props.price*props.quantity} </p>
                   </div>
             

             </div>
             <div className="itembuttons h-[25%] w-full flex flex-row justify-around items-center">
           
                <button className="buttonstyle text-[0.7em] w-[35%] h-[50%]  " >Add to cart</button>
               <NavLink className="buttonstyle text-[0.6em] w-[35%] h-[50%] flex items-center justify-center  " to={`/products/${props.id}`}>Go to Product</NavLink> 
                

             </div>
        </li>
    )
}
if(props.type==='products')
    return(

 <li className="flex flex-col w-[90%] bg-gray-100 h-[150px]  rounded-2xl  items-center justify-around text-[12px] md:text-[15px] lg:text-[20px] xl:text-2xl" >
            <div className="flex flex-row w-[95%] h-[60%] justify-around">
                   <img src={props.imgeurl} className="w-[40%] h-full" >
                
                  
                   </img>   
                   <div className="maininfo w-[55%] flex flex-col items-center justify-around ">
                         <p className="text-[0.8em] text-center">{props.name}</p>
                       
                          
                         <p className="text-[0.9em] text-purple-800">price : {props.price*props.quantity} </p>
                   </div>
             

             </div>
             <div className="itembuttons h-[25%] w-full flex flex-row justify-around items-center">
           
                <button className="buttonstyle text-[0.8em] w-[25%] h-[80%]  " >Add to cart</button>
                <NavLink to={`/products/${props.id}`} className="buttonstyle text-[0.8em] w-[25%] h-[80%] flex items-center justify-center  " >go to product</NavLink>
                

             </div>
        </li>





    )

    
}