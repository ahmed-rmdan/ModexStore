
import React from "react";
import { Listitem } from "../compononts/listitem";
import { useAppSelector } from "../store/hook";
import { useRef } from "react";
import {motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { useState ,useEffect} from "react";
import { animate } from "framer-motion";
import { useAppDispatch } from "../store/hook";
import { cartactions } from "../store/store";
import { useMutation } from "@tanstack/react-query";
import { islogin } from "../https/https";
export const Puchasepg:React.FC<{}>=()=>{
const navigate=useNavigate()
const dispatch=useAppDispatch()
const [progressvalue,setprogressvalue]=useState(0)
const [currlocation,setcurrlocation]=useState<[number,number]|string>('')
const address=useRef<null|HTMLInputElement>(null)
const [err,seterr]=useState(false)

const {mutate}=useMutation({
mutationFn:islogin,
onSuccess:() =>{   
  localStorage.setItem('address',JSON.stringify({address:address.current?.value,location:currlocation}))
   navigate('/payment')
},
onError:()=>{
  navigate('/signin')
}
})


  useEffect(() => {
    dispatch(cartactions.getpurchase())
    animate(0, 30, {
      duration: 2,
      onUpdate: latest => setprogressvalue(latest),
    });
  }, []);

const cart=useAppSelector((state)=>state.cart.purchase)
console.log(cart)
   const totalprice=cart.reduce((curr,elm)=>{
    return  curr+(elm.quantity*elm.price)
},0)





function handleaddlocation(){
  const location=navigator.geolocation.getCurrentPosition(position=>{
    setcurrlocation([position.coords.latitude,position.coords.longitude]) 
  },
  (err)=>{
    setcurrlocation('')
  }

)
  

}

function handlegotopayment(){
if(!address.current?.value){
  seterr(true)
  return;
}
mutate()

    
}

console.log(currlocation)

    return(       



       
       <div className="bg-gray-200 flex justify-center items-center w-full h-[950px] text-[9px]  sm:text-[12.5px] lg:-text-[17px] xl:text-[17px] ">
                  
               
                  <div className="bg-white flex flex-col items-center w-[95%] sm:w-[65%] h-[90%] justify-center gap-[7%] rounded-2xl">
                    
                      <motion.progress  max={100} value={progressvalue}  className="custom-progress border-4  border-purple-800 rounded-[6px] w-[45%] sm:w-[40%] h-[2%] xl:h-[2.5%] 2xl:h-[3%] "></motion.progress>
                                      
                         <div className="flex flex-col min-h-[30%] max-h-[30%] w-[80%] sm:w-[60%] items-center gap-[5%] overflow-auto bg-gray-100 rounded-2xl">
                              { cart.map(elm=>{
                                 return   <Listitem key={elm.id} listtype="purchase" type='' oldprice={elm.price} price={elm.price} id={elm.id} imgeurl={elm.imgeurl} name={elm.name} moreinfo='' 
                                                                            quantity={elm.quantity}></Listitem>
                                                            })
                                                                     
                                                        }
                                   
                         </div>
                          <p className="text-purple-800  text-[1.6em] font-extrabold"> Your TotalPrice : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(totalprice)} </p>
                              <div className="flex flex-col items-center justify-around w-[95%] sm:w-[80%] h-[22%]">

                                   <input  className="w-[55%] rounded-[8px] text-[1.2em] border-2 border-purple-800  h-[25%]" type='text' required ref={address} placeholder="Delivery Address" />
                                        <p className="text-purple-800 text-[1.5em]">&</p>
                                      <button className="buttonstyle w-[45%] 2xl:w-[27%] text-center text-[1.1em] h-[17%] sm:h-[20%] font-semibold" onClick={handleaddlocation}>
                                        {currlocation===''?'Click here to Add Location':'Location Adeed'}</button>
                                       <p className="text-red-600 text-[1.1em] h-[5%]">{err?'please add order address':''}</p>
                             </div>

                            
                    <button onClick={handlegotopayment} className="buttonstyle text-center item-center  w-[40%] xl:w-[20%] h-[5%] text-[1.5em] font-bold ">Go To Payment</button>

                  </div>

        </div>

                      )  
                    
                    
                    
                    
                    
                    }





