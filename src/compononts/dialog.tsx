import React from "react";

export const Dialog:React.FC<{open:string}>=(props)=>{

if(props.open==='cartdialoge'){
 return(
       <dialog open={props.open==='cartdialoge'} >
       <div className="overlay">
               <div className="dialog">
                    <p className="totalprice"> your totalprice :  </p>
                    <div className="button-container">
                        <button > proceed</button>
                        <button > close</button>
                    </div>

               </div>
       </div>
       
       </dialog>
    )

}
if(props.open==='formdialog'){


 return(
       <dialog open={props.open==='formdialog'} >
       <div className="overlay">
               <div className="dialog">
                    <form className="formdialog">
                        <p>your name</p>
                        <input type="text"></input>
                        <p>your address</p>
                        <input type="text"></input>
                    </form>
                    <div className="button-container">
                        <button > confirm </button>
                        <button > close</button>
                    </div>

               </div>
       </div>
       
       </dialog>
    )


}
if(props.open==='thankyoudialog'){
return(
       <dialog open={props.open==='thankyoudialog'} >
       <div className="overlay">
               <div className="dialog">
                              <p className="thankyou">thank for your purchasing</p>
                    <div className="button-container">
                        
                        <button > close</button>
                    </div>

               </div>
       </div>
       
       </dialog>
    )
}
if(props.open==='contact'){
    return(
    <dialog open={props.open==='contact'} >
       <div className="fixed w-full h-full bg-gray-500 opacity-80 z-[2000]">
               <div className="fixed w-[50%] h-[50%] top-[25%] left-[25%] bg-white z-3000 opacity-100 flex flex-col items-center justify-around">
                            <div className="flex flex-col items-center justify-around text-3xl gap-12 text-purple-800">
                                  <p> E-MAIL : FOOD-ORDER@gmail.com</p>
                              <p> TELPHONE : 021111000000</p>
                              <p>HOTLINE : 19088</p>
                               <button className="buttonstyle w-[120px] h-[40px]" > close</button>
                            </div>
                             
                              
                    
                        
                       
                    

               </div>
       </div>
       
       </dialog>

    )
}
   
}