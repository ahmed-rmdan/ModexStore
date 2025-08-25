import { createSlice ,configureStore} from "@reduxjs/toolkit";
import { dialogreducers } from "./reducers/dialog";
import { paginationreducers } from "./reducers/pagination";
import { userreducer } from "./reducers/user";



export type item={price:number,name:string,id:string,quantity:number,imgeurl:string}
const intialstate:{items:item[],purchase:item[]}={items:[],purchase:[]}
const cartslice=createSlice({name:'cartslice',initialState:intialstate,reducers:{
      additeem(state:{items:item[],purchase:item[]},action:{type:string,payload:item}){
          const id=action.payload.id
          const index=state.items.findIndex(elm=>elm.id===id)
          if(index>-1) return;
        const newitem=action.payload
           state.items.push(newitem)
    },
     removeitem(state:{items:item[],purchase:item[]},action:{type:string,payload:{id:string}}){
          const id=action.payload.id
          const index=state.items.findIndex(elm=>{return elm.id===id})
          console.log(index)
       
          state.items.splice(index,1)
        
         
     },
      increase(state:{items:item[],purchase:item[]},action:{type:string,payload:{id:string}}){
          const id=action.payload.id
          const index=state.items.findIndex(elm=>elm.id===id)
            state.items[index].quantity=state.items[index].quantity+1
     },
       decrease(state:{items:item[],purchase:item[]},action:{type:string,payload:{id:string}}){
          const id=action.payload.id
          const index=state.items.findIndex(elm=>elm.id===id)
          if( state.items[index].quantity===1) return;
            state.items[index].quantity=state.items[index].quantity-1
     },
       purchase(state:{items:item[],purchase:item[]}){
        localStorage.setItem('items',JSON.stringify(state.items))
             return state
                    
     },
        getpurchase(state:{items:item[],purchase:item[]}){
          const items =localStorage.getItem('items')
          if(!items){
            return state={...state,purchase:[]}
          }

        const purchaseitems :item[]=JSON.parse(items)
        return state={...state,purchase:purchaseitems as item[]}
             
                    
     }
    



}
   
 })

 const initialdialo:{dialog:string,imges:string[],noimge:number}={dialog:'',imges:[],noimge:0}


const dialogslice=createSlice({name:'dialog',initialState:initialdialo,reducers:dialogreducers})
const inistialpagination:{page:number,catogry:string|undefined}={page:1,catogry:''}
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