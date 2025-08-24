import { createSlice ,configureStore} from "@reduxjs/toolkit";
import { dialogreducers } from "./reducers/dialog";
import { paginationreducers } from "./reducers/pagination";
import { userreducer } from "./reducers/user";

export type item={price:number,name:string,id:string,quantity:number,imgeurl:string}
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
          const index=state.findIndex(elm=>{return elm.id===id})
          console.log(index)
       
          state.splice(index,1)
        
         
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

 const initialdialo:{dialog:string,imges:string[],noimge:number}={dialog:'',imges:[],noimge:0}


const dialogslice=createSlice({name:'dialog',initialState:initialdialo,reducers:dialogreducers})
const inistialpagination:number=1
const paginationslice=createSlice({name:'pagination',initialState:inistialpagination,reducers:paginationreducers})

const userinitial:{islogin:boolean}={islogin:false}
const userslice=createSlice({name:'user',initialState:userinitial,reducers:userreducer})

export const store=configureStore({reducer:{cart:cartslice.reducer,dialog:dialogslice.reducer,pagination:paginationslice.reducer,user:userslice.reducer}})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const cartactions=cartslice.actions
export const useractions=userslice.actions
export const dialogactions=dialogslice.actions
export const paginationactions=paginationslice.actions