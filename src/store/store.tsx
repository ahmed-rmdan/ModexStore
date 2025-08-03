import { createSlice ,configureStore} from "@reduxjs/toolkit";
import { dialogreducers } from "./reducers/dialog";
export type item={price:number,name:string,id:string,quantity:number}
const intialstate:item[]=[]
const cartslice=createSlice({name:'cartslice',initialState:intialstate,reducers:{
      additeem(state:item[]=[],action:{type:string,payload:item}){
          const id=action.payload.id
          const index=state.findIndex(elm=>elm.id===id)
          if(index>-1) return;
        const newitem=action.payload
           state.push(newitem)
    },
     removeitem(state:item[],action:{type:string,payload:{id:string}}){
          const id=action.payload.id
          const index=state.findIndex(elm=>elm.id===id)
          state.splice(index,index+1)
         
     },
      increase(state:item[],action:{type:string,payload:{id:string}}){
          const id=action.payload.id
          const index=state.findIndex(elm=>elm.id===id)
            state[index].quantity=state[index].quantity+1
     },
       decrease(state:item[],action:{type:string,payload:{id:string}}){
          const id=action.payload.id
          const index=state.findIndex(elm=>elm.id===id)
          if( state[index].quantity===1) return;
            state[index].quantity=state[index].quantity-1
     }


}
   
 })

 const initialdialo:string=''


const dialogslice=createSlice({name:'dialog',initialState:initialdialo,reducers:dialogreducers})



export const store=configureStore({reducer:cartslice.reducer})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const cartactions=cartslice.actions