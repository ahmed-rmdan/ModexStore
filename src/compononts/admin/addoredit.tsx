import React from "react"
import { Sliderimge } from "./sliderimages"
import { useMutation } from "@tanstack/react-query"
import { addproduct } from "../../https/https"
import { useNavigate } from "react-router-dom"
import { editproduct } from "../../https/https"
import { useParams } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"
export const Addoredit:React.FC<{type:string}>=(props)=>{
const navigate=useNavigate()
const parms=useParams()
const queryClient=useQueryClient()
const {mutate:mutateaddproduct}=useMutation({
mutationKey:['products'],
mutationFn:addproduct,
onSuccess:()=>{
     queryClient.invalidateQueries({ queryKey: ['products'] })
    return navigate('/admin/products/allproducts')
}
 ,

onError:()=>{
  navigate('/admin/login')
}

})

const {mutate:mutateditproduct}=useMutation({
mutationKey:['products'],
mutationFn:editproduct,
onSuccess:()=>{   
   queryClient.invalidateQueries({ queryKey: ['products'] })
  return navigate('/admin/products/allproducts')
},
onError:()=>{
  navigate('/admin/login')
}

})
console.log(props.type)
async function handlesubmit(ev:React.FormEvent<HTMLFormElement>){
  ev.preventDefault()
  const data = new FormData(ev.currentTarget);
  console.log(props.type)
  if(props.type==='add'){
          
        mutateaddproduct(data)
  }
  if(props.type==='edit'){
    const editdata={data,id:parms.productid as string}
      mutateditproduct(editdata)
  }


}  


    return(

                <div className="flex w-full flex-col items-center justify-center gap-[3%] bg-gray-200 h-[700px] sm:h-[1000px] ">
                          <h1 className=" flex  underline text-purple-800  text-[9em] font-bold justify-center items-center ">{props.type==='add'? 'Add Product ': 'Edit Product'}</h1>
                      <form className=" flex flex-col text-[5em] sm:text-[4.2em] 2xl:text-[5em] justify-center gap-[5%] text-purple-800  bg-white items-center h-[80%] w-[92%] sm:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] rounded-2xl" onSubmit={handlesubmit} >
                     
                                
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
                         
                             
                        <textarea className="h-[5%] w-[65%] sm:w-[50%] rounded-2xl border-2 border-purple-900 text-center
                         " placeholder="More Info"  name="moreinfo" required={props.type==='add'}></textarea>           
                        <input placeholder="old-price" className="h-[5%] w-[65%] sm:w-[50%] rounded-2xl border-2 border-purple-900 text-center " type='number' name="oldprice" required={props.type==='add'}></input>
                        <input placeholder="NEW-Price" className="h-[5%] w-[65%] sm:w-[50%] rounded-2xl border-2 border-purple-900 text-center " type="number" name="newprice" required={props.type==='add'}></input>
                        
                     
                  <div className=" flex flex-row w-[90%]  sm:w-[65%] items-center gap-[5%] h-[5%]">
                    <p className="w-[35%] text-[0.9em] text-end">Main_Imge-file:</p>
                    <input type="file" name="mainimge" className="w-[50%] text-[0.9em] border-2 text-center border-purple-900" placeholder="mainImge-url" ></input>
                  </div>


                              <Sliderimge></Sliderimge>
                   
                              <button className="buttonstyle font-bold w-[25%] sm:w-[19%] lg:w-[15%] h-[5%]" >{props.type==='add'?'Add':'Edit'}</button>
                                 
                    </form>
                                     
                </div>   
                
                
      
    )
}