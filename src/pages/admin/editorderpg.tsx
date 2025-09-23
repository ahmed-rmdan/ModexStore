import React from "react"
import { useParams } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editorder } from "../../https/https"
import { useNavigate } from "react-router-dom"
export const Ordereditpg:React.FC<{}>=()=>{
const parms=useParams()
const navigate=useNavigate()
        const queryclient=useQueryClient()
    const {mutate,isPending}=useMutation({
        mutationFn:editorder,
        onSuccess:()=>{
              queryclient.invalidateQueries({queryKey:['orders']})
              navigate('/admin/orders')
        }

    })

    
function handleorderedit(ev:React.FormEvent<HTMLFormElement>){
    ev.preventDefault()
    
    const formdata=new FormData(ev.currentTarget)
    const type=formdata.get('type')
    console.log(type,parms.orderid)
   mutate({orderid:parms.orderid as string,state:type as string})

}

    return(

                <div className="flex w-full flex-col items-center justify-center gap-[5%] bg-gray-200 h-[670px] sm:h-[900px] ">
                          <h1 className=" flex  underline text-purple-800 ] text-[10em] font-bold justify-center items-center "> Edit Order</h1>
                      <form onSubmit={handleorderedit} className=" flex flex-col text-[5.8em] sm:text-[4.8em] lg:text-[4.2em] 2xl:text-[5em] justify-center gap-[8%] text-purple-800
                        bg-white items-center h-[40%] w-[92%] sm:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] rounded-2xl"  >
                              
                        <div className="h-[30%] flex w-[95%] sm:w-[70%] lg:w-[50%] justify-center  flex-row items-center gap-[5%]">
                              <p className="w-[40%] text-[1.5em] font-semibold text-center">state :</p>
                             <select className="w-[40%] text-center  border-2 border-purple-900" name="type" required>
                            <option>Prepearing</option>
                            <option>OutForDelivery</option>
                            <option>Done</option>
                            <option>Cancel</option>
                          
                             </select>
                        </div>
                                     
                              <button className="buttonstyle font-bold w-[26%] text-[1.3em] sm:w-[20%] lg:w-[13%] h-[14%]  sm:h-[15%] "  > {isPending?'..pending':'Edit'}</button>
                                 
                    </form>
                                     
                </div>   
                
                
      
    )
}