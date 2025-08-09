import React from "react"


export const Addoredit:React.FC<{type:string}>=(props)=>{


    


    return(

                <div className="flex w-full flex-col items-center justify-center gap-[3%] bg-gray-200 h-[700px] sm:h-[1000px] ">
                          <h1 className=" flex  underline text-purple-800  text-[9em] font-bold justify-center items-center ">{props.type==='add'? 'Add Product ': 'Edit Product'}</h1>
                      <form className=" flex flex-col text-[5em] sm:text-[4.2em] 2xl:text-[5em] justify-center gap-[5%] text-purple-800  bg-white items-center h-[80%] w-[92%] sm:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] rounded-2xl"  >
                     
                                
                        <input className='h-[5%] w-[65%] sm:w-[50%] rounded-2xl border-2 border-purple-900 text-center ' type="text" name="name" placeholder='Product name' required={props.type==='add'}></input>

                   
                        <div className="h-[7%] flex w-[65%] sm:w-[50%]  flex-row items-center gap-[5%]">
                              <p className="w-[40%]">Type product :</p>
                             <select className="w-[40%] text-center  border-2 border-purple-900" name="type" required={props.type==='add'}>
                            <option>jeans</option>
                            <option>t-shirts</option>
                            <option>socks</option>
                            <option>jackets</option>
                            <option>shirts</option>
                            <option>shoes</option>
                             </select>
                        </div>
                         
                             
                        <input className="h-[5%] w-[65%] sm:w-[50%] rounded-2xl border-2 border-purple-900 text-center " placeholder="More Info" type='text' name="moreinfo" required={props.type==='add'}></input>           
                        <input placeholder="old-price" className="h-[5%] w-[65%] sm:w-[50%] rounded-2xl border-2 border-purple-900 text-center " type="number" name="oldprice" required={props.type==='add'}></input>
                        <input placeholder="NEW-Price" className="h-[5%] w-[65%] sm:w-[50%] rounded-2xl border-2 border-purple-900 text-center " type="number" name="newprice" required={props.type==='add'}></input>
                        
                     
                  <div className=" flex flex-row w-[75%]  sm:w-[60%] items-center gap-[5%] h-[5%]">
                    <p className="w-[35%] text-[0.9em] text-end">Main_Imge-file:</p>
                    <input type="file" name="imgeurl" className="w-[50%] text-[0.9em]  border-2 text-center border-purple-900" placeholder="mainImge-url" ></input>
                  </div>




                         <div className=" flex flex-row w-[98%] sm:w-[75%] justify-start items-start gap-[5%] h-[15%]">
                    <p className="w-[30%] h-[50%] text-end text-[0.8em] sm:text-[0.9em]">Slider_Imges-url:</p>
                    <div className=" flex flex-row h-full w-[70%] items-start justify-between bg-gray-200 ">
                         <div className=" flex flex-col justify-between overflow-y-auto h-full gap-[5%] w-[80%]">
                              <input type="text" name="imgeurl" className="w-full text-[0.8em] max-h-[23%]  sm:max-h-[35%]   min-h-[23%]       sm:min-h-[35%] bg-white     border-2 text-center border-purple-900 rounded-2xl" placeholder="SliderImge-url" ></input>
                                <input type="text" name="imgeurl" className="w-full text-[0.8em] max-h-[23%]  sm:max-h-[35%]   min-h-[23%]       sm:min-h-[35%] bg-white    border-2 text-center border-purple-900 rounded-2xl" placeholder="SliderImge-url" ></input>
                                 <input type="text" name="imgeurl" className="w-full text-[0.8em] max-h-[23%]  sm:max-h-[35%]   min-h-[23%]       sm:min-h-[35%] bg-white  border-2 text-center border-purple-900 rounded-2xl" placeholder="SliderImge-url" ></input>
                         </div>
                            <button className="buttonstyle text-center w-[15%] text-[0.9em] h-[20%] sm:h-[30%]">+</button>
                    </div>
                    
                  </div>
                    
                              
                              <button className="buttonstyle font-bold w-[25%] sm:w-[12%] h-[5%]" >{props.type==='add'?'Add':'Edit'}</button>
                                 
                    </form>
                                     
                </div>   
                
                
      
    )
}