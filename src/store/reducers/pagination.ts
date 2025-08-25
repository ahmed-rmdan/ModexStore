
export const paginationreducers={
    handlepage(state:{page:number,catogry:string|undefined},action:{type:string,payload:{page:number}}){
                return state={...state,page:action.payload.page}
    },
     handlecatogry(state:{page:number,catogry:string |undefined},action:{type:string,payload:{catogry:string | undefined}}){
                     if(!action.payload.catogry){
                        return state
                     }

                return state={...state,catogry:action.payload.catogry}
    }
    

}